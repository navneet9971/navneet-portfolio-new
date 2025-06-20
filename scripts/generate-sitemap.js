const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://navneet-portfolio.vercel.app';
const currentDate = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${SITE_URL}/sitemap.xml

# Crawl-delay
Crawl-delay: 1`;

// Write sitemap
fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
console.log('✅ Sitemap generated successfully!');

// Write robots.txt
fs.writeFileSync(path.join(__dirname, '../public/robots.txt'), robotsTxt);
console.log('✅ Robots.txt generated successfully!'); 