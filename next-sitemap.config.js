/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.staylets.co.uk/',
    generateRobotsTxt: true,
    generateIndexSitemap:true,
    sitemapSize: 7000,
    exclude: ["/404","/booking-success"],
    robotsTxtOptions: {
        policies: [
          {
            userAgent: "*",
            disallow: ["/404","/booking-success"],
          },
          { userAgent: "*", allow: "/" },
        ],
        additionalSitemaps: [
          `${process.env.SITE_URL}sitemap.xml`,
          `${process.env.SITE_URL}server-sitemap.xml`,
        ],
    }
  }