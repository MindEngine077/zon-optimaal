<template>
  <div>
    <section class="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16 lg:py-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <span class="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              Bespaar tot 30% op uw energierekening
            </span>
            <h1 class="text-4xl md:text-5xl font-bold leading-tight">
              Vraag direct uw gratis offerte aan
            </h1>
            <p class="text-xl opacity-90 max-w-lg">
              Ontvang binnen 24 uur een persoonlijk voorstel voor uw situatie. Geheel vrijblijvend en zonder verplichtingen.
            </p>
            
            <div class="flex flex-wrap gap-6 mt-8">
              <div class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-circle" class="text-green-300 text-xl" />
                <span>Gratis advies</span>
              </div>
              <div class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-circle" class="text-green-300 text-xl" />
                <span>Snelle offerte</span>
              </div>
              <div class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-circle" class="text-green-300 text-xl" />
                <span>Geen verplichtingen</span>
              </div>
              <div class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-circle" class="text-green-300 text-xl" />
                <span>Subsidie-advies</span>
              </div>
            </div>
            
            <div class="hidden md:flex items-center gap-4 mt-4">
              <div class="flex -space-x-2">
                <img v-for="i in 5" :key="i" :src="`/images/testimonials/avatar-${i}.webp`" alt="Tevreden klant" class="w-10 h-10 rounded-full border-2 border-white" />
              </div>
              <div>
                <div class="flex items-center">
                  <UIcon name="i-heroicons-star" v-for="star in 5" :key="star" class="text-yellow-300" />
                </div>
                <p class="text-sm">Gebaseerd op 200+ reviews</p>
              </div>
            </div>
          </div>
          
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 md:p-8">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-6">Ontvang uw persoonlijke offerte</h2>
            
            <div v-if="quickFormSuccess" class="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg mb-6">
              <p class="text-green-600 dark:text-green-400 text-sm mt-1">
                We nemen zo snel mogelijk contact met u op.
              </p>
            </div>
            
            <UForm :state="quickForm" @submit="submitQuickForm">
              <UFormGroup label="Uw naam" name="name" required>
                <UInput v-model="quickForm.name" placeholder="Volledige naam" />
              </UFormGroup>
              
              <UFormGroup label="E-mailadres" name="email" required>
                <UInput v-model="quickForm.email" type="email" placeholder="uw@email.nl" />
              </UFormGroup>
              
              <UFormGroup label="Telefoonnummer" name="phone" required>
                <UInput v-model="quickForm.phone" placeholder="Uw telefoonnummer" />
              </UFormGroup>
              
              <UFormGroup label="Postcode" name="postalCode" required>
                <UInput v-model="quickForm.postalCode" placeholder="1234 AB" />
              </UFormGroup>
              
              <UFormGroup label="Waar bent u in geïnteresseerd?" name="interest" required>
                <USelect
                  v-model="quickForm.interest"
                  :options="[
                    { label: 'Zonnepanelen', value: 'zonnepanelen' },
                    { label: 'Thuisbatterij', value: 'thuisbatterij' },
                    { label: 'Warmtepomp', value: 'warmtepomp' },
                    { label: 'Laadpaal', value: 'laadpaal' },
                    { label: 'Compleet advies', value: 'compleet' }
                  ]"
                  placeholder="Maak een keuze"
                />
              </UFormGroup>
              
              <UFormGroup name="consent">
                <UCheckbox 
                  v-model="quickForm.consent" 
                  name="consent" 
                  required 
                  label="Ik ga akkoord met de privacyverklaring" 
                />
              </UFormGroup>
              
              <UButton type="submit" block color="primary" size="lg" class="mt-4" :loading="isSubmittingQuick">
                Offerte aanvragen
              </UButton>
            </UForm>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-12 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center">
          <div class="flex flex-col items-center text-center">
            <UIcon name="i-heroicons-users" class="text-4xl text-primary-600 dark:text-primary-400 mb-4" />
            <h3 class="text-lg font-semibold mb-2">1000+ Tevreden Klanten</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">Hoogste klanttevredenheid in de regio</p>
          </div>
          
          <div class="flex flex-col items-center text-center">
            <UIcon name="i-heroicons-sun" class="text-4xl text-primary-600 dark:text-primary-400 mb-4" />
            <h3 class="text-lg font-semibold mb-2">5000+ Installaties</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">Jarenlange ervaring en expertise</p>
          </div>
          
          <div class="flex flex-col items-center text-center">
            <UIcon name="i-heroicons-check-badge" class="text-4xl text-primary-600 dark:text-primary-400 mb-4" />
            <h3 class="text-lg font-semibold mb-2">Gecertificeerde Installateurs</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">Veilig en volgens de normen</p>
          </div>
          
          <div class="flex flex-col items-center text-center">
            <UIcon name="i-heroicons-clock" class="text-4xl text-primary-600 dark:text-primary-400 mb-4" />
            <h3 class="text-lg font-semibold mb-2">10 Jaar Garantie</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">Op installatie en materialen</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl font-bold mb-6">Hoe werkt het aanvragen van een offerte?</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Van aanvraag tot installatie, wij maken het proces eenvoudig en transparant.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div class="relative">
            <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400 font-bold text-xl">
              1
            </div>
            <h3 class="text-xl font-semibold mb-3">Vul het formulier in</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Vul het aanvraagformulier in met uw gegevens en wensen. Dit duurt slechts enkele minuten.
            </p>
            
            <div class="hidden md:block absolute top-6 left-12 w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
          </div>
          
          <div class="relative">
            <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400 font-bold text-xl">
              2
            </div>
            <h3 class="text-xl font-semibold mb-3">Ontvang uw offerte</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Binnen 24 uur ontvangt u een persoonlijke offerte op basis van uw wensen en situatie.
            </p>
            
            <div class="hidden md:block absolute top-6 left-12 w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
          </div>
          
          <div class="relative">
            <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400 font-bold text-xl">
              3
            </div>
            <h3 class="text-xl font-semibold mb-3">Persoonlijk adviesgesprek</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Na akkoord plannen we een adviesgesprek bij u thuis om alles in detail door te nemen.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl font-bold mb-6">Voordelen van zonne-energie</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Ontdek waarom steeds meer huishoudens kiezen voor zonne-energie en verduurzaming.
          </p>
        </div>
        
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="p-8 md:p-12">
              <h3 class="text-2xl font-bold mb-6">Met zonnepanelen</h3>
              
              <ul class="space-y-4">
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check-circle" class="text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p class="font-medium">Bespaar op energiekosten</p>
                    <p class="text-sm text-gray-600 dark:text-gray-300">Tot 90% lagere energierekening dankzij zelf opgewekte energie.</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check-circle" class="text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p class="font-medium">Verhoog de waarde van uw woning</p>
                    <p class="text-sm text-gray-600 dark:text-gray-300">Huizen met zonnepanelen hebben een hogere verkoopwaarde en betere energielabel.</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check-circle" class="text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p class="font-medium">Onafhankelijk van energieprijzen</p>
                    <p class="text-sm text-gray-600 dark:text-gray-300">Bescherm uzelf tegen stijgende energieprijzen door uw eigen energie op te wekken.</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check-circle" class="text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p class="font-medium">Duurzaam en milieuvriendelijk</p>
                    <p class="text-sm text-gray-600 dark:text-gray-300">Verminder uw CO2-voetafdruk en draag bij aan een betere toekomst.</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check-circle" class="text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p class="font-medium">Aantrekkelijke subsidies</p>
                    <p class="text-sm text-gray-600 dark:text-gray-300">Profiteer van BTW-teruggave en andere financiële voordelen.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div class="p-8 md:p-12 bg-gray-50 dark:bg-gray-700">
              <h3 class="text-2xl font-bold mb-6">Zonder zonnepanelen</h3>
              
              <ul class="space-y-4">
                <li class="flex items-start">
                  <UIcon name="i-heroicons-x-circle" class="text-red-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p class="font-medium">Stijgende energiekosten</p>
                    <p class="text-sm text-gray-600 dark:text-gray-300">Blijf afhankelijk van stijgende energieprijzen en tarieven.</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-x-circle" class="text-red-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p class="font-medium">Lagere woningwaarde</p>
                    <p class="text-sm text-gray-600 dark:text-gray-300">Huizen zonder duurzame energievoorzieningen worden minder waard.</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-x-circle" class="text-red-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p class="font-medium">Kwetsbaar voor prijsschommelingen</p>
                    <p class="text-sm text-gray-600 dark:text-gray-300">Volledig afhankelijk van het energiebedrijf en marktprijzen.</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-x-circle" class="text-red-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p class="font-medium">Hogere CO2-uitstoot</p>
                    <p class="text-sm text-gray-600 dark:text-gray-300">Grotere ecologische voetafdruk door gebruik van fossiele brandstoffen.</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-x-circle" class="text-red-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p class="font-medium">Gemiste subsidiekansen</p>
                    <p class="text-sm text-gray-600 dark:text-gray-300">Loop duizenden euro's aan subsidies en fiscale voordelen mis.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="text-3xl font-bold mb-6">Wat onze klanten zeggen</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Lees de ervaringen van onze tevreden klanten die al genieten van de voordelen van zonne-energie.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="i in 3" :key="i" class="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
            <div class="flex items-center gap-2 mb-4">
              <UIcon name="i-heroicons-star" v-for="star in 5" :key="star" class="text-yellow-400" />
            </div>
            
            <p class="italic text-gray-600 dark:text-gray-300 mb-6">
            </p>
            
            <div class="flex items-center gap-4">
              <UAvatar :src="`/images/testimonials/person-${i}.webp`" />
              <div>
                <h4 class="font-medium">{{ ['Jan de Boer', 'Marie Jansen', 'Peter Bakker'][i-1] }}</h4>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ ['Roermond', 'Venlo', 'Weert'][i-1] }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <UButton to="/reviews" variant="ghost" color="primary" icon="i-heroicons-arrow-right" trailing>
            Bekijk alle reviews
          </UButton>
        </div>
      </div>
    </section>
    
    <section class="py-16 bg-primary-50 dark:bg-primary-900/20">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="text-3xl font-bold mb-6">Klaar om te besparen op uw energierekening?</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Vul het formulier in en ontvang binnen 24 uur uw persoonlijke offerte. Geheel vrijblijvend.
          </p>
        </div>
        
        <div class="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <UForm :state="form" @submit="submitForm">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <UFormGroup label="Voornaam" name="firstName" required>
                <UInput v-model="form.firstName" placeholder="Uw voornaam" />
              </UFormGroup>
              
              <UFormGroup label="Achternaam" name="lastName" required>
                <UInput v-model="form.lastName" placeholder="Uw achternaam" />
              </UFormGroup>
              
              <UFormGroup label="E-mailadres" name="email" required>
                <UInput v-model="form.email" type="email" placeholder="uw@email.nl" />
              </UFormGroup>
              
              <UFormGroup label="Telefoonnummer" name="phone" required>
                <UInput v-model="form.phone" placeholder="Uw telefoonnummer" />
              </UFormGroup>
              
              <UFormGroup label="Postcode" name="postalCode" required>
                <UInput v-model="form.postalCode" placeholder="1234 AB" />
              </UFormGroup>
              
              <UFormGroup label="Huisnummer" name="houseNumber" required>
                <UInput v-model="form.houseNumber" placeholder="123" />
              </UFormGroup>
            </div>
            
            <UFormGroup label="Uw wensen" name="message">
              <UTextarea v-model="form.message" placeholder="Vertel ons meer over uw wensen of stel een vraag" rows="3" />
            </UFormGroup>
            
            <UFormGroup name="consent">
              <UCheckbox 
                v-model="form.consent" 
                name="consent" 
                required 
                label="Ik ga akkoord met de verwerking van mijn gegevens volgens de privacyverklaring" 
              />
            </UFormGroup>
            
            <UButton type="submit" block size="lg" class="mt-6" :loading="isSubmitting">
              Offerte Aanvragen
            </UButton>
            
            <p class="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
              Geen verplichtingen, geheel vrijblijvend. We reageren binnen 24 uur.
            </p>
          </UForm>
        </div>
      </div>
    </section>
    
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="text-3xl font-bold mb-6">Veelgestelde vragen over zonnepanelen</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Antwoorden op de meest gestelde vragen over zonnepanelen, installatie en offertes.
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
// Super-optimized SEO metadata
useHead({
  title: 'Gratis Zonnepanelen Offerte | Bespaar Tot 30% | Zon Optimaal',
  meta: [
    {
      name: 'description',
      content: 'Vraag direct een gratis en vrijblijvende offerte aan voor zonnepanelen. Bespaar tot 30% op uw energierekening met de hoogste kwaliteit zonnepanelen van Zon Optimaal.'
    },
    {
      name: 'keywords',
      content: 'zonnepanelen offerte, gratis offerte zonnepanelen, zonnepanelen prijzen, zonnepanelen kosten, zonnepanelen installatie, zonnepanelen Limburg, zonnepanelen Kessel, thuisbatterij, warmtepomp'
    },
    // Schema.org structured data markers for SEO
    {
      name: 'author',
      content: 'Zon Optimaal'
    },
    {
      property: 'og:title',
      content: 'Gratis Zonnepanelen Offerte | Bespaar Tot 30% | Zon Optimaal'
    },
    {
      property: 'og:description',
      content: 'Vraag direct een gratis en vrijblijvende offerte aan voor zonnepanelen. Bespaar tot 30% op uw energierekening met de hoogste kwaliteit zonnepanelen van Zon Optimaal.'
    },
    {
      property: 'og:image',
      content: 'https://zonoptimaal.nl/images/offerte-banner.jpg'
    },
    {
      property: 'og:url',
      content: 'https://zonoptimaal.nl/offerte'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Gratis Zonnepanelen Offerte | Zon Optimaal'
    },
    {
      name: 'twitter:description',
      content: 'Vraag direct een gratis en vrijblijvende offerte aan voor zonnepanelen. Bespaar tot 30% op uw energierekening.'
    },
    {
      name: 'twitter:image',
      content: 'https://zonoptimaal.nl/images/offerte-banner.jpg'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://zonoptimaal.nl/offerte'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        'name': 'Zon Optimaal',
        'image': 'https://zonoptimaal.nl/images/logo.png',
        'description': 'Specialisten in zonnepanelen en duurzame energieoplossingen voor particulieren en bedrijven.',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Molenstraat 42',
          'addressLocality': 'Kessel',
          'addressRegion': 'Limburg',
          'postalCode': '5995',
          'addressCountry': 'NL'
        },
        'telephone': '085 303 1193',
        'email': 'info@zonoptimaal.nl',
        'url': 'https://zonoptimaal.nl',
        'priceRange': '€€',
        'openingHours': 'Mo-Fr 09:00-17:00',
        'sameAs': [
          'https://www.facebook.com/zonoptimaal',
          'https://www.instagram.com/zonoptimaal'
        ]
      })
    }
  ]
})

// Quick form at the top
const quickForm = reactive({
  name: '',
  email: '',
  phone: '',
  postalCode: '',
  interest: '',
  consent: false,
  source: 'offerte-pagina-quick'
})

const isSubmittingQuick = ref(false)
const quickFormSuccess = ref(false)

const submitQuickForm = async () => {
  try {
    isSubmittingQuick.value = true
    
    // In a real app, this would call your API
    // const { error } = await useFetch('/api/leads', {
    //   method: 'POST',
    //   body: quickForm
    // })
    
    // For demo purposes, simulate success
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Show success message
    quickFormSuccess.value = true
    
    // Reset form after success
    setTimeout(() => {
      quickFormSuccess.value = false
      Object.assign(quickForm, {
        name: '',
        email: '',
        phone: '',
        postalCode: '',
        interest: '',
        consent: false
      })
    }, 5000)
    
  } catch (error) {
    console.error('Error submitting form:', error)
  } finally {
    isSubmittingQuick.value = false
  }
}

// Main detailed form at the bottom
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  postalCode: '',
  houseNumber: '',
  message: '',
  consent: false,
  source: 'offerte-pagina-main'
})

const isSubmitting = ref(false)

const submitForm = async () => {
  try {
    isSubmitting.value = true
    
    // Combine first and last name
    const fullName = `${form.firstName} ${form.lastName}`.trim()
    
    // Create lead object
    const leadData = {
      name: fullName,
      email: form.email,
      phone: form.phone,
      postal_code: form.postalCode,
      house_number: form.houseNumber,
      message: form.message || null,
      source: form.source
    }
    
    // In a real app, this would call your API
    // const { error } = await useFetch('/api/leads', {
    //   method: 'POST',
    //   body: leadData
    // })
    
    // For demo purposes, simulate success
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Navigate to thank you page
    navigateTo('/bedankt')
    
  } catch (error) {
    console.error('Error submitting form:', error)
  } finally {
    isSubmitting.value = false
  }
}

// FAQ items (extremely important for SEO)
const faqItems = [
  {
    label: 'Wat zijn de kosten van zonnepanelen?',
    content: 'De kosten van zonnepanelen variëren afhankelijk van het aantal panelen, type en kwaliteit. Voor een gemiddeld huishouden met 10 panelen ligt de prijs tussen €4.000 en €6.000 na BTW-teruggave. In uw persoonlijke offerte geven we een exacte prijsopgave op basis van uw situatie en wensen. Gemiddeld verdienen zonnepanelen zich binnen 5-7 jaar terug.'
  },
  {
    label: 'Hoeveel zonnepanelen heb ik nodig?',
    content: 'Het aantal benodigde zonnepanelen hangt af van uw energieverbruik, beschikbare dakoppervlakte en energiedoelen. Als vuistregel geldt: voor elke 1000 kWh jaarlijks verbruik heeft u ongeveer 3 zonnepanelen nodig. Een gemiddeld huishouden (3500 kWh) heeft dus ongeveer 10-12 panelen nodig. In onze offerte maken we een precieze berekening op basis van uw verbruiksgegevens.'
  },
  {
    label: 'Welke subsidies zijn er beschikbaar voor zonnepanelen?',
    content: 'Voor particulieren is de belangrijkste subsidie de BTW-teruggave van 21% op aanschaf en installatie. Daarnaast zijn er lokale subsidies in sommige gemeenten en de salderingsregeling (tot 2025). Voor bedrijven is de SDE++ subsidie beschikbaar. Ook voor thuisbatterijen en warmtepompen bestaan ISDE-subsidies. Wij helpen u graag bij het aanvragen van alle beschikbare subsidies en belastingvoordelen.'
  },
  {
    label: 'Hoe lang duurt de installatie van zonnepanelen?',
    content: 'De installatie van een gemiddeld zonnepanelensysteem (10-15 panelen) duurt meestal 1 dag. Bij grotere systemen of complexe daken kan dit uitlopen naar 2 dagen. Na ontvangst van uw akkoord op de offerte, kunnen we meestal binnen 3-6 weken de installatie inplannen, afhankelijk van het seizoen en drukte.'
  },
  {
    label: 'Wat is de terugverdientijd van zonnepanelen?',
    content: 'De gemiddelde terugverdientijd van zonnepanelen ligt tussen de 5 en 7 jaar, afhankelijk van uw energieverbruik, de oriëntatie van het dak en eventuele subsidies. Na deze periode levert het systeem pure winst op. Met een levensduur van 25-30 jaar betekent dit zo\'n 20 jaar profiteren van gratis stroom.'
  },
  {
    label: 'Zijn zonnepanelen geschikt voor elk type dak?',
    content: 'Zonnepanelen kunnen worden geïnstalleerd op vrijwel elk type dak: platte daken, schuine daken, pannendaken, golfplaten, etc. Ook de oriëntatie is belangrijk: zuid-georiënteerde daken zijn optimaal, maar oost- en westdaken zijn ook zeer geschikt. Zelfs bij een noorddak kan het in sommige gevallen rendabel zijn. Tijdens het maken van de offerte beoordelen we de geschiktheid van uw specifieke dak.'
  },
  {
    label: 'Hoe onderhoud ik mijn zonnepanelen?',
    content: 'Zonnepanelen zijn onderhoudsarm. In Nederland zorgt de regen voor een natuurlijke reiniging. Toch adviseren we om de panelen 1-2 keer per jaar te controleren op vervuiling (zoals vogelpoep of bladeren) en indien nodig schoon te maken met een zachte borstel en water. Wij bieden ook onderhoudscontracten aan waarbij we periodieke reiniging en controles verzorgen.'
  },
  {
    label: 'Kan ik zonnepanelen combineren met een thuisbatterij?',
    content: 'Ja, een thuisbatterij is een uitstekende aanvulling op uw zonnepanelensysteem. Hiermee slaat u overdag opgewekte energie op voor gebruik in de avond of nacht. Dit wordt steeds interessanter naarmate de salderingsregeling wordt afgebouwd. Wij bieden verschillende batterijsystemen aan die naadloos integreren met uw zonnepanelen.'
  }
]
</script>

