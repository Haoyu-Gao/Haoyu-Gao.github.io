---
layout: single
title: "Travel Map"
permalink: /travelmap/
---

## 🌍 Countries I've Visited

{% raw %}
<!-- Leaflet CSS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />

<div id="map" style="width: 100%; height: 80vh; margin-top: 10px;"></div>

<!-- Leaflet JS -->
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
<script src="https://unpkg.com/leaflet-geojson-vt/leaflet-geojson-vt.js"></script>

<!-- Load world country GeoJSON -->
<script src="https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json"></script>

<script>
  const visitedISO = [
    "CN", // China
    "JP", // Japan
    "TH", // Thailand
    "AU", // Australia
    "NZ", // New Zealand
    "US", // United States
    "KR", // South Korea
    "AE", // United Arab Emirates
    "ES", // Spain
    "FR"  // France
  ];

  const map = L.map('map').setView([20, 0], 2);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 6,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Fetch GeoJSON and style visited countries
  fetch("https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json")
    .then(res => res.json())
    .then(data => {
      L.geoJSON(data, {
        style: function(feature) {
          const iso = feature.id;  // ISO 3166-1 alpha-2
          return {
            color: "#333",
            weight: 1,
            fillOpacity: 0.7,
            fillColor: visitedISO.includes(iso) ? "#32CD32" : "#ccc"
          };
        },
        onEachFeature: function (feature, layer) {
          if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
          }
        }
      }).addTo(map);
    });
</script>
{% endraw %}
