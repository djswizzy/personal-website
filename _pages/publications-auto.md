---
layout: editorial
title: "Publications"
permalink: /publications-auto/
author_profile: true
---

<div class="publication-list">
{% for paper in site.data.cv.publications %}
<article class="publication-entry">
  <h2><a href="{{ paper.website }}">{{ paper.name }}</a></h2>
  <p class="publication-citation">David Calvert et al. · <cite>{{ paper.publisher }}</cite> <strong>{{ paper.volume }}</strong>, {{ paper.article }} · {{ paper.releaseDate }}</p>
  <p class="publication-summary">{{ paper.summary }}</p>
</article>
{% endfor %}

<article class="publication-entry">
  <p class="publication-kind">Dissertation</p>
  <h2><a href="{{ '/files/etd.pdf' | relative_url }}">A Study of Magnetic Fields and Stellar Evolution on Core-Collapse Supernovae</a></h2>
  <p class="publication-citation">David Calvert · Physics, North Carolina State University · PDF</p>
  <p class="publication-summary">Defended December 2025. Degree conferred May 2026.</p>
</article>

<article class="publication-entry">
  <p class="publication-kind">Manuscript in preparation</p>
  <h2>Investigating the Relationship Between Stellar Structure and Core-Collapse Supernovae Outcomes</h2>
  <p class="publication-citation">David Calvert et al. · 2026</p>
  <p class="publication-summary">MESA and AGILE parameter studies of how stellar winds and convective overshooting affect explosions and remnant masses.</p>
</article>
</div>
