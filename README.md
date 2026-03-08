# Academic Blog with Jekyll + Decap CMS

A simple, clean academic website with a web-based content management system.

## Features

- **Jekyll** - Static site generator
- **Decap CMS** - Web-based admin panel at `/admin/`
- **Markdown** - Easy content writing
- **GitHub Pages** - Free hosting

## Quick Start (Local Development)

### Prerequisites
- Ruby 2.7+ (for Jekyll)

### Install & Run

```bash
# Install dependencies
bundle install

# Start local server
bundle exec jekyll serve

# Visit http://localhost:4000
```

### Admin Panel
- URL: `http://localhost:4000/admin/`
- Login with GitHub to edit content

---

## Deploy to GitHub Pages

### Step 1: Create Repository
1. Go to [GitHub](https://github.com)
2. Create new repo: `zoomlion.github.io`
3. **Important**: Name must be `yourusername.github.io`

### Step 2: Push Code

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/zoomlion/zoomlion.github.io.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repo on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main** (or master)
   - Folder: **/(root)**
4. Click **Save**

### Step 4: Enable Identity (for CMS)
1. Go to repo **Settings** → **Pages**
2. Under "Build and deployment", find "GitHub Actions"
3. Or go to **Settings** → **Identity** to enable Netlify Identity

### Step 5: Authorize CMS Access
1. Go to `https://zoomlion.github.io/admin/`
2. Click "Login with GitHub"
3. Authorize the application

---

## Using the CMS

### Access Admin Panel
- URL: `https://zoomlion.github.io/admin/`
- Login with your GitHub account

### Managing Content

| Task | How |
|------|-----|
| Add new post | Click **Blog Posts** → **New Blog Post** |
| Edit about page | Click **About Page** → Edit |
| Edit publications | Click **Publications Page** → Edit |
| Add images | Drag & drop in CMS editor |

### How It Works
1. You create/edit content in the CMS
2. CMS commits changes to GitHub
3. GitHub Pages automatically rebuilds
4. Your site updates in ~1 minute

---

## Project Structure

```
.
├── _config.yml          # Site settings
├── _layouts/            # HTML templates
│   ├── default.html
│   ├── page.html
│   └── post.html
├── _posts/              # Blog posts (Markdown)
├── _pages/              # Pages (about, publications)
├── admin/                # Decap CMS
│   ├── index.html
│   └── config.yml
├── css/
│   └── style.css
├── images/               # Images folder
├── Gemfile              # Ruby dependencies
└── index.html           # Home page
```

---

## Customization

### Update Site Info
Edit `_config.yml`:
```yaml
title: "Your Name"
author: "Your Name"
url: "https://zoomlion.github.io"
```

### Update Social Links
In `_config.yml`:
```yaml
social:
  - name: Google Scholar
    url: "https://scholar.google.com/..."
  - name: Twitter
    url: "https://twitter.com/..."
```

### Change Colors
Edit `css/style.css`:
```css
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
}
```

---

## Troubleshooting

### CMS Not Loading
- Ensure GitHub Pages is enabled
- Check repo is public
- Verify `admin/config.yml` is correct

### Build Errors
- Run `bundle exec jekyll build` locally to see errors
- Check Ruby version (need 2.7+)

### Changes Not Showing
- Wait 1-2 minutes for rebuild
- Clear browser cache
- Check GitHub Actions for build status

---

## License

MIT License - Feel free to use and modify!
