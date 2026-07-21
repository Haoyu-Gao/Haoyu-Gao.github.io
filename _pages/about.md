---
permalink: /
title: "Haoyu Gao — PhD Candidate at the University of Melbourne"
excerpt: "PhD candidate researching documentation maintenance and knowledge acquisition in software engineering at the University of Melbourne."
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<div class="section-block">
<h2>About Me</h2>

<p>I am currently a fourth-year PhD student at the <a href="https://www.unimelb.edu.au/">University of Melbourne</a> (started from Jan 2023). I am supervised by A/Prof <a href="https://ctreude.ca/">Christoph Treude</a> and Dr. <a href="https://scholar.google.dk/citations?user=-mrcwTwAAAAJ&hl=en">Mansooreh Zahedi</a>.</p>

<p>My research intersects empirical and automated software engineering, focusing on improving how developers create, maintain, and use software documentation. I study documentation as a socio-technical artefact, combining repository mining, qualitative methods, and machine learning. With the rise of LLMs, my work is pivoting towards human–AI interaction, specifically examining how development knowledge is communicated to AI agents.</p>

<span class="research-tag">Qualitative Methods</span>
<span class="research-tag">Software Ecosystems</span>
<span class="research-tag">Documentation Maintenance</span>
<span class="research-tag">Machine Learning for SE</span>
<span class="research-tag">Human-AI Interaction</span>

<p style="margin-top: 1em;">Before starting my Ph.D, I obtained my Master's degree in Information Technology from the University of Melbourne (WAM: 86.7/100), and my Bachelor's degree in Mathematics and Applied Mathematics from Fuzhou University, China.</p>
</div>


<div class="section-block">
<h2>News</h2>

<ul class="news-list">
  {% for item in site.data.news %}
  <li class="news-item">
    <span class="news-date">{{ item.date }}</span>
    <span class="news-text">{{ item.text | markdownify | remove: '<p>' | remove: '</p>' | strip_newlines }}</span>
  </li>
  {% endfor %}
</ul>
</div>


<div class="section-block">
<h2>Publications</h2>

<h3 style="margin-top: 0.5em; margin-bottom: 0.8em; font-size: 1.1em; color: #374151;">Published</h3>

<div class="pub-card">
  <span class="pub-venue pub-venue--msr">MSR'26</span>
  <div class="pub-title"><a href="https://arxiv.org/abs/2601.13754">On Autopilot? An Empirical Study of Human-AI Teaming and Review Practices in Open Source</a></div>
  <div class="pub-authors"><strong>H. Gao</strong>, P. Banyongrakkul, H. Guan, M. Zahedi, C. Treude</div>
  <div class="pub-venue-text">Short Paper in MSR'26: 23rd International Conference on Mining Software Repositories, 2026 (CORE A)</div>
  <div class="pub-links"><a href="https://arxiv.org/pdf/2601.13754"><i class="fas fa-file-pdf"></i> PDF</a><a href="https://arxiv.org/abs/2601.13754"><i class="fas fa-archive"></i> arXiv</a></div>
</div>

<div class="pub-card">
  <span class="pub-venue pub-venue--emse">EMSE'26</span>
  <div class="pub-title"><a href="https://arxiv.org/abs/2503.19444">AI Failures in the Eyes of the Downstream Developer: A First Look at Concerns, Practices, and Challenges</a></div>
  <div class="pub-authors"><strong>H. Gao</strong>, M. Zahedi, W. Jiang, H. Lin, J. Davis, and C. Treude</div>
  <div class="pub-venue-text">Empirical Software Engineering (Springer Nature), 2026 (CORE A)</div>
  <div class="pub-links"><a href="https://arxiv.org/pdf/2503.19444"><i class="fas fa-file-pdf"></i> PDF</a><a href="https://arxiv.org/abs/2503.19444"><i class="fas fa-archive"></i> arXiv</a></div>
</div>

<div class="pub-card">
  <span class="pub-venue pub-venue--icsme">ICSME'25</span>
  <div class="pub-title"><a href="https://arxiv.org/abs/2506.23234">From Release to Adoption: Challenges in Reusing Pre-trained AI Models for Downstream Developers</a></div>
  <div class="pub-authors">P. Banyongrakkul, M. Zahedi, P. Thongtanunam, C. Treude, and <strong>H. Gao</strong></div>
  <div class="pub-venue-text">ICSME'25: 41st International Conference on Software Maintenance and Evolution (CORE A)</div>
  <div class="pub-links"><a href="https://arxiv.org/pdf/2506.23234"><i class="fas fa-file-pdf"></i> PDF</a><a href="https://doi.org/10.1109/ICSME64153.2025.00022"><i class="fas fa-external-link-alt"></i> DOI</a></div>
</div>

<div class="pub-card">
  <span class="pub-venue pub-venue--acl">ACL Findings'25</span>
  <div class="pub-title"><a href="https://arxiv.org/abs/2503.16167">CodeReviewQA: The Code Review Comprehension Assessment for Large Language Models</a></div>
  <div class="pub-authors">H. Lin, C. Liu, <strong>H. Gao</strong>, P. Thongtanunam, and C. Treude</div>
  <div class="pub-venue-text">Findings of ACL'25: The 63rd Annual Meeting of the Association for Computational Linguistics (CORE A*)</div>
  <div class="pub-links"><a href="https://arxiv.org/pdf/2503.16167"><i class="fas fa-file-pdf"></i> PDF</a><a href="https://arxiv.org/abs/2503.16167"><i class="fas fa-archive"></i> arXiv</a></div>
</div>

<div class="pub-card">
  <span class="pub-venue pub-venue--tse">TSE'25</span>
  <div class="pub-title"><a href="https://ieeexplore.ieee.org/abstract/document/10931854">Adapting Installation Instructions in Rapidly Evolving Software Ecosystems</a></div>
  <div class="pub-authors"><strong>H. Gao</strong>, C. Treude, and M. Zahedi</div>
  <div class="pub-venue-text">IEEE Transactions on Software Engineering, 2025 (CORE A*)</div>
  <div class="pub-links"><a href="https://arxiv.org/pdf/2312.03250"><i class="fas fa-file-pdf"></i> PDF</a><a href="https://doi.org/10.1109/TSE.2025.3552614"><i class="fas fa-external-link-alt"></i> DOI</a></div>
</div>

<div class="pub-card">
  <span class="pub-venue pub-venue--esem">ESEM'24</span>
  <div class="pub-title"><a href="https://dl.acm.org/doi/abs/10.1145/3674805.3686679">Documenting Ethical Considerations in Open Source AI Models</a></div>
  <div class="pub-authors"><strong>H. Gao</strong>, M. Zahedi, C. Treude, S. Rosenstock, and M. Cheong</div>
  <div class="pub-venue-text">ESEM'24: 18th International Symposium on Empirical Software Engineering and Measurement, 2024 (CORE A)</div>
  <div class="pub-links"><a href="https://arxiv.org/pdf/2406.18071"><i class="fas fa-file-pdf"></i> PDF</a><a href="https://doi.org/10.1145/3674805.3686679"><i class="fas fa-external-link-alt"></i> DOI</a></div>
</div>

<div class="pub-card">
  <span class="pub-venue pub-venue--fse">FSE'23</span>
  <div class="pub-title"><a href="https://dl.acm.org/doi/abs/10.1145/3611643.3616291">Evaluating Transfer Learning for Simplifying GitHub READMEs</a></div>
  <div class="pub-authors"><strong>H. Gao</strong>, C. Treude, and M. Zahedi</div>
  <div class="pub-venue-text">ESEC/FSE'23: Proceedings of the Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering, 2023 (CORE A*)</div>
  <div class="pub-links"><a href="https://arxiv.org/pdf/2308.09940"><i class="fas fa-file-pdf"></i> PDF</a><a href="https://doi.org/10.1145/3611643.3616291"><i class="fas fa-external-link-alt"></i> DOI</a></div>
</div>

<h3 style="margin-top: 1.5em; margin-bottom: 0.8em; font-size: 1.1em; color: #374151;">Under Review</h3>

<div class="pub-card pub-card--revision">
  <span class="pub-venue pub-venue--revision">TSE (Major Revision)</span>
  <div class="pub-title"><a href="https://arxiv.org/abs/2603.00489">Does My README File Need To Be Updated? Exploring LLM-Based README Maintenance</a></div>
  <div class="pub-authors"><strong>H. Gao</strong>, H. Lin, C. Treude, G. Gay, and M. Zahedi</div>
  <div class="pub-links"><a href="https://arxiv.org/pdf/2603.00489"><i class="fas fa-file-pdf"></i> PDF</a><a href="https://arxiv.org/abs/2603.00489"><i class="fas fa-archive"></i> arXiv</a></div>
</div>

<div class="pub-card pub-card--submission">
  <span class="pub-venue pub-venue--submission">Under Submission</span>
  <div class="pub-title"><a href="https://arxiv.org/abs/2604.17940">When AI Models Become Dependencies: Studying the Evolution of Pre-Trained Model Reuse in Downstream Software Systems</a></div>
  <div class="pub-authors">P. Banyongrakkul, M. Zahedi, C. Treude, <strong>H. Gao</strong>, and P. Thongtanunam</div>
  <div class="pub-links"><a href="https://arxiv.org/pdf/2604.17940"><i class="fas fa-file-pdf"></i> PDF</a><a href="https://arxiv.org/abs/2604.17940"><i class="fas fa-archive"></i> arXiv</a></div>
</div>

<div class="pub-card pub-card--revision">
  <span class="pub-venue pub-venue--revision">TSE (Major Revision)</span>
  <div class="pub-title"><a href="https://arxiv.org/abs/2604.06723">Fine-grained Approaches for Confidence Calibration of LLMs in Automated Code Revision</a></div>
  <div class="pub-authors">H. Lin, C. Liu, <strong>H. Gao</strong>, P. Thongtanunam, and C. Treude</div>
  <div class="pub-links"><a href="https://arxiv.org/pdf/2604.06723"><i class="fas fa-file-pdf"></i> PDF</a><a href="https://arxiv.org/abs/2604.06723"><i class="fas fa-archive"></i> arXiv</a></div>
</div>

<div class="pub-card pub-card--submission">
  <span class="pub-venue pub-venue--submission">Under Submission</span>
  <div class="pub-title">ChatGPT as an Installation Assistant: How Novices Use LLMs for Software Tool Installation</div>
  <div class="pub-authors">L. Salerno, <strong>H. Gao</strong>, P. Thongtanunam, C. Treude</div>
</div>

<h3 style="margin-top: 1.5em; margin-bottom: 0.8em; font-size: 1.1em; color: #374151;">Preprints</h3>

<div class="pub-card pub-card--preprint">
  <span class="pub-venue pub-venue--preprint">arXiv'26</span>
  <div class="pub-title"><a href="https://arxiv.org/abs/2607.00911">From Registry to Repository: How AI Agent Skills Are Written, Adapted, and Maintained</a></div>
  <div class="pub-authors"><strong>H. Gao</strong>, J. Lulla, H. Lin, S. Baltes, C. Treude, and M. Zahedi</div>
  <div class="pub-venue-text">arXiv preprint, July 2026</div>
  <div class="pub-links"><a href="https://arxiv.org/pdf/2607.00911"><i class="fas fa-file-pdf"></i> PDF</a><a href="https://arxiv.org/abs/2607.00911"><i class="fas fa-archive"></i> arXiv</a></div>
</div>

</div>


<div class="section-block">
<h2>Contact</h2>

<div class="contact-info">
  <p>If you would like to collaborate, feel free to reach out by sending an email :)</p>
  <p><i class="fas fa-fw fa-envelope"></i> haoyug1@student.unimelb.edu.au</p>
  <p><i class="fas fa-fw fa-map-marker-alt"></i> 700 Swanston St, Carlton VIC 3053, Victoria, Australia</p>
  <p><i class="fas fa-fw fa-file-pdf"></i> <a href="https://haoyu-gao.github.io/files/Haoyu_Gao_CV_2026_07.pdf">Download CV (PDF)</a></p>
</div>
</div>


