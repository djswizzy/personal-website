---
layout: editorial
title: Research gallery
permalink: /gallery/
---

{% for figure in site.data.figures %}
<figure class="science-figure">
  <a href="{{ figure.original | prepend: '/images/' | relative_url }}"><img loading="lazy" src="{{ figure.preview | prepend: '/images/' | relative_url }}" alt="{{ figure.alt }}"></a>
  <figcaption><strong>{{ figure.title }}</strong> {{ figure.caption }} <a href="{{ figure.original | prepend: '/images/' | relative_url }}">Open full-size figure<span class="sr-only"> — {{ figure.title }}</span></a></figcaption>
</figure>
{% endfor %}
