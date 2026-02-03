---
layout: archive
title: "Research Gallery"
permalink: /gallery/
author_profile: true
research_gallery:
  - image_path: entropy.png
    alt: "Entropy visualization from supernova simulation"
    title: "Entropy Distribution"
  # Add more images below:
  # - image_path: image2.png
  #   alt: "Description of image 2"
  #   title: "Optional title"
  #   url: "optional-link"
---

{% include base_path %}

This gallery showcases visualizations and results from my research on core-collapse supernovae and computational astrophysics.

{% include gallery id="research_gallery" caption="Research visualizations from MHD supernova simulations" %}

## How to Add Images

To add images to this gallery, edit the frontmatter of this file and add entries to the `research_gallery` array:

```yaml
research_gallery:
  - image_path: image1.png
    alt: "Description of image 1"
    title: "Optional title for image 1"
    url: "optional-link-to-full-size-or-related-page"
  - image_path: image2.png
    alt: "Description of image 2"
    title: "Optional title for image 2"
```

Place your images in the `/images/` directory and reference them by filename in the `image_path` field.

