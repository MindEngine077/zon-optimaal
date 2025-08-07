<template>
  <div>
    <section class="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
      <div class="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <div class="lg:w-1/2 space-y-8">
          <h1 class="text-4xl md:text-5xl font-bold leading-tight">
            Verdienen met je eigen energie!
          </h1>
          <p class="text-xl opacity-90 max-w-lg">
            Zonne-energie die werkt voor jou. Bespaar op energiekosten en draag bij aan een duurzame toekomst met onze op maat gemaakte zonneoplossingen.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <UButton label="Gratis Offerte" size="xl" color="white" variant="solid" to="/aanmelden" />
            <UButton label="Ontdek onze diensten" size="xl" variant="outline" color="white" to="/diensten" />
          </div>
          <div class="p-4 bg-white/10 backdrop-blur-sm rounded-lg flex items-center gap-4">
            <UIcon name="i-heroicons-check-badge" class="text-2xl text-yellow-300" />
            <p class="text-sm">Erkend zonne-energiebedrijf met 100% tevredenheidsgarantie</p>
          </div>
        </div>
        <div class="lg:w-1/2 relative">
          <img 
            src="/images/zonnepanelen-hero.webp" 
            alt="Zonnepanelen op dak van een modern huis" 
            class="rounded-lg shadow-2xl w-full object-cover"
            width="600"
            height="400"
          />
          <div class="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 flex items-center gap-4 w-64">
            <div class="bg-green-100 rounded-full p-2">
              <UIcon name="i-heroicons-chart-bar" class="text-xl text-green-600" />
            </div>
            <div>
              <p class="text-gray-700 font-semibold">Tot 30% besparing</p>
              <p class="text-gray-500 text-sm">op je energierekening</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50 dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl font-bold mb-6">Waarom kiezen voor Zon Optimaal?</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Wij bieden complete oplossingen voor jouw energiebehoefte met focus op kwaliteit, betrouwbaarheid en optimaal rendement.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white dark:bg-gray-700 rounded-xl shadow-sm p-8 transition hover:shadow-md">
            <div class="w-14 h-14 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-6">
              <UIcon name="i-heroicons-sun" class="text-2xl text-primary-600 dark:text-primary-400" />
            </div>
            <h3 class="text-xl font-semibold mb-3">Hoogwaardige Panelen</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Wij werken uitsluitend met A-merk zonnepanelen voor optimale opbrengst en lange levensduur.
            </p>
          </div>

          <div class="bg-white dark:bg-gray-700 rounded-xl shadow-sm p-8 transition hover:shadow-md">
            <div class="w-14 h-14 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-6">
              <UIcon name="i-heroicons-currency-euro" class="text-2xl text-primary-600 dark:text-primary-400" />
            </div>
            <h3 class="text-xl font-semibold mb-3">Subsidieadvies</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Wij helpen je met alle beschikbare subsidies en fiscale voordelen voor maximaal rendement.
            </p>
          </div>

          <div class="bg-white dark:bg-gray-700 rounded-xl shadow-sm p-8 transition hover:shadow-md">
            <div class="w-14 h-14 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-6">
              <UIcon name="i-heroicons-wrench-screwdriver" class="text-2xl text-primary-600 dark:text-primary-400" />
            </div>
            <h3 class="text-xl font-semibold mb-3">Vakkundige Installatie</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Onze gecertificeerde installateurs zorgen voor een veilige en correcte installatie van je zonnepanelen.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl overflow-hidden shadow-xl">
          <div class="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div class="md:w-2/3 text-white">
              <h2 class="text-3xl font-bold mb-4">Klaar voor een gratis offerte?</h2>
              <p class="text-white/90 mb-6 max-w-lg">
                Laat je gegevens achter en ontvang binnen 24 uur een persoonlijke offerte voor jouw situatie.
              </p>
              <UForm @submit="onSubmit">
                <div class="flex flex-col md:flex-row gap-4 mb-4">
                  <UFormGroup label="Naam" class="flex-1">
                    <UInput v-model="form.name" placeholder="Uw naam" class="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                  </UFormGroup>
                  <UFormGroup label="Email" class="flex-1">
                    <UInput v-model="form.email" placeholder="uw@email.nl" class="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                  </UFormGroup>
                </div>
                <UFormGroup label="Telefoonnummer">
                  <UInput v-model="form.phone" placeholder="Uw telefoonnummer" class="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                </UFormGroup>
                <UButton type="submit" color="white" size="lg" class="mt-4">
                  Vraag Offerte Aan
                </UButton>
              </UForm>
            </div>
            <div class="hidden md:block md:w-1/3">
              <img src="/images/solar-technician.webp" alt="Zonnepaneel technicus" class="rounded-lg shadow-lg" width="400" height="300" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50 dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl font-bold mb-6">Wat onze klanten zeggen</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Wij zijn trots op onze tevreden klanten en hun ervaringen met Zon Optimaal.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
            <div class="flex items-center gap-2 mb-4">
              <UIcon name="i-heroicons-star" v-for="star in 5" :key="star" class="text-yellow-400" />
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-6">{{ testimonial.text }}</p>
            <div class="flex items-center gap-4">
              <UAvatar :src="testimonial.avatar" :alt="testimonial.name" />
              <div>
                <h4 class="font-medium">{{ testimonial.name }}</h4>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ testimonial.location }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl font-bold mb-6">Veelgestelde vragen</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Antwoorden op de meest gestelde vragen over zonnepanelen en onze diensten.
          </p>
        </div>

        <div class="max-w-3xl mx-auto">
          <UAccordion :items="faqItems" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO metadata
useHead({
  title: 'Zon Optimaal - Verdienen met je eigen energie',
  meta: [
    {
      name: 'description',
      content: 'Zon Optimaal helpt u verdienen met uw eigen energie. Wij leveren hoogwaardige zonnepanelen, energieopslag en advies voor particulieren en bedrijven in heel Nederland.'
    },
    {
      name: 'keywords',
      content: 'zonnepanelen, zonne-energie, duurzame energie, energiebesparing, groene energie, subsidie zonnepanelen, zonnepanelen installatie, Kessel, Limburg, Nederland'
    },
    {
      property: 'og:title',
      content: 'Zon Optimaal - Verdienen met je eigen energie'
    },
    {
      property: 'og:description',
      content: 'Zon Optimaal helpt u verdienen met uw eigen energie. Ontdek onze hoogwaardige zonnepanelen en energieoplossingen.'
    },
    {
      property: 'og:image',
      content: 'https://zonoptimaal.nl/images/og-image.jpg'
    },
    {
      property: 'og:url',
      content: 'https://zonoptimaal.nl'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://zonoptimaal.nl'
    }
  ]
})

// Contact form
const form = reactive({
  name: '',
  email: '',
  phone: ''
})

const onSubmit = async () => {
  // In a real application, you would submit this to your Supabase database
  console.log('Form submitted:', form)
  
  try {
    // Example of how to save to Supabase
    // const { data, error } = await useSupabaseClient()
    //   .from('leads')
    //   .insert([
    //     { 
    //       name: form.name, 
    //       email: form.email, 
    //       phone: form.phone,
    //       source: 'homepage'
    //     }
    //   ])
    
    // Handle success/error
  } catch (error) {
    console.error('Error submitting form:', error)
  }
}

// Testimonials data
const testimonials = [
  {
    text: 'Zeer tevreden met de installatie van onze zonnepanelen. Professioneel advies en vakkundige installatie. De opbrengst is zelfs hoger dan verwacht!',
    name: 'Mark Jansen',
    location: 'Venlo',
    avatar: '/images/testimonials/person1.webp'
  },
  {
    text: 'De adviseur van Zon Optimaal heeft ons uitstekend geholpen bij het kiezen van de juiste oplossing voor ons huis. Alles werd netjes op tijd geleverd en geïnstalleerd.',
    name: 'Laura Smeets',
    location: 'Roermond',
    avatar: '/images/testimonials/person2.webp'
  },
  {
    text: 'Goede service en duidelijke communicatie. Ze hebben ons ook geholpen met het aanvragen van subsidies, wat een hoop gedoe heeft bespaard. Aanrader!',
    name: 'Pieter de Vries',
    location: 'Maastricht',
    avatar: '/images/testimonials/person3.webp'
  }
]

// FAQ items (great for SEO)
const faqItems = [
  {
    label: 'Hoeveel zonnepanelen heb ik nodig?',
    content: 'Het aantal benodigde zonnepanelen hangt af van uw energieverbruik, beschikbare dakoppervlakte en gewenste energieopbrengst. In een persoonlijk adviesgesprek maken we een berekening op maat.'
  },
  {
    label: 'Wat is de terugverdientijd van zonnepanelen?',
    content: 'De gemiddelde terugverdientijd van zonnepanelen ligt tussen de 5 en 8 jaar, afhankelijk van uw situatie, energieverbruik en eventuele subsidies. Daarna levert het systeem pure winst op.'
  },
  {
    label: 'Welke subsidies zijn er beschikbaar voor zonnepanelen?',
    content: 'Er zijn verschillende subsidies beschikbaar, zoals de BTW-teruggave voor particulieren en de SDE++ subsidie voor bedrijven. Ook zijn er soms lokale of provinciale regelingen. Wij helpen u graag bij het aanvragen.'
  },
  {
    label: 'Wat kost een zonnepanelen-installatie?',
    content: 'De kosten van een zonnepanelen-installatie variëren afhankelijk van het aantal panelen, type en kwaliteit. Voor een gemiddeld huishouden ligt de prijs tussen €4.000 en €8.000 na BTW-teruggave.'
  },
  {
    label: 'Hoe lang gaan zonnepanelen mee?',
    content: 'Moderne zonnepanelen hebben een levensduur van 25-30 jaar. De opbrengst neemt in deze periode geleidelijk af, maar na 25 jaar produceren de panelen nog steeds ongeveer 80-85% van hun oorspronkelijke capaciteit.'
  },
  {
    label: 'Moet ik mijn zonnepanelen onderhouden?',
    content: 'Zonnepanelen hebben weinig onderhoud nodig. Een periodieke reiniging (1-2 keer per jaar) kan de opbrengst optimaliseren. Bij Zon Optimaal bieden we onderhoudscontracten aan voor zorgeloos beheer.'
  }
]
</script>

<style>
/* Additional custom styles can be added here */
</style>

