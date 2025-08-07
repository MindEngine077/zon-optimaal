export default defineNitroPlugin((nitroApp) => {
  // Custom sitemap configuration for enhanced SEO
  const sitemapConfig = {
    hostname: 'https://zonoptimaal.nl',
    routes: [
      {
        url: '/',
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date().toISOString()
      },
      {
        url: '/offerte',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString()
      },
      {
        url: '/contact',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString()
      },
      {
        url: '/over-ons',
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString()
      },
      {
        url: '/zonnepanelen',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString()
      },
      {
        url: '/energieopslag',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString()
      },
      {
        url: '/warmtepompen',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString()
      },
      {
        url: '/laadpalen',
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString()
      },
      {
        url: '/subsidies',
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString()
      },
      {
        url: '/faq',
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString()
      },
      {
        url: '/blog',
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date().toISOString()
      }
      // Blog posts would be dynamically added in a real implementation
    ]
  }

  // Set the sitemap configuration for the Nuxt module to use
  nitroApp.hooks.hook('sitemap:generate', (ctx) => {
    // Merge our custom config with any existing config
    ctx.routes.push(...sitemapConfig.routes)
  })
})

