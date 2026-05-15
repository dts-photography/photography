# 🚀 Deployment Guide - DTS Photography Website

## Option 1: GitHub Pages (Recommended - FREE)

### Prerequisites
- GitHub account
- Git installed on your computer

### Steps

1. **Create a GitHub Repository**
   - Go to [github.com](https://github.com) and sign in
   - Click "New repository"
   - Repository name: `dts-photography` (or `[your-username].github.io`)
   - Add description: "Sports photography portfolio"
   - Make it Public
   - Click "Create repository"

2. **Upload Files to GitHub**
   - Click "uploading an existing file" link
   - Select all files from your project folder (except node_modules)
   - Include: HTML files, css/, images/, js/, README.md, .gitignore
   - Commit message: "Initial commit: DTS website"

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Branch: `main` / Folder: `/ (root)`
   - Click Save
   - Your site will be available at: `https://dts-photography.github.io`

4. **Custom Domain (Optional)**
   - Go to Settings → Pages
   - Add your domain in "Custom domain"
   - Add DNS records provided by GitHub
   - Enable "Enforce HTTPS"

---

## Option 2: Netlify (Also FREE)

### Steps

1. Create account at [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Build settings:
   - Build command: (leave empty - static site)
   - Publish directory: `./`
4. Deploy site
5. Custom domain available (paid)

---

## Option 3: Vercel (Also FREE)

### Steps

1. Create account at [vercel.com](https://vercel.com)
2. Import your GitHub project
3. Framework preset: "Other"
4. Deploy
5. Site goes live instantly

---

## Quick Local Testing

Run locally before deploying:

```bash
# Using Python
python -m http.server 8000

# Or using Node.js
npx http-server

# Or using PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

---

## File Structure for Deployment

Ensure your GitHub repository has this structure:

```
dts-photography/
├── index.html
├── portfolio.html
├── packages.html
├── contact.html
├── README.md
├── .gitignore
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── images/
    ├── logo.png
    ├── Layup_Khalifa_Park.jpg
    ├── WASSUP_KHALIFA_PARK.jpg
    ├── IMG_3.jpg
    ├── IMG_4.jpg
    └── IMG_5.jpg
```

---

## SEO & Metadata

The website includes:
- ✅ Proper page titles
- ✅ Meta viewport for mobile
- ✅ Semantic HTML
- ✅ Accessibility attributes
- ✅ Fast loading times

---

## Maintenance

After deployment:
1. Monitor broken images in browser console
2. Update portfolio images regularly
3. Keep pricing current
4. Update contact info as needed
5. Test mobile responsiveness

---

## Support

For issues:
- Check browser console (F12) for errors
- Verify all image paths
- Clear browser cache
- Test in incognito mode

**Happy deploying! 🎉**
