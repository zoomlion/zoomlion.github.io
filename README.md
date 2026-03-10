# zoomlion's Blog

A personal blog built with Jekyll and hosted on GitHub Pages.

## Features

- Jekyll static site generator
- Minimal theme (minima)
- Decap CMS for content management
- GitHub Actions for automated deployment
- Responsive design

## Getting Started

### Local Development

1. Install Ruby and Bundler
2. Install dependencies:
   ```bash
   bundle install
   ```
3. Start local server:
   ```bash
   bundle exec jekyll serve
   ```
4. Open http://localhost:4000

### Using Decap CMS

Access the admin panel at: `/admin`

To use Decap CMS with GitHub:

1. Go to https://github.com/settings/developers
2. Create a new OAuth App:
   - Homepage URL: `https://zoomlion.github.io`
   - Callback URL: `https://api.netlify.com/auth/done`
3. Note the Client ID and Client Secret
4. Deploy to Netlify (free) or use Git Gateway (see below)

### Git Gateway (No Netlify Required)

Since Decap CMS needs authentication, you have two options:

1. **Use Netlify** (Recommended):
   - Connect your GitHub repo to Netlify
   - Enable Identity service
   - Enable Git Gateway
   - Access admin at your Netlify URL

2. **Use Decap CMS Cloud** (Easiest):
   - Go to https://decapcms.org
   - Connect your GitHub repository
   - It handles authentication for you

## Writing Posts

Create new posts in `_posts/` folder with format:
```
YYYY-MM-DD-title.md
```

Or use the Decap CMS admin at `/admin`.

## License

MIT License
