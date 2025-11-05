module.exports = {
  siteUrl: 'https://www.buraksaglik.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'monthly',
  priority: 0.7,
  exclude: ['/404', '/500'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/']
      }
    ],
    additionalSitemaps: ['https://www.buraksaglik.com/sitemap.xml']
  }
};
