---
layout: page
title: Categories
permalink: /categories/
---

{% assign sorted_categories = site.categories | sort %}
<ul>
  {% for category in sorted_categories %}
    <li><a href="#{{ category[0] | slugify }}">{{ category[0] }}</a></li>
  {% endfor %}
</ul>

{% for category in sorted_categories %}
  <h2 id="{{ category[0] | slugify }}">{{ category[0] }}</h2>
  <ul>
    {% for post in category[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
