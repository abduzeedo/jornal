# Jornal - AI-Powered Static Blog

A minimal static blog system powered by conversation. No databases, no build tools, no dependencies. Just HTML files and vibes.

## Quick Start

1. Open this folder in Claude Code
2. Say what you want to do:
   - **"Let's blog"** - Create a new post
   - **"Edit the site"** - Change pages, menus, or content
   - **"Change the design"** - Update colors, fonts, or layout

That's it. Just talk to Claude.

---

## Creating Blog Posts

Say: **"Let's blog"**

Then describe:
- **Topic**: What the post is about
- **Tone**: Casual, professional, technical, humorous, etc.
- **Key points**: Specific things to cover (optional)
- **Length**: Short (~300 words), medium (~600), or long (~1000+)

Claude will write the post, create the HTML file, and update all listings automatically.

---

## Editing the Site

Say: **"Edit the site"**

Then tell Claude what you want to change:

### Pages
- "Add a new page called Projects"
- "Remove the contact page"
- "Rename About to Story"

### Navigation Menu
- "Add Projects to the menu"
- "Reorder the menu: Home, Blog, About, Contact"
- "Remove Contact from the menu"

### Page Content
- "Change the home page headline to X"
- "Update the about page text"
- "Add my email to the contact page"
- "Write a new intro for the home page"

### Blog Posts
- "Edit the post [title]"
- "Delete the post [title]"
- "Change the date on [post] to X"

### Footer
- "Change the footer text to X"
- "Add social links to the footer"

---

## Changing the Design

Say: **"Change the design"**

Then describe what you want:

### Colors
- "Make the accent color green"
- "Use a dark background with light text"
- "Change link color to red"

### Typography
- "Use a different font for headings"
- "Make the body text larger"
- "Use a monospace font for everything"

### Layout
- "Make the content wider"
- "Add more spacing between sections"
- "Center the navigation"

### Style Reference
You can also share a reference:
- "Make it look like [website URL]"
- "Use a more minimal style"
- "Make it feel more playful"

---

## Site Structure

```
jornal/
├── index.html          # Home page
├── about.html          # About page
├── contact.html        # Contact page
├── sitemap.xml         # For search engines
├── CLAUDE.md           # This file
└── blog/
    ├── index.html      # Blog listing
    └── [posts].html    # Individual posts
```

---

## Current Design Settings

### Colors
```
--black: #1a1a1a        # Headings
--gray: #444            # Body text
--light-gray: #999      # Meta text, dates
--border: #e5e5e5       # Lines, borders
--bg: #fff              # Background
--accent: #0066cc       # Links
```

### Typography
- **Headings & UI**: Inter (sans-serif)
- **Body text**: Source Serif 4 (serif)
- **Base size**: 18px
- **Max width**: 720px

### Current Pages
- Home (`index.html`)
- About (`about.html`)
- Contact (`contact.html`)
- Blog (`blog/index.html`)

### Current Menu
Home | About | Blog | Contact

---

## Running Locally

```bash
python3 -m http.server 8000
```

Open http://localhost:8000

---

## Deploying

Static site - works anywhere:
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your repo
- **GitHub Pages**: Enable Pages in repo settings
- **Any host**: Upload via FTP

---

## Quick Commands

| You say | Claude does |
|---------|-------------|
| "Let's blog" | Create a new post |
| "Edit the site" | Modify pages, menus, content |
| "Change the design" | Update colors, fonts, layout |
| "Delete post [title]" | Remove a post |
| "Add a [name] page" | Create new page |
| "Update the sitemap" | Refresh sitemap.xml |
| "Run the server" | Start local preview |

---

## Tips

- Keep post URLs short and descriptive
- Home page shows latest 20 posts
- Posts are newest first
- Be specific when describing design changes
- Share example URLs for design inspiration

---

Built with Claude Code. No coding required.
