---
layout: editorial
title: "Publications"
permalink: /publications-auto/
author_profile: true
---

{% include base_path %}

{% for paper in site.data.cv.publications %}
## [{{ paper.name }}]({{ paper.website }})

David Calvert et al. · *{{ paper.publisher }}* **{{ paper.volume }}**, {{ paper.article }} ({{ paper.releaseDate }})

{{ paper.summary }}

{% endfor %}
## Dissertation

[A Study of Magnetic Fields and Stellar Evolution on Core-Collapse Supernovae (PDF)]({{ "/files/etd.pdf" | relative_url }})

Ph.D. Dissertation, UC Berkeley & North Carolina State University (December 2025)

This dissertation explores the role of magnetic fields and stellar evolution on the explosion mechanism of massive stars, using state-of-the-art 3D MHD simulations and 1D parameter studies.

### Investigating The Relationship Between Stellar Structure And Core-collapse Supernovae Outcomes

**Calvert, D.**, et al.

(In preparation, 2026)

Parameter study investigating how poorly constrained stellar evolution physics, including wind efficiency and convective overshooting treatments, impact supernova explosion properties and remnant masses using MESA and AGILE simulations.

---


