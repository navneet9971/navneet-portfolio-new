/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://navneet-portfolio.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://navneet-portfolio.vercel.app/sitemap.xml',
    ],
  },
  exclude: ['/404', '/500'],
  changefreq: 'weekly',
  priority: 0.7,
} 