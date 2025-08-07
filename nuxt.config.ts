import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // CSS configuration
  css: ['~/assets/css/main.css'],
  
  // App configuration
  app: {
    head: {
      title: 'Zon Optimaal | Verdien met je eigen energie',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Complete zonne-energie-oplossingen voor bedrijven en particulieren in Nederland. Verdien met je eigen energie!' 
        },
        { name: 'keywords', content: 'zonnepanelen, zonne-energie, batterijopslag, energiebesparing, Nederland, duurzaam' },
        { name: 'author', content: 'Zon Optimaal' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://zon-optimaal.nl' },
        { property: 'og:site_name', content: 'Zon Optimaal' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // Generate static site
  nitro: {
    prerender: {
      routes: []
    }
  },

  // Modules
  modules: [
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Inter': [400, 500, 600, 700],
          'Roboto': [400, 500, 700]
        },
        display: 'swap'
      }
    ]
  ],

  // Build configuration for static generation
  ssr: true
})
