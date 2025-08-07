// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    // '@nuxtjs/supabase', // Temporarily disabled for development
    // '@nuxtjs/sitemap',  // Temporarily disabled for development
    // '@nuxtjs/robots'    // Temporarily disabled for development
  ],
  // SEO Configuration - Uitgebreid voor betere ranking
  app: {
    head: {
      title: 'Zon Optimaal - Verdienen met je eigen energie! | Zonnepanelen 2025',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Zon Optimaal helpt u met het optimaliseren van uw zonne-energie en verdienen met uw eigen energie. Bespaar tot 70% op uw energierekening met onze zonnepanelen oplossingen in 2025.'
        },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'Zon Optimaal - Verdienen met je eigen energie!' },
        { property: 'og:description', content: 'Zon Optimaal helpt u met het optimaliseren van uw zonne-energie. Bespaar tot 70% op uw energierekening in 2025.' },
        { property: 'og:image', content: '/images/zon-optimaal-social.jpg' },
        { property: 'og:url', content: 'https://zonoptimaal.nl' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Zon Optimaal - Verdienen met je eigen energie!' },
        { name: 'twitter:description', content: 'Zon Optimaal helpt u met het optimaliseren van uw zonne-energie. Bespaar tot 70% op uw energierekening in 2025.' },
        { name: 'twitter:image', content: '/images/zon-optimaal-social.jpg' },
        { name: 'keywords', content: 'zonnepanelen, zonne-energie, duurzame energie, energiebesparing, groene stroom, zonnepanelen installatie, zonnepanelen subsidie, terugverdientijd zonnepanelen' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://zonoptimaal.nl' }
      ]
    }
  },
  // TypeScript strict checking
  typescript: {
    strict: true,
    shim: false
  }
})
