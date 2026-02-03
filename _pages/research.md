---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

{% include base_path %}


### Key Research Areas

- **Turbulence in Supernovae:** 
Understanding the role of turbulent convection and instabilities in driving supernova explosions.    
- **Magnetic Field Modeling:** 
Investigating how magnetic fields are amplified and evolve during core collapse, including the interplay between magnetic fields and the turbulent properties of plasma below the shock front.  
- **Stellar Evolution:** Exploring how alterations to our stellar evolution models can impact outcomes of core-collapse supernovae.  
- **Quantum Neutrino Flavor Oscillations:** Studying the impacts of beyond standard model effects on neutrino flavor oscillations in core-collapse supernova conditions.
- **Numerical Methods:** Developing and adapting numerical solvers for nonlinear PDEs with constraint-preserving methods, including enforcing magnetic field divergence-free boundary conditions (∇·B = 0) on 3D Cartesian grids.   

# Current Research Projects

## Magnetohydrodynamics of Core-Collapse Supernovae

My research investigates the complex physics within core-collapse supernovae. My primary focus is to accurately analyze the effects of magnetohydrodynamics on 3D core-collapse supernova models. Using high-fidelity simulations on distributed HPC systems, I explore how turbulent plasma flow and magnetic fields influence the explosion mechanism of massive stars. 

<img src="{{ base_path }}/images/entropy.png" alt="Research Image" style="max-width: 100%; height: auto; display: block; margin: 1em auto;">

### Key Findings

Through an in-depth analysis of the turbulence in core-collapse supernovae, I've found that the metric for measuring the turbulence using the Reynolds decomposition is insufficient to characterize the turbulence properly. I have proposed and verified a new method for performing the Reynolds decomposition in the fluid and have shown that this method tracks turbulence more accurately in the gain region of supernovae. Further, I have discovered that this method demonstrates that supernova modeling as a whole has overestimated the impact of turbulence on CCSNe and that the introduction of strong toroidal magnetic fields can reduce turbulence within the star.

### Research Techniques & Capabilities

**High-Performance Computing & Modeling:**

- 3D magnetohydrodynamic (MHD) simulations on distributed HPC systems
- MPI-based parallel computing across thousands of cores
- GPU-accelerated computations with CUDA
- Large-scale supernova simulation codes (ELEPHANT, AGILE)
- Constraint-preserving numerical methods for MHD
- HPC management and optimization (SLURM, LSF)
- Code development and expansion to preserve accuracy

**Computational Methods:**

- Advanced Reynolds decomposition techniques for turbulence analysis
- Quantum neutrino flavor oscillation calculations with beyond-standard-model effects
- Stellar evolution modeling and coupling with supernova simulations
- Machine learning applications for data analysis

**Data Analysis & Visualization:**

- Python-based analysis pipelines (NumPy, SciPy, mpi4py)
- Large-scale data visualization and statistical analysis
- HDF5 data I/O and management
- Signal processing and uncertainty quantification
- Custom visualization tools for 3D simulation data

**Numerical Techniques:**

- Finite volume numerical methods
- Constraint-preserving solvers (divergence-free magnetic fields)
- Adaptive mesh refinement strategies
- Time integration schemes for stiff systems
- Neutrino transport schemes (IDSA)

## Stellar Wind and Convective Overshooting effects on Supernova Outcomes

I performed a parameter study on stellar evolution models to quantify how the explosion properties of supernovae in 1D simulations are effected.

### Key Findings

I have found that the very poorly constrained physics of stellar evolutions models, such as stellar winds and convection, can impact the outcome of supernovae and impact the mass of the remnant object. As part of this project, I developed a workflow for rapid parameter space sweeps via

- Automated python analysis pipelines
- Batch job submission and management for MESA and AGILE simulations
- Automated data extraction and post-processing workflows with ML/AI


## Stellar Wind and Convective Overshooting effects on Supernova Outcomes

To study the effects of quantum neutrino oscillations of core-collapse supernovae, I modified a C++ neutrino oscillation code to account for "beyond standard model" physics and coupled this code with a 1D core-collapse supernova model. 

### Key Findings

This work found that the conditions in the core of supernovae are sufficient to oscillate neutrino flavors away from the electron type, resulting in reduced neutrino heating and disfavoring explosions. In this project I:

- Gained proficiency in C++ and GitHub CI/CD workflows
- Developed a strong linear algebra understanding
- Implemented complex analysis to produce an understanding of quantum mechanical effects


## Technical Skills

**Programming Languages:** Python, FORTRAN, C++, MATLAB, CUDA, Bash  
**HPC & Parallel Computing:** MPI, OpenMP, OpenACC, SLURM, distributed computing, GPU acceleration  
**Scientific Computing:** Numerical methods, PDEs/ODEs, data visualization, statistical analysis, signal processing, uncertainty quantification  
**Performance & Debugging:** profiling, optimization, memory/performance tuning, debugging large parallel jobs 
**Software Engineering:** version control (Git), CI/CD, testing, documentation, reproducible workflows  
**Tools:** Docker, Linux, VS Code, Jupyter

## Publications

- **Calvert, D.**, et al. (2025). "Turbulence in Core-Collapse Supernovae", *Astrophysical Journal*
- **Calvert, D.**, et al. (2026). "The Interplay of Magnetic Fields and Vorticity in Core-Collapse Supernovae", (In prep)
- **Calvert, D.**, et al. (2026). "Investigating The Relationship Between Stellar Structure And Core-collapse Supernovae Outcomes", (In prep)

## Dissertation

**A study of Magnetic Fields and Stellar Evolution on Core-Collapse Supernovae**  
Ph.D. Dissertation, UC Berkeley & North Carolina State University (December 2025)
