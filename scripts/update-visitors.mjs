#!/usr/bin/env node
/*
 * Refreshes _data/visitors.json from the whos.amung.us feed.
 *
 * The browser widget that used to draw this map was blocked by every common
 * content blocker (it pulled in t.dtscout.com / pd.sharethis.com), so the map
 * silently collapsed to an empty box. We fetch the same feed here instead —
 * server side, on a schedule — and the page draws the pins itself from
 * _data/visitors.json. The browser makes no third-party request for the map.
 *
 * Counting semantics, because the feed constrains them:
 *   the endpoint returns a rolling window of the ~50 most recent visitors, with
 *   no visitor ids. Summing it across polls would double-count everyone still
 *   inside the window, so we don't. Instead:
 *     - `locations` accumulates every distinct place ever seen (a set — exact),
 *     - `recent` is that place's share of the LATEST window only (exact for
 *       that window), and drives the dot size,
 *     - `first_seen` / `last_seen` record when a place entered/last appeared.
 *   So "12 countries" is a true all-time count and dot size is true for the
 *   current window. No derived "total visits" is published, because the feed
 *   cannot support one honestly.
 *
 * Usage: node scripts/update-visitors.mjs
 */

import fs from 'node:fs';
import path from 'node:path';

const SITE_KEY = 'xvi5vhvj7l';
const DATA_FILE = path.join(import.meta.dirname, '..', '_data', 'visitors.json');

// SVG viewBox of _includes/world-map.svg: lon -180..180 -> 0..1000, lat 90..-90 -> 0..500
const MAP_W = 1000;
const MAP_H = 500;

const TODAY = new Date().toISOString().slice(0, 10);

const round = (n, places = 1) => Number(n.toFixed(places));

const project = (lat, lon) => ({
  x: round(((Number(lon) + 180) / 360) * MAP_W),
  y: round(((90 - Number(lat)) / 180) * MAP_H),
});

// Proportional-symbol radius (area ~ visitors in the current window) with a
// floor so a single visitor is still a comfortable hit target, and a ceiling so
// one busy datacentre can't swamp the map. Places absent from the current
// window keep the floor size and are drawn faded by the stylesheet.
const radius = (recent) => round(Math.min(11, Math.max(4, 3.2 * Math.sqrt(recent))));

const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
const countryName = (cc) => {
  if (!cc || cc === 'UN') return 'Unknown';
  try {
    return regionNames.of(cc) || cc;
  } catch {
    return cc;
  }
};

// 'AU' -> regional indicator pair
const flag = (cc) =>
  !cc || cc === 'UN' || !/^[A-Z]{2}$/.test(cc)
    ? '🌐'
    : String.fromCodePoint(...[...cc].map((c) => 0x1f1a5 + c.charCodeAt(0)));

const keyOf = (lat, lon, cc) => `${lat},${lon},${cc}`;

async function fetchWindow() {
  const url =
    `https://whos.amung.us/pingjs/?k=${SITE_KEY}&c=m&v=27&r=${Math.ceil(Math.random() * 9999)}`;
  const res = await fetch(url, {
    headers: { 'user-agent': 'haoyu-gao.github.io visitor-map updater' },
  });
  if (!res.ok) throw new Error(`feed returned HTTP ${res.status}`);
  const body = await res.text();

  // Response is a JSONP-ish call: WAU_r_m('1','key',-1,[ ...array... ]);
  const start = body.indexOf('[');
  const end = body.lastIndexOf(']');
  if (start === -1 || end === -1) throw new Error(`unexpected feed body: ${body.slice(0, 120)}`);
  const rows = JSON.parse(body.slice(start, end + 1));
  if (!Array.isArray(rows)) throw new Error('feed payload was not an array');
  return rows.filter((row) => row && row.lat != null && row.lon != null);
}

function readExisting() {
  try {
    const prev = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    return Array.isArray(prev.locations) ? prev.locations : [];
  } catch {
    return [];
  }
}

function build(previous, rows) {
  // Tally the current window. The feed already rounds coordinates to ~0.1°,
  // so they group cleanly without extra bucketing.
  const window = new Map();
  for (const row of rows) {
    const cc = row.cc || 'UN';
    const key = keyOf(row.lat, row.lon, cc);
    const seen = window.get(key);
    if (seen) {
      seen.recent += 1;
      if (!seen.city && row.city) seen.city = row.city;
    } else {
      window.set(key, { lat: row.lat, lon: row.lon, city: row.city || null, cc, recent: 1 });
    }
  }

  const merged = new Map();
  for (const loc of previous) {
    const key = keyOf(loc.lat, loc.lon, loc.cc);
    merged.set(key, {
      lat: loc.lat,
      lon: loc.lon,
      city: loc.city || null,
      cc: loc.cc,
      first_seen: loc.first_seen || TODAY,
      last_seen: loc.last_seen || TODAY,
      recent: 0,
    });
  }

  for (const [key, hit] of window) {
    const existing = merged.get(key);
    if (existing) {
      existing.recent = hit.recent;
      existing.last_seen = TODAY;
      if (!existing.city && hit.city) existing.city = hit.city;
    } else {
      merged.set(key, { ...hit, first_seen: TODAY, last_seen: TODAY });
    }
  }

  const locations = [...merged.values()]
    // Draw the big dots first so the small ones stay clickable on top of them.
    .sort((a, b) => b.recent - a.recent || a.cc.localeCompare(b.cc))
    .map((loc) => ({
      ...loc,
      ...project(loc.lat, loc.lon),
      r: radius(loc.recent),
      label: loc.city ? `${loc.city}, ${countryName(loc.cc)}` : countryName(loc.cc),
    }));

  const tally = new Map();
  for (const loc of locations) {
    if (loc.cc === 'UN') continue;
    const entry = tally.get(loc.cc);
    if (entry) entry.places += 1;
    else tally.set(loc.cc, { places: 1 });
  }
  const countries = [...tally.entries()]
    .map(([cc, { places }]) => ({ cc, name: countryName(cc), flag: flag(cc), places }))
    .sort((a, b) => b.places - a.places || a.name.localeCompare(b.name));

  return {
    updated: TODAY,
    // Exact set cardinalities — safe to publish.
    country_count: countries.length,
    place_count: locations.length,
    city_count: new Set(
      locations.filter((loc) => loc.city).map((loc) => `${loc.city},${loc.cc}`),
    ).size,
    // Size of the rolling window this snapshot was built from.
    window_size: rows.length,
    countries,
    locations,
  };
}

const rows = await fetchWindow();
const data = build(readExisting(), rows);
fs.writeFileSync(DATA_FILE, `${JSON.stringify(data, null, 2)}\n`);
console.log(
  `visitors.json: ${data.place_count} places in ${data.country_count} countries ` +
    `(latest window: ${data.window_size} visitors)`,
);
