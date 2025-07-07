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
  margin-bottom: 3rem;
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

<!-- Hiển thị danh sách category dạng lưới -->
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
            <a href="#{{ category[0] | slugify }}">
              <strong>{{ category[0] }}</strong>
            </a>
            <span style="float:right">{{ category[1].size }}</span>
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

---

<!-- Hiển thị bài viết theo từng category -->
{% assign sorted_categories = site.categories | sort %}
{% for category in sorted_categories %}
  <h2 id="{{ category[0] | slugify }}">{{ category[0] | capitalize }}</h2>
  <ul>
    {% for post in category[1] %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <small>({{ post.date | date: "%B %d, %Y" }})</small>
      </li>
    {% endfor %}
  </ul>
{% endfor %}
