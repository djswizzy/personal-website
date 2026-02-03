---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

{% include base_path %}

## Magnetohydrodynamics of Core-Collapse Supernovae

My doctoral research investigates the magnetohydrodynamics of 3D core-collapse supernovae. Using high-fidelity simulations on distributed HPC systems, I explore how turbulent plasma flow and magnetic fields influence the explosion mechanism of massive stars. I further studied the effects of stellar evolution on the explosion properties of supernovae in 1D simulations.

<img src="{{ base_path }}/images/entropy.png" alt="Research Image" style="max-width: 100%; height: auto; display: block; margin: 1em auto;">

### Key Research Areas

**Turbulence in Supernovae:**
Understanding the role of turbulent convection and instabilities in driving supernova explosions.

**Magnetic Field Evolution:**
Investigating how magnetic fields are amplified and evolve during core collapse, including the interplay between magnetic fields and the turbulent properties of plasma below the shock front.

**Numerical Methods:**
Developing and adapting numerical solvers for nonlinear PDEs with constraint-preserving methods, including enforcing magnetic field divergence-free boundary conditions (∇·B = 0) on 3D Cartesian grids.

### Technical Approach

I leverage a fixed-grid cartesian FORTRAN code known as [ELEPHANT](https://doi.org/10.1051/0004-6361/201833705) to evolve the MHD paired with the [IDSA](https://doi.org/10.1088/0004-637X/698/2/1174) neutrino transport scheme.

**Simulation Code:**
- High-fidelity MHD FORTRAN 3D supernova code
- Distributed computing on HPC clusters using MPI
- Optimized for scalability on thousands of cores

**Data Analysis:**
- Python-based analysis pipelines (NumPy, SciPy, mpi4py)
- Large-scale data visualization
- Statistical analysis of turbulent flows

## Technical Skills

**Programming Languages:** Python, FORTRAN, C++, MATLAB, CUDA, Bash

**HPC & Parallel Computing:** MPI, OpenMP, OpenACC, SLURM, distributed computing, GPU acceleration

**Scientific Computing:** Numerical methods, PDEs/ODEs, data visualization, statistical analysis, signal processing, uncertainty quantification  

**Performance & Debugging:** profiling, optimization, memory/performance tuning, debugging large parallel jobs 

**Software Engineering:** version control (Git), CI/CD, testing, documentation, reproducible workflows

**Tools:** Docker, Linux, VS Code, Jupyter

## Previous Projects

### Beyond-Standard-Model Neutrino Flavor Oscillations (Code + CCSNe Coupling)

I developed a quantum neutrino flavor-oscillation code (including beyond-standard-model effects) designed to feed back into 1D core-collapse supernova (CCSNe) simulations.

- **What it does**: [Add 2–3 sentences describing the physics model and numerical approach.]  
- **How it interfaces with 1D CCSNe**: [Describe coupling strategy, I/O, cadence, and which quantities are exchanged.]  
- **Tech highlights**: [e.g., performance, HDF5 I/O, validation tests, parameter sweeps, HPC runs.]  
- **Status / links**: [GitHub link, paper/preprint, or “available on request”.]

### Other Projects

- **[Project name]**: [1–2 sentence description.]
- **[Project name]**: [1–2 sentence description.]

## Publications

- **Calvert, D.**, et al. (2025). "Turbulence in Core-Collapse Supernovae", *Astrophysical Journal*
- **Calvert, D.**, et al. (2026). "The Interplay of Magnetic Fields and Vorticity in Core-Collapse Supernovae", *Astrophysical Journal* (In prep)

## Dissertation

**Magnetohydrodynamics of 3D Core-Collapse Supernovae**  
Ph.D. Dissertation, UC Berkeley & North Carolina State University (December 2025)
