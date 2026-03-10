---
layout: home
title: Home
---

# Welcome to My Blog

This is my personal blog built with Jekyll and hosted on GitHub Pages.

## Recent Posts

<ul class="post-list">
  {% for post in site.posts limit: 5 %}
    <li>
      <span class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</span>
      <h2>
        <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
      </h2>
      <p>{{ post.excerpt | strip_html | truncatewords: 50 }}</p>
    </li>
  {% endfor %}
</ul>

<p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | relative_url }}">via RSS</a></p>
