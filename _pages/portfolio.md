---
layout: editorial
title: "Projects"
wide_content: true
permalink: /portfolio/
author_profile: true
---

<nav class="project-jumps" aria-label="Project sections"><a href="#ai-ml">AI & machine learning</a><a href="#astrophysics">Astrophysics</a><a href="#engineering">Engineering</a><a href="#personal">Personal projects</a></nav>

<div class="project-directory" markdown="1">

<section class="project-group" aria-labelledby="ai-ml" markdown="1">

## AI & machine learning {#ai-ml}

<div class="project-grid" markdown="1">

<article class="project-card" markdown="1">

### AI and ML for mineral exploration

At Atomionics, I build machine-learning networks from scratch for subsurface prediction. Alongside that work, I’m building evaluations for large language models.

</article>

</div>
</section>

<section class="project-group" aria-labelledby="astrophysics" markdown="1">

## Astrophysics {#astrophysics}

<div class="project-grid" markdown="1">

<article class="project-card" markdown="1">

### Magnetic fields and turbulence

I reworked and wrote large sections of Fortran magnetohydrodynamics (MHD) code for three-dimensional core-collapse supernova simulations. I ran the models on distributed HPC systems and investigated how the choice of averaging method changes the amount of motion attributed to turbulence.

<details markdown="1">
<summary>Methods and findings</summary>

Our [2025 paper](https://doi.org/10.3847/1538-4357/ae1475) compared ways of separating turbulent motion from the average flow. The choice changed how much kinetic energy we attributed to turbulence.

In our [2026 study](https://doi.org/10.1103/lgc5-tn23), we varied the initial toroidal magnetic field in simulations of 15- and 20-solar-mass stars. The strongly magnetized models had lower turbulent kinetic energy and enstrophy. The size of the energy reduction depended on how we measured turbulence.


</details>

</article>

<article class="project-card" markdown="1">

### Stellar evolution

I connected MESA stellar evolution models with AGILE explosion simulations. By varying stellar winds and convective overshooting, I traced how uncertainties in a star’s earlier life affect its explosion and the mass it leaves behind.

</article>

<article class="project-card" markdown="1">

### Neutrino flavor oscillations {#neutrino-flavor}

I modified a C++ neutrino flavor oscillation code to include nonstandard neutrino interactions and coupled it to a one-dimensional core-collapse supernova model. In these models, conversion away from electron flavor reduced neutrino heating behind the shock and made explosions less likely.

[Read my dissertation]({{ '/files/etd.pdf' | relative_url }}) · [View simulation figures]({{ '/gallery/' | relative_url }})

</article>

</div>
</section>

<section class="project-group" aria-labelledby="engineering" markdown="1">

## Engineering {#engineering}

<div class="project-grid" markdown="1">

<article class="project-card" markdown="1">

### Spectrometer control

For Kondra Chemical, I built the entire control application from scratch in LabVIEW, including the GUI, spectrometer data acquisition, and motor control for a six-sample wheel. I used calibration curves to linearly interpolate chemical concentrations from the spectrometer signal.


</article>

<article class="project-card" markdown="1">

### Embedded graphics for Kywy

I built Asteroids for Kywy, KOINSLOT’s handheld educational coding device. My main contribution was to the sprite rotation methods in its C++ sprite-drawing class. [Browse KOINSLOT on GitHub](https://github.com/KOINSLOT-Inc/).

</article>

</div>
</section>

<section class="project-group" aria-labelledby="personal" markdown="1">

## Personal projects {#personal}

<div class="project-grid" markdown="1">

<article class="project-card" markdown="1">

### Wedding phone guestbook

I converted an old rotary-dial phone into a wedding guestbook using a Raspberry Pi, a signal generator, and a millimeter-wave motion sensor. When someone walked past, the sensor triggered the phone to ring. I soldered the receiver connections for USB audio so it could record messages and play audio through the speakers.

</article>

<article class="project-card" markdown="1">

### Home server

I run an Ubuntu home server hosting Plex, game servers, and OpenClaw. I use Docker and system administration tools to manage the services.

</article>

<article class="project-card" markdown="1">

### Science communication and public talks

I’ve given public astronomy talks at Astronomy on Tap in Oakland, California, and Durham, North Carolina, and at Astronomy Days in Raleigh. With the Raleigh Astronomy Club, I led public telescope observations. I also visited local middle schools to explain solar activity and sunspots and demonstrate observations with a solar-filtered telescope.

</article>

<article class="project-card" markdown="1">

### Research mentorship

At UC Berkeley, I mentored an undergraduate researcher through the [Network for Neutrinos, Nuclear Astrophysics, and Symmetries (N3AS)](https://n3as.berkeley.edu/). We investigated how changing nuclear beta-decay rates affects the elements produced in a neutron-star merger simulation. [View the project poster (PDF)]({{ '/files/n3as-mentorship-poster.pdf' | relative_url }}).

I also trained junior graduate students in Fortran, Python, and HPC environments. My teaching experience includes undergraduate electromagnetism and astronomy, alongside eight years of tutoring high-school and undergraduate physics and mathematics.

</article>

</div>
</section>

</div>
