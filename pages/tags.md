---
layout: page
title: "Posts by Tag"
permalink: /tags/
---

<style>
.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 3rem;
}

.tag-column {
  flex: 1 1 200px;
}

.tag-column ul {
  list-style: none;
  padding: 0;
}

.tag-column li {
  margin-bottom: 10px;
}
</style>

<!-- Hiển thị danh sách tag dạng lưới -->
<div class="tag-list">
  {% assign tags = site.tags | sort %}
  {% assign numPerColumn = tags | size | divided_by: 3 | plus: 1 %}
  {% assign columns = tags | size | divided_by: numPerColumn | plus: 1 %}

  {% assign tag_index = 0 %}
  {% for column in (1..columns) %}
    <div class="tag-column">
      <ul>
      {% for tag in tags %}
        {% if tag_index < numPerColumn %}
          <li>
            <a href="#{{ tag[0] | slugify }}">
              <strong>{{ tag[0] }}</strong>
            </a>
            <span style="float:right">{{ tag[1].size }}</span>
          </li>
          {% assign tag_index = tag_index | plus: 1 %}
        {% endif %}
      {% endfor %}
      </ul>
    </div>
    {% assign tags = tags | slice: numPerColumn, tags.size %}
    {% assign tag_index = 0 %}
  {% endfor %}
</div>

---

<!-- Hiển thị bài viết theo từng tag -->
{% assign sorted_tags = site.tags | sort %}
{% for tag in sorted_tags %}
  <h2 id="{{ tag[0] | slugify }}">{{ tag[0] | capitalize }}</h2>
  <ul>
    {% for post in tag[1] %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <small>({{ post.date | date: "%B %d, %Y" }})</small>
      </li>
    {% endfor %}
  </ul>
{% endfor %}
