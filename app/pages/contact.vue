<template>
  <div class="py-12 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <h1 class="text-4xl font-bold mb-4">Vraag uw gratis offerte aan</h1>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Wilt u weten wat zonnepanelen voor u kunnen betekenen? Vul het formulier in en ontvang binnen 24 uur een persoonlijke offerte.
        </p>
      </div>

      <div class="flex flex-col lg:flex-row gap-12">
        <div class="lg:w-2/3 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 class="text-2xl font-semibold mb-6">Uw gegevens</h2>
          
          <div v-if="formSuccess" class="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg mb-6">
            <p class="text-green-600 dark:text-green-400 text-sm mt-1">
              We hebben uw gegevens ontvangen en nemen binnen 24 uur contact met u op.
            </p>
          </div>
          
          <div v-if="formError" class="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg mb-6">
            <p class="text-red-700 dark:text-red-400 font-medium">Er is een fout opgetreden</p>
            <p class="text-red-600 dark:text-red-400 text-sm mt-1">{{ formError }}</p>
          </div>

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
              
              <UFormGroup label="Straat" name="street" class="md:col-span-2">
                <UInput v-model="form.street" placeholder="Automatisch ingevuld na postcode en huisnummer" disabled />
              </UFormGroup>
              
              <UFormGroup label="Plaats" name="city" class="md:col-span-2">
                <UInput v-model="form.city" placeholder="Automatisch ingevuld na postcode en huisnummer" disabled />
              </UFormGroup>
            </div>

            <div class="mt-8">
              <h3 class="text-lg font-medium mb-4">Waar bent u in geïnteresseerd?</h3>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <UCheckbox v-model="form.interests.solarPanels" name="interests.solarPanels" label="Zonnepanelen" />
                <UCheckbox v-model="form.interests.batteryStorage" name="interests.batteryStorage" label="Thuisbatterij" />
                <UCheckbox v-model="form.interests.heatPump" name="interests.heatPump" label="Warmtepomp" />
                <UCheckbox v-model="form.interests.evCharging" name="interests.evCharging" label="Laadpaal elektrische auto" />
              </div>
              
              <UFormGroup label="Uw energieverbruik (kWh per jaar)" name="yearlyConsumption">
                <UInput v-model="form.yearlyConsumption" placeholder="Bijv. 3500" type="number" />
              </UFormGroup>
              
              <UFormGroup label="Aanvullende wensen of vragen" name="message">
                <UTextarea v-model="form.message" placeholder="Vertel ons meer over uw wensen of stel uw vragen" rows="4" />
              </UFormGroup>
              
              <UFormGroup name="consent">
                <UCheckbox 
                  v-model="form.consent" 
                  name="consent" 
                  required 
                  label="Ik ga akkoord met de verwerking van mijn gegevens volgens de privacyverklaring" 
                />
              </UFormGroup>
            </div>
            
            <div class="mt-6">
              <UButton type="submit" size="lg" block :loading="isSubmitting" color="primary">
                Offerte Aanvragen
              </UButton>
              <p class="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
                Geen verplichtingen, geheel vrijblijvend
              </p>
            </div>
          </UForm>
        </div>
        
        <div class="lg:w-1/3 space-y-8">
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h3 class="text-xl font-semibold mb-4 flex items-center">
              <UIcon name="i-heroicons-check-badge" class="text-2xl text-primary-600 mr-2" />
              Waarom Zon Optimaal?
            </h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="text-green-600 mt-1 mr-2 flex-shrink-0" />
                <span>Gratis vrijblijvend adviesgesprek aan huis</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="text-green-600 mt-1 mr-2 flex-shrink-0" />
                <span>A-merk materialen met uitgebreide garantie</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="text-green-600 mt-1 mr-2 flex-shrink-0" />
                <span>Vakkundige installatie door gecertificeerde monteurs</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="text-green-600 mt-1 mr-2 flex-shrink-0" />
                <span>Persoonlijke begeleiding bij subsidieaanvragen</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="text-green-600 mt-1 mr-2 flex-shrink-0" />
                <span>Uitgebreide monitoring en after-service</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <div class="flex items-center gap-2 mb-2">
              <UIcon name="i-heroicons-star" v-for="star in 5" :key="star" class="text-yellow-400" />
            </div>
            <p class="italic text-gray-600 dark:text-gray-300 mb-4">
            </p>
            <div class="flex items-center gap-3">
              <UAvatar src="/images/testimonials/featured-person.webp" alt="Johan Vermeer" />
              <div>
                <h4 class="font-medium">Johan Vermeer</h4>
                <p class="text-sm text-gray-500 dark:text-gray-400">Eindhoven</p>
              </div>
            </div>
          </div>
          
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h3 class="text-xl font-semibold mb-4">Direct contact</h3>
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <UIcon name="i-heroicons-phone" class="text-primary-600 text-xl" />
                <a href="tel:0853031193" class="hover:text-primary-600 dark:hover:text-primary-400">085 303 1193</a>
              </div>
              <div class="flex items-center gap-3">
                <UIcon name="i-heroicons-envelope" class="text-primary-600 text-xl" />
                <a href="mailto:info@zonoptimaal.nl" class="hover:text-primary-600 dark:hover:text-primary-400">info@zonoptimaal.nl</a>
              </div>
              <div class="flex items-center gap-3">
                <UIcon name="i-heroicons-map-pin" class="text-primary-600 text-xl" />
                <span>Molenstraat 42, Kessel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-16">
        <h2 class="text-2xl font-bold mb-8 text-center">Veelgestelde vragen over onze offertes</h2>
        
        <div class="max-w-3xl mx-auto">
          <UAccordion :items="faqItems" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// SEO metadata - extremely important for lead generation
useHead({
  title: 'Gratis Offerte Aanvragen voor Zonnepanelen | Zon Optimaal',
  meta: [
    {
      name: 'description',
      content: 'Vraag nu uw gratis offerte aan voor zonnepanelen, thuisbatterijen of warmtepompen. Bespaar op uw energierekening met duurzame oplossingen van Zon Optimaal.'
    },
    {
      name: 'keywords',
      content: 'zonnepanelen offerte, gratis offerte zonnepanelen, zonnepanelen prijzen, zonnepanelen kosten, thuisbatterij offerte, warmtepomp offerte, zonnepanelen Kessel, zonnepanelen Limburg'
    },
    // Open Graph tags for better social sharing
    {
      property: 'og:title',
      content: 'Gratis Offerte Aanvragen voor Zonnepanelen | Zon Optimaal'
    },
    {
      property: 'og:description',
      content: 'Vraag nu uw gratis offerte aan voor zonnepanelen, thuisbatterijen of warmtepompen. Bespaar op uw energierekening met duurzame oplossingen van Zon Optimaal.'
    },
    {
      property: 'og:image',
      content: 'https://zonoptimaal.nl/images/offerte-banner.jpg'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    // Additional tags for better indexing
    {
      name: 'robots',
      content: 'index, follow'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://zonoptimaal.nl/contact'
    }
  ]
})

// Form handling
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  postalCode: '',
  houseNumber: '',
  street: '',
  city: '',
  interests: {
    solarPanels: true,
    batteryStorage: false,
    heatPump: false,
    evCharging: false
  },
  yearlyConsumption: '',
  message: '',
  consent: false,
  source: 'contact-page'
})

const isSubmitting = ref(false)
const formSuccess = ref(false)
const formError = ref('')

// Simulated postal code lookup - in production connect to an API
watch([() => form.postalCode, () => form.houseNumber], async ([newPostal, newHouse], [oldPostal, oldHouse]) => {
  if (newPostal?.length >= 6 && newHouse?.length >= 1) {
    // Simulate API call
    setTimeout(() => {
      // This is where you'd call a real postal code API
      const postalCodePattern = /^[1-9][0-9]{3} ?[a-zA-Z]{2}$/
      
      if (postalCodePattern.test(newPostal)) {
        // Simulate successful lookup
        form.street = 'Voorbeeldstraat'
        form.city = 'Voorbeeldstad'
      }
    }, 500)
  }
})

// Submit the form to Supabase
const submitForm = async () => {
  try {
    isSubmitting.value = true
    formError.value = ''
    
    // Combine first and last name
    const fullName = `${form.firstName} ${form.lastName}`.trim()
    
    // Create lead object
    const leadData = {
      name: fullName,
      email: form.email,
      phone: form.phone,
      postal_code: form.postalCode,
      house_number: form.houseNumber,
      street: form.street,
      city: form.city,
      interests: JSON.stringify(form.interests),
      yearly_consumption: form.yearlyConsumption || null,
      message: form.message || null,
      source: form.source
    }
    
    // In a real app, this would call your API
    // const { error } = await useFetch('/api/leads', {
    //   method: 'POST',
    //   body: leadData
    // })
    
    // For demo purposes, simulate success
    // if (error.value) {
    //   throw new Error(error.value.message)
    // }
    
    // Show success message
    formSuccess.value = true
    
    // Reset form after 5 seconds
    setTimeout(() => {
      formSuccess.value = false
      Object.assign(form, {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        postalCode: '',
        houseNumber: '',
        street: '',
        city: '',
        interests: {
          solarPanels: true,
          batteryStorage: false,
          heatPump: false,
          evCharging: false
        },
        yearlyConsumption: '',
        message: '',
        consent: false
      })
    }, 5000)
    
  } catch (error: any) {
    formError.value = error.message || 'Er is iets misgegaan bij het versturen van het formulier. Probeer het later opnieuw.'
  } finally {
    isSubmitting.value = false
  }
}

// FAQ items - great for SEO
const faqItems = [
  {
    label: 'Hoe snel ontvang ik een offerte?',
    content: 'Na het invullen van het formulier ontvangt u binnen 24 uur een persoonlijke offerte. Voor complexere projecten maken we graag eerst een afspraak voor een vrijblijvend adviesgesprek.'
  },
  {
    label: 'Is de offerte geheel vrijblijvend?',
    content: 'Ja, onze offertes zijn altijd geheel vrijblijvend en zonder verplichtingen. U beslist zelf of u met ons in zee wilt gaan na het ontvangen van de offerte.'
  },
  {
    label: 'Wat heb ik nodig voor een accurate offerte?',
    content: 'Voor de meest nauwkeurige offerte is het handig als u uw jaarlijkse energieverbruik (kWh) weet en informatie heeft over de afmetingen en oriëntatie van uw dak. Maar ook zonder deze gegevens kunnen we een goede indicatie geven.'
  },
  {
    label: 'Komen jullie ook bij mij thuis voor advies?',
    content: 'Absoluut! Na de eerste offerte plannen we graag een gratis adviesgesprek bij u thuis in. Tijdens dit gesprek bekijken we uw specifieke situatie en maken we een definitief voorstel op maat.'
  },
  {
    label: 'Welke gegevens hebben jullie van mij nodig?',
    content: 'Voor een basisofferte hebben we uw naam, contactgegevens en adres nodig. Voor een gedetailleerde offerte is informatie over uw energieverbruik, daktype en specifieke wensen nuttig.'
  },
  {
    label: 'Kan ik subsidie krijgen voor zonnepanelen of andere duurzame oplossingen?',
    content: 'Ja, er zijn verschillende subsidies beschikbaar zoals de BTW-teruggave voor zonnepanelen en de ISDE-subsidie voor warmtepompen en thuisbatterijen. In onze offerte nemen we deze mogelijkheden mee en we helpen u graag bij de aanvraag.'
  }
]
</script>

