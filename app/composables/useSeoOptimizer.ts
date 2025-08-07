// composables/useSeoOptimizer.ts
interface SeoOptions {
  title: string
  description: string
  keywords?: string
  image?: string
  type?: string
  url?: string
  author?: string
}

interface SchemaItem {
  question: string
  answer: string
}

interface BreadcrumbItem {
  name: string
  url: string
}

interface SchemaData {
  title?: string
  description?: string
  image?: string
  author?: string
  date?: string
  updated?: string
  name?: string
  brand?: string
  price?: string | number
  items?: SchemaItem[] | BreadcrumbItem[]
}

export default function useSeoOptimizer() {
  const route = useRoute()
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl || 'https://zonoptimaal.nl'
  
  // Generate complete page URL
  const getPageUrl = (path?: string) => {
    if (path) {
      return `${siteUrl}${path}`
    }
    return `${siteUrl}${route.path}`
  }
  
  // Generate optimized title with page-specific prefix and brand suffix
  const createSeoTitle = (pageTitle: string, includeTagline = true) => {
    const siteName = 'Zon Optimaal'
    const tagline = includeTagline ? ' | Verdienen met zonne-energie 2025' : ''
    return `${pageTitle} - ${siteName}${tagline}` 
  }
  
  // Apply all SEO metadata
  const setSeoMeta = (options: SeoOptions) => {
    const pageUrl = options.url || getPageUrl()
    
    // Default image for social sharing
    const ogImage = options.image || `${siteUrl}/images/og-default.jpg`
    
    // Set all metadata at once
    useHead({
      title: options.title,
      meta: [
        { name: 'description', content: options.description },
        ...(options.keywords ? [{ name: 'keywords', content: options.keywords }] : []),
        { property: 'og:title', content: options.title },
        { property: 'og:description', content: options.description },
        { property: 'og:image', content: ogImage },
        { property: 'og:url', content: pageUrl },
        { property: 'og:type', content: options.type || 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: options.title },
        { name: 'twitter:description', content: options.description },
        { name: 'twitter:image', content: ogImage },
        ...(options.author ? [{ name: 'author', content: options.author }] : [])
      ],
      link: [
        { rel: 'canonical', href: pageUrl }
      ]
    })
  }
  
  // Generate schema.org JSON-LD for specific page types
  const generateSchema = (type: string, data: SchemaData) => {
    let schema = {}
    
    switch (type) {
      case 'article':
        schema = {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: data.title,
          description: data.description,
          image: data.image,
          author: {
            '@type': 'Person',
            name: data.author
          },
          publisher: {
            '@type': 'Organization',
            name: 'Zon Optimaal',
            logo: {
              '@type': 'ImageObject',
              url: `${siteUrl}/images/logo.png`
            }
          },
          datePublished: data.date,
          dateModified: data.updated || data.date
        }
        break
        
      case 'product':
        schema = {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: data.name,
          description: data.description,
          image: data.image,
          brand: {
            '@type': 'Brand',
            name: data.brand || 'Zon Optimaal'
          },
          offers: {
            '@type': 'Offer',
            price: data.price || '',
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock'
          }
        }
        break
        
      case 'faq':
        if (Array.isArray(data.items)) {
          schema = {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: (data.items as SchemaItem[]).map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer
              }
            }))
          }
        }
        break
        
      case 'breadcrumbs':
        if (Array.isArray(data.items)) {
          schema = {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: (data.items as BreadcrumbItem[]).map((item, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: item.name,
              item: item.url
            }))
          }
        }
        break
    }
    
    return schema
  }
  
  // Apply schema.org JSON-LD to the page
  const setSchema = (type: string, data: SchemaData) => {
    const schema = generateSchema(type, data)
    
    useHead({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(schema)
        }
      ]
    })
  }
  
  // Combine multiple schemas into one array
  const setMultipleSchemas = (schemas: Array<{type: string, data: SchemaData}>) => {
    const scriptArray = schemas.map(item => ({
      type: 'application/ld+json',
      innerHTML: JSON.stringify(generateSchema(item.type, item.data))
    }))
    
    useHead({
      script: scriptArray
    })
  }
  
  return {
    setSeoMeta,
    createSeoTitle,
    getPageUrl,
    setSchema,
    setMultipleSchemas
  }
}
