const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://navi.reel-elevate.co.in';
const currentDate = new Date().toISOString().split('T')[0];

// Define blog posts manually since we can't import ES6 modules in Node.js script
const blogPosts = [
  { slug: 'getting-started-with-html', date: '2024-06-01' },
  { slug: 'mastering-css-styling-the-web', date: '2024-06-02' },
  { slug: 'responsive-web-design-mobile-first', date: '2024-06-03' },
  { slug: 'javascript-essentials', date: '2025-06-21' },
  { slug: 'mongodb-basics', date: '2025-06-21' },
  { slug: 'framer-motion-animations', date: '2025-06-21' },
  { slug: 'gsap-animations-guide', date: '2025-06-21' },
  { slug: 'complete-seo-guide-optimize-website', date: '2024-01-15' },
  { slug: 'nextjs-seo-optimization-best-practices', date: '2024-01-20' }
];

// Define all pages
const pages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/blog', priority: '0.8', changefreq: 'weekly' },
  { url: '/privacy-policy', priority: '0.3', changefreq: 'monthly' },
  { url: '/terms-of-service', priority: '0.3', changefreq: 'monthly' },
];

// Add blog posts
const blogUrls = blogPosts.map(post => ({
  url: `/blog/${post.slug}`,
  priority: '0.7',
  changefreq: 'monthly',
  lastmod: post.date
}));

// Combine all URLs
const allUrls = [...pages, ...blogUrls];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(page => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${page.lastmod || currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${SITE_URL}/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin or private areas (if any)
Disallow: /api/
Disallow: /_next/`;

// Write sitemap
fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
console.log('✅ Sitemap generated successfully with', allUrls.length, 'URLs!');

// Write robots.txt
fs.writeFileSync(path.join(__dirname, '../public/robots.txt'), robotsTxt);
console.log('✅ Robots.txt generated successfully!'); 