---
layout: page
title: Blog
---

<p>Thoughts on research, academia, and interesting findings.</p>

<ul class="posts-list">
  {% for post in site.posts %}
  <li class="post-item">
    <div>
      <h3 class="post-title"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h3>
      <p class="post-excerpt">{{ post.content | strip_html | truncate: 150 }}</p>
    </div>
    <span class="post-date">{{ post.date | date: "%b %d, %Y" }}</span>
  </li>
  {% endfor %}
</ul>
