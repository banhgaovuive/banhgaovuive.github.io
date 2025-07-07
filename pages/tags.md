---
layout: page
title: Tags
permalink: /tags/
---

{% assign tags = site.tags | sort %}
<ul>
  {% for tag in tags %}
    <li><a href="#{{ tag[0] | slugify }}">{{ tag[0] }}</a></li>
  {% endfor %}
</ul>

{% for tag in tags %}
  <h2 id="{{ tag[0] | slugify }}">{{ tag[0] }}</h2>
  <ul>
    {% for post in tag[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
