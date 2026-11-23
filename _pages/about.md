---
layout: editorial
permalink: /
title: "David Calvert"
excerpt: "Computational astrophysicist specializing in magnetohydrodynamics and core-collapse supernovae. AI/ML Scientist at Atomionics."
redirect_from:
  - /about/
  - /about.html
---


<section class="intro">
  <div class="identity"><img src="{{ site.author.avatar | prepend: '/images/' | relative_url }}" alt="David Calvert" width="80" height="80"><p>David Calvert, PhD<br>AI/ML Scientist at Atomionics</p></div>
  <h1>Physics at scale.<br>From stars to software.</h1>
  <div class="intro-bottom"><p>I study magnetic fields and turbulence in collapsing stars, and build tools that turn complex data into useful measurements.</p>
  <nav class="profile-links" aria-label="Profiles and documents">
    <a href="https://www.linkedin.com/in/{{ site.author.linkedin }}/">LinkedIn</a>
    <a href="{{ site.author.orcid }}">ORCID</a>
    <a href="https://github.com/{{ site.author.github }}">GitHub</a>
    <a href="{{ '/files/Resume.pdf' | relative_url }}">Résumé (PDF)</a>
    <a href="{{ '/files/etd.pdf' | relative_url }}">Dissertation (PDF)</a>
  </nav></div>
</section>
<section class="work-index" aria-labelledby="work-title">
  <div class="section-head"><h2 id="work-title">Selected work</h2><div class="filters" role="group" aria-label="Filter work" hidden>
    <button aria-pressed="true" data-filter="all">All</button>
    <button aria-pressed="false" data-filter="research">Research</button>
    <button aria-pressed="false" data-filter="engineering">Engineering</button>
  </div></div>
  <a class="work-row" data-category="research" href="{{ '/research/' | relative_url }}">
    <div><span>Computational astrophysics</span><h3>Magnetic fields.<br>Turbulent stars.</h3><p>Three-dimensional simulations of core-collapse supernovae.</p></div>
    <figure class="simulation"><img src="{{ '/images/entropy.png' | relative_url }}" alt="Entropy in a simulated core-collapse supernova"></figure>
  </a>
  <a class="work-row" data-category="research" href="{{ '/publications-auto/' | relative_url }}">
    <div><span>Two peer-reviewed papers · 2025–2026</span><h3>Measuring the<br>motion within.</h3><p>Turbulence, vorticity, and magnetic-field feedback.</p></div>
    <figure><img src="{{ '/images/previews/image2.jpg' | relative_url }}" alt="Four views of magnetic field and vorticity alignment"></figure>
  </a>
  <a class="work-row" data-category="engineering" href="{{ '/portfolio/#spectrometer-control' | relative_url }}">
    <div><span>Instrumentation · LabVIEW</span><h3>From spectrum<br>to concentration.</h3><p>Spectrometer control and real-time water sample analysis.</p></div>
    <div class="image-slot"><strong>Instrument setup</strong><span>Photo placeholder · spectrometer and sample cell</span></div>
  </a>
  <a class="work-row" data-category="engineering" href="{{ '/portfolio/#embedded-graphics-for-kywy' | relative_url }}">
    <div><span>Embedded software · C++</span><h3>Small hardware.<br>Hands-on learning.</h3><p>Games, sprite rotation, and asset tools for Kywy.</p></div>
    <div class="image-slot"><strong>Kywy in use</strong><span>Photo placeholder · handheld running a game</span></div>
  </a>
</section>
<script src="{{ '/assets/nordlyn/work.js' | relative_url }}" defer></script>
