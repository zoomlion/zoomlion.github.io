# Hugo Blog

A personal blog built with Hugo and hosted on GitHub Pages.

## Quick Start

### Install Hugo

**macOS (Homebrew):**
```bash
brew install hugo
```

**Linux:**
```bash
sudo apt install hugo
# or
sudo yum install hugo
```

**Windows:**
```bash
choco install hugo -extended
```

Or download from: https://github.com/gohugoio/hugo/releases

### Local Development

```bash
# Start local server
hugo server

# Open http://localhost:1313
```

### Create New Post

```bash
hugo new posts/my-new-post.md
```

Then edit the file in `content/posts/`

### Build for Production

```bash
hugo --minify
```

The output will be in the `public/` folder.

## Writing Posts

Create markdown files in `content/posts/` with front matter:

```yaml
---
title: "Your Title"
date: 2026-03-10
categories:
  - Category1
tags:
  - tag1
---

Your content here...
```

## Deployment

This site uses GitHub Actions to automatically deploy to GitHub Pages on every push to main branch.

Check deployment status at: https://github.com/zoomlion/zoomlion.github.io/actions

## Directory Structure

```
.
├── content/          # Blog posts and pages
│   ├── posts/        # Blog posts
│   └── about.md      # About page
├── layouts/          # Hugo templates
├── assets/           # CSS, JS, images
├── static/           # Static files
├── hugo.toml         # Hugo configuration
└── public/           # Generated site (gitignored)
```

## License

MIT
