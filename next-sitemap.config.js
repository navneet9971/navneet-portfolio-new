/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://navi.reel-elevate.co.in/',
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
      'https://navi.reel-elevate.co.in//sitemap.xml',
    ],
  },
  exclude: ['/404', '/500'],
  changefreq: 'weekly',
  priority: 0.7,
} 