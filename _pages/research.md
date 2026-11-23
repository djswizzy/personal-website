---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

{% include base_path %}


## Magnetohydrodynamics of Core-Collapse Supernovae

My research investigates the complex physics within core-collapse supernovae. My primary focus is to accurately analyze the effects of magnetohydrodynamics on 3D core-collapse supernova models. Using high-fidelity simulations on distributed HPC systems, I explore how turbulent plasma flow and magnetic fields influence the explosion mechanism of massive stars. 

<img src="{{ base_path }}/images/entropy.png" alt="Research Image" style="max-width: 100%; height: auto; display: block; margin: 1em auto;">

### Key Findings

Through an in-depth analysis of the turbulence in core-collapse supernovae, I've found that the metric for measuring the turbulence using the Reynolds decomposition is insufficient to characterize the turbulence properly. I have proposed and verified a new method for performing the Reynolds decomposition in the fluid and have shown that this method tracks turbulence more accurately in the gain region of supernovae. Further, I have discovered that this method demonstrates that supernova modeling as a whole has overestimated the impact of turbulence on CCSNe and that the introduction of strong toroidal magnetic fields can reduce turbulence within the star.

## Stellar Wind and Convective Overshooting effects on Supernova Outcomes

I performed a parameter study on stellar evolution models to quantify how the explosion properties of supernovae in 1D simulations change.

### Key Findings

I have found that the very poorly constrained physics of stellar evolutions models, such as stellar winds and convection, can impact the outcome of supernovae and impact the mass of the remnant object. As part of this project, I developed a workflow for rapid parameter space sweeps via

- Automated python analysis pipelines
- Batch job submission and management for MESA and AGILE simulations
- Automated data extraction and post-processing workflows with ML/AI


## Neutrino flavor oscillations

To study the effects of quantum neutrino oscillations of core-collapse supernovae, I modified a C++ neutrino oscillation code to account for "beyond standard model" physics and coupled this code with a 1D core-collapse supernova model. 

### Key Findings

This work found that the conditions in the core of supernovae are sufficient to oscillate neutrino flavors away from the electron type, resulting in reduced neutrino heating and disfavoring explosions. In this project I:

- Gained proficiency in C++ and GitHub CI/CD workflows
- Developed a strong linear algebra understanding
- Implemented complex analysis to produce an understanding of quantum mechanical effects


## Publications

- **Calvert, D.**, et al. (2025). "Turbulence in Core-Collapse Supernovae", *Astrophysical Journal*
- **Calvert, D.**, et al. (2026). "The Interplay of Magnetic Fields and Vorticity in Core-Collapse Supernovae", (In prep)
- **Calvert, D.**, et al. (2026). "Investigating The Relationship Between Stellar Structure And Core-collapse Supernovae Outcomes", (In prep)

## Dissertation

**A study of Magnetic Fields and Stellar Evolution on Core-Collapse Supernovae**  
Ph.D. Dissertation, UC Berkeley & North Carolina State University (December 2025)
