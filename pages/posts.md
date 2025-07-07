---
layout: page
title: "Posts by Year"
permalink: /posts/
---

<style>
/* Phần bảng năm */
.year-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 3rem;
}

.year-column {
  flex: 1 1 200px;
}

.year-column ul {
  list-style: none;
  padding: 0;
}

.year-column li {
  margin-bottom: 10px;
}

/* Phần hiển thị từng năm */
.year-title {
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.8em;
  font-weight: bold;
  border-bottom: 2px solid #ccc;
  padding-bottom: 0.3rem;
}

.post-list ul {
  list-style: none;
  padding-left: 0;
}

.post-list li {
  margin-bottom: 10px;
}
</style>

<!-- BẢNG DANH SÁCH NĂM + SỐ BÀI -->
{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% assign sorted_years = posts_by_year | sort: "name" | reverse %}
{% assign numPerColumn = sorted_years | size | divided_by: 3 | plus: 1 %}
{% assign columns = sorted_years | size | divided_by: numPerColumn | plus: 1 %}

<div class="year-list">
  {% assign year_index = 0 %}
  {% for column in (1..columns) %}
    <div class="year-column">
      <ul>
        {% for year in sorted_years %}
          {% if year_index < numPerColumn %}
            <li>
              <a href="#{{ year.name }}">
                <strong>{{ year.name }}</strong>
              </a>
              <span style="float:right">{{ year.items | size }}</span>
            </li>
            {% assign year_index = year_index | plus: 1 %}
          {% endif %}
        {% endfor %}
      </ul>
    </div>
    {% assign sorted_years = sorted_years | slice: numPerColumn, sorted_years.size %}
    {% assign year_index = 0 %}
  {% endfor %}
</div>

<!-- DANH SÁCH BÀI VIẾT THEO TỪNG NĂM -->
<div class="post-list">
  {% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
  {% assign sorted_years = posts_by_year | sort: "name" | reverse %}
  {% for year in sorted_years %}
    <div class="year-title" id="{{ year.name }}">
      {{ year.name }}
    </div>
    <ul>
      {% for post in year.items %}
        <li>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          <small>({{ post.date | date: "%b %d" }})</small>
        </li>
      {% endfor %}
    </ul>
  {% endfor %}
</div>
