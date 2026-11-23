---
layout: editorial
title: "Projects"
permalink: /portfolio/
author_profile: true
---

## AI and ML for mineral exploration

At Atomionics, I develop models to predict potential ore locations from raster data. My work includes convolutional neural networks with attention, evaluation of predictive models and a retrieval-based geology assistant, and deployment on Azure.

## Magnetic fields and turbulence

How much does turbulence help a stalled supernova shock expand? I ran three-dimensional magnetohydrodynamic (MHD) simulations on distributed computing systems and tested how the choice of average affects the inferred turbulent flow.

Our [2025 paper](https://doi.org/10.3847/1538-4357/ae1475) compared ways of separating turbulent motion from the average flow. The choice changed how much kinetic energy we attributed to turbulence.

In our [2026 study](https://doi.org/10.1103/lgc5-tn23), we varied the initial toroidal magnetic field in simulations of 15- and 20-solar-mass stars. The strongly magnetized models had lower turbulent kinetic energy and enstrophy. The size of the energy reduction depended on how we measured turbulence.

<figure class="science-figure">
  <img loading="lazy" src="{{ '/images/previews/image2.jpg' | relative_url }}" alt="Four slices showing the magnetic field and vorticity at varied angles throughout the expanding flow.">
  <figcaption>Magnetic field and vorticity stayed close to randomly aligned as the flow evolved. <a href="{{ '/images/image2.png' | relative_url }}">Inspect the full-resolution figure</a></figcaption>
</figure>

## Stellar evolution and the remnant

I connected MESA stellar evolution models with AGILE explosion simulations. By varying stellar winds and convective overshooting, I traced how uncertainties in a star’s earlier life affect its explosion and the mass it leaves behind.

## Neutrino flavor

I extended a C++ neutrino oscillation code and coupled it to a one-dimensional collapse model. In the conditions I tested, conversion away from electron flavor reduced neutrino heating behind the shock.

[Read my dissertation]({{ '/files/etd.pdf' | relative_url }}) · [View simulation figures]({{ '/gallery/' | relative_url }})

## Spectrometer control

For Kondra Chemical, I built a LabVIEW application that controls a spectrometer, acquires spectra in real time, and interpolates chemical concentrations in water samples.

<aside class="image-slot" aria-label="Project image placeholder"><strong>Instrument setup</strong><span>Photo placeholder · spectrometer and sample cell</span></aside>

## Embedded graphics for Kywy

I wrote games, sprite rotation routines, and C++ asset-generation tools for KOINSLOT’s handheld educational coding device. [Browse KOINSLOT on GitHub](https://github.com/KOINSLOT-Inc/).

<aside class="image-slot" aria-label="Project image placeholder"><strong>Kywy in use</strong><span>Photo placeholder · handheld running a game</span></aside>
