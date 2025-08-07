// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/supabase',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],
  // SEO Configuration
  app: {
    head: {
      title: 'Zon Optimaal - Verdienen met je eigen energie!',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          hid: 'description', 
          name: 'description', 
          content: 'Zon Optimaal helpt u met het optimaliseren van uw zonne-energie en verdienen met uw eigen energie. Ontdek onze duurzame oplossingen.'
        },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  // Supabase Configuration
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: ['/*']
    }
  },
  // Sitemap Configuration for SEO
  sitemap: {
    hostname: 'https://zonoptimaal.nl'
  },
  // Image optimization
  image: {
    quality: 80,
    format: ['webp']
  },
  // TypeScript strict checking
  typescript: {
    strict: true,
    shim: false
  }
})
