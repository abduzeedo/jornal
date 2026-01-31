# Jornal

A minimal static blog powered by conversation. No databases, no build tools, no dependencies. Just HTML files and Claude.

## What is this?

Jornal is a static blog system designed to be managed entirely through natural language conversation with [Claude Code](https://claude.ai/claude-code). Instead of learning a CMS or writing code, you simply describe what you want:

- **"Let's blog"** → Creates a new post
- **"Edit the site"** → Modifies pages, navigation, or content
- **"Change the design"** → Updates colors, fonts, or layout

Claude handles the HTML, updates the listings, and keeps everything organized.

## How it works

1. Open the folder in Claude Code
2. Tell Claude what you want in plain English
3. Claude creates/edits the HTML files directly

That's it. No coding required.

## Site structure

```
jornal/
├── index.html          # Home page
├── about.html          # About page
├── contact.html        # Contact page
├── sitemap.xml         # For search engines
└── blog/
    ├── index.html      # Blog listing
    └── [posts].html    # Individual posts
```

## Running locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000

## Deployment

It's just static HTML—works anywhere:

- **GitHub Pages** (this repo)
- **Netlify**: Drag and drop
- **Vercel**: Connect your repo
- **Any host**: Upload via FTP

## Built with

- Plain HTML & CSS
- [Inter](https://rsms.me/inter/) for headings
- [Source Serif 4](https://github.com/adobe-fonts/source-serif) for body text
- Claude Code for content management

---

*Built with Claude Code. No coding required.*
