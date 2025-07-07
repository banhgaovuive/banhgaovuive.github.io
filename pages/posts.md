---
layout: page
title: "Posts by Year"
permalink: /posts/
---

<style>
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
