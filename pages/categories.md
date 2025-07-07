---
layout: page
title: "Posts by Category"
permalink: /categories/
---

<style>
.category-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.category-column {
  flex: 1 1 200px;
}

.category-column ul {
  list-style: none;
  padding: 0;
}

.category-column li {
  margin-bottom: 10px;
}
</style>

<div class="category-list">
  {% assign categories = site.categories | sort %}
  {% assign numPerColumn = categories | size | divided_by: 3 | plus: 1 %}
  {% assign columns = categories | size | divided_by: numPerColumn | plus: 1 %}

  {% assign cat_index = 0 %}
  {% for column in (1..columns) %}
    <div class="category-column">
      <ul>
      {% for category in categories %}
        {% if cat_index < numPerColumn %}
          <li>
            <a href="{{ site.baseurl }}/categories/{{ category[0] | slugify }}/">
              <strong>{{ category[0] }}</strong>
            </a> <span style="float:right">{{ category[1].size }}</span>
          </li>
          {% assign cat_index = cat_index | plus: 1 %}
        {% endif %}
      {% endfor %}
      </ul>
    </div>
    {% assign categories = categories | slice: numPerColumn, categories.size %}
    {% assign cat_index = 0 %}
  {% endfor %}
</div>

{% assign category = 'programming' %}
<ul>
  {% for post in site.categories[category] %}
    <li><a href="{{ post.url }}">{{ post.title }}</a> – {{ post.date | date: "%d/%m/%Y" }}</li>
  {% endfor %}
</ul>
