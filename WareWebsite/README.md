# Ware Massage Website

Modern static website for [waremassage.com](https://waremassage.com), built with [Astro](https://astro.build) and Tailwind CSS.

## Develop

```
npm install
npm run dev      # local preview at http://localhost:4321
```

## Content

All business content (services, prices, therapists, contact info) lives in
`src/data/site.js` — edit that file to update prices or add/remove therapists,
no HTML knowledge needed.

## Deploy to HostUpon

```
npm run build
```

This produces plain HTML/CSS/JS in `dist/`. Upload the **contents** of `dist/`
to `public_html/` via cPanel File Manager or FTP (replacing the old WordPress
files). No PHP, database, or WordPress required.
