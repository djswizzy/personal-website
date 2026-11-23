---
layout: editorial
permalink: /
title: "David Calvert"
excerpt: "Computational astrophysicist specializing in magnetohydrodynamics and core-collapse supernovae. AI/ML Scientist at Atomionics."
redirect_from:
  - /about/
  - /about.html
---

<section id="banner">
  <div class="content">
    <div class="byline"><img src="{{ '/images/previews/david-calvert.jpg' | relative_url }}" width="72" height="72" alt="Portrait of David Calvert"><p><strong>David Calvert, PhD</strong><br>AI/ML Scientist at Atomionics</p></div>
    <h1>Inside a collapsing star</h1>
    <p>I use three-dimensional magnetohydrodynamic simulations to study what happens between the collapse of a massive star’s core and the expansion of its shock wave.</p>
    <a class="button" href="{{ '/research/' | relative_url }}">Explore the research</a>
    <nav class="profile-links" aria-label="Profiles and documents">
      <a href="https://www.linkedin.com/in/{{ site.author.linkedin }}/">LinkedIn</a>
      <a href="{{ site.author.orcid }}">ORCID</a>
      <a href="https://github.com/{{ site.author.github }}">GitHub</a>
      <a href="{{ '/files/Resume.pdf' | relative_url }}">Résumé (PDF)</a>
      <a href="{{ '/files/etd.pdf' | relative_url }}">Dissertation (PDF)</a>
    </nav>
  </div>
  <figure><img src="{{ '/images/entropy.png' | relative_url }}" alt="Entropy distribution from a supernova simulation"><figcaption>Entropy at 216.1 milliseconds in a simulated supernova</figcaption></figure>
</section>
<section class="selection">
  <header class="major"><h2>Publications</h2></header>
  <div class="posts">
    {% for paper in site.data.cv.publications %}
    <article><h3><a href="{{ paper.website }}">{{ paper.name }}</a></h3><p><em>{{ paper.publisher }}</em> · {{ paper.releaseDate }}</p></article>
    {% endfor %}
  </div>
</section>

<section class="selection">
  <header class="major"><h2>Engineering projects</h2></header>
  <h3><a href="{{ '/portfolio/#spectrometer-control' | relative_url }}">From spectrum to concentration</a></h3>
  <p>A LabVIEW application that controls a spectrometer and measures chemical concentrations in water samples.</p>
</section>
