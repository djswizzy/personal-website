---
layout: editorial
title: "CV"
permalink: /cv/
author_profile: true
---

{% include base_path %}

[Download résumé (PDF)]({{ "/files/Resume.pdf" | relative_url }})

## Education
* **Ph.D. in Physics**, North Carolina State University. Computational astrophysics research at NC State and UC Berkeley. Defended and completed December 2025. Degree conferred May 2026.
  * Dissertation: A study of Magnetic Fields and Stellar Evolution on Core-Collapse Supernovae
* **B.S. in Physics with Honors & Applied Mathematics** - North Carolina State University, May 2018

Earlier education included the North Carolina School of Science and Mathematics (NCSSM) and the Marine Academy of Technology and Environmental Science (MATES).

## Work Experience

[Detailed experience]({{ "/companies/" | relative_url }})

**AI/ML Scientist** (June 2026–present)<br>
*Atomionics*

Developed attention-based models for mineral exploration, evaluated an LLM-based geology assistant, and built cloud infrastructure and a client-facing interface.

**Supernova Physicist** (2019 - 2025)  
*UC Berkeley & NC State University* - Berkeley, CA & Raleigh, NC
* Utilized a high-fidelity MHD Fortran 3D supernova code on distributed HPC systems to explore the role of turbulent plasma flow in supernova evolution
* Developed and implemented Python scripts to perform data analysis and generate plots used in publications
* Adapted numerical solvers for nonlinear PDEs with constraint preserving methods to enforce magnetic field divergence-free boundary conditions

**App Developer - Independent Contract** (2025)  
*Kondra Chemical* - San Francisco, CA
* Designed, built, tested, and delivered a LabVIEW app for measurement of chemical concentration in water samples
* Developed hardware control, spectrometer data acquisition, and concentration interpolation modules

**Software Engineer** (2024–2026)<br>
*KOINSLOT Inc.* - San Francisco, CA
* Contributed to Kywy, a handheld "low-code" educational coding device
* Developed complete games, custom rotation algorithms for sprite rendering, and asset-generation scripts in C++

**Business Systems Analyst** (2018 - 2019)  
*Insightsoftware* - Raleigh, NC
* Planned and executed data migrations for multiple acquired companies on short timescales
* Leveraged SQL and SOQL to perform data migrations into Salesforce from previous CRM systems

**IT Systems Administrator** (January 2015 - May 2018)  
*North Carolina State University* - Raleigh, NC
* Co-managed IT operations for the Physics Department at NC State University as one of two team members
* Implemented test environments in Docker and gained fluency in Linux

## Leadership

### Mentoring

- Mentored an undergraduate researcher on an original project in the [N3AS program](https://n3as.berkeley.edu/) at UC Berkeley. Investigated the effects of changing the beta decay rates of nuclei on the nucleosynthetic yields of a neutron star merger simulation. ([Poster]({{ base_path }}/files/n3as-mentorship-poster.pdf))
- Trained several junior graduate students on Fortran, Python, and HPC environments.

### Teaching

- **Tutoring**: Privately tutored high school and undergraduate students in physics and math for 8 years.
- **Teaching**: Taught undergraduate courses in electromagnetism and astronomy.

### Community

- **Graduate Physics Student Association (GPSA)**: President for 3 years
- **Graduate Research Symposium Planning Committee**: Founding member
- **DEI Committee**: Founding member, served for 3 years


## Science Communication

### Public Talks

- **Astronomy on Tap** —  Oakland, CA 
- **Astronomy on Tap** —  Durham, NC
- **Astronomy Days** - Science Museum, Raleigh, NC

### Outreach

- **Raleigh Astronomy Club**: Led public telescope observations and taught members of the public about astronomy.
- **Local Middle School Astronomy Outreach**: Attended local middle schools in Raleigh, NC to teach students about solar activity and sunspots, as well as show them a live demonstration of sunspots with a solar-filtered telescope.



## Skills

[View technical and additional skills]({{ "/skills/" | relative_url }})

## Publications
{% for paper in site.data.cv.publications %}
* **Calvert, D.**, et al. ({{ paper.releaseDate }}). [{{ paper.name }}]({{ paper.website }}). *{{ paper.publisher }}* **{{ paper.volume }}**, {{ paper.article }}.
{% endfor %}
* **Calvert, D.**, et al. (2026). "Investigating The Relationship Between Stellar Structure And Core-collapse Supernovae Outcomes", (In prep)
