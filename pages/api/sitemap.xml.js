const SITE_URL = 'https://navneet-portfolio.vercel.app'

export default function handler(req, res) {
  const currentDate = new Date().toISOString().split('T')[0]
  
  const pages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/privacy-policy', priority: '0.8', changefreq: 'monthly' },
    { url: '/terms-of-service', priority: '0.8', changefreq: 'monthly' }
  ]
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`

  res.setHeader('Content-Type', 'text/xml')
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate')
  res.write(sitemap)
  res.end()
} 