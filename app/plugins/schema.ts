export default defineNuxtPlugin((nuxtApp) => {
  // This plugin adds schema.org structured data to improve SEO
  nuxtApp.hook('app:mounted', () => {
    // Add the organization schema
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zon Optimaal',
      url: 'https://zonoptimaal.nl',
      logo: 'https://zonoptimaal.nl/logo.png',
      description: 'Zon Optimaal helpt u verdienen met uw eigen energie door hoogwaardige zonnepanelen en duurzame energieoplossingen. Bespaar tot 70% op uw energierekening in 2025.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Molenstraat 42',
        addressLocality: 'Kessel',
        addressRegion: 'Limburg',
        postalCode: '5995',
        addressCountry: 'NL'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+31-85-303-1193',
        contactType: 'customer service',
        email: 'info@zonoptimaal.nl',
        availableLanguage: 'Dutch'
      },
      sameAs: [
        'https://www.facebook.com/zonoptimaal',
        'https://www.instagram.com/zonoptimaal',
        'https://www.linkedin.com/company/zonoptimaal'
      ]
    }

    // Add the service schema (for zonnepanelen services)
    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Zonnepanelen installatie',
      provider: {
        '@type': 'Organization',
        name: 'Zon Optimaal'
      },
      areaServed: {
        '@type': 'Country',
        name: 'Netherlands'
      },
      description: 'Professionele installatie van zonnepanelen voor particulieren en bedrijven in heel Nederland. Inclusief advies, ontwerp, installatie en onderhoud.',
      offers: {
        '@type': 'Offer',
        price: '4000-10000',
        priceCurrency: 'EUR',
        priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
        availability: 'https://schema.org/InStock'
      }
    }

    // Add local business schema for better local SEO
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Zon Optimaal',
      image: 'https://zonoptimaal.nl/images/store-front.jpg',
      '@id': 'https://zonoptimaal.nl',
      url: 'https://zonoptimaal.nl',
      telephone: '+31-85-303-1193',
      priceRange: '€€€',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Molenstraat 42',
        addressLocality: 'Kessel',
        addressRegion: 'Limburg',
        postalCode: '5995',
        addressCountry: 'NL'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 51.3264,
        longitude: 6.0470
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday'
          ],
          opens: '09:00',
          closes: '17:00'
        }
      ]
    }

    // Add FAQ schema for SEO improvement
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Hoe lang duurt het voordat ik een offerte ontvang?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Binnen 24 uur na het indienen van uw aanvraag ontvangt u een voorlopige offerte per e-mail.'
          }
        },
        {
          '@type': 'Question',
          name: 'Is er subsidie beschikbaar voor zonnepanelen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja, er zijn verschillende subsidies beschikbaar. In uw offerte nemen we de actuele subsidiemogelijkheden mee.'
          }
        },
        {
          '@type': 'Question',
          name: 'Wat is de terugverdientijd van zonnepanelen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'De gemiddelde terugverdientijd is 5-7 jaar, maar dit varieert per situatie en wordt gedetailleerd uitgewerkt in uw persoonlijke offerte.'
          }
        },
        {
          '@type': 'Question',
          name: 'Wat heb ik nodig voor een nauwkeurige offerte?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Voor de meest nauwkeurige offerte heeft u uw jaarlijkse elektriciteitsverbruik in kWh, het type dak (plat of schuin), de oriëntatie van het dak en informatie over eventuele schaduwvorming nodig.'
          }
        }
      ]
    }

    // Create script elements and append to document head
    const addJsonLdScript = (data: Record<string, any>) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.innerHTML = JSON.stringify(data)
      document.head.appendChild(script)
    }

    addJsonLdScript(organizationSchema)
    addJsonLdScript(serviceSchema)
    addJsonLdScript(localBusinessSchema)
    addJsonLdScript(faqSchema)
  })
})

