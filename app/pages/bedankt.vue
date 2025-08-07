<template>
  <div class="py-16 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12 text-center">
        <div class="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-8">
          <UIcon name="i-heroicons-check" class="text-4xl text-green-600 dark:text-green-400" />
        </div>
        
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
          We hebben uw gegevens ontvangen en zullen binnen 24 uur contact met u opnemen voor een persoonlijke offerte.
        </p>
        
        <div class="flex items-center justify-center mb-8">
          <div class="relative flex items-center justify-center w-full max-w-md">
            <div class="absolute w-full h-1 bg-gray-200 dark:bg-gray-700"></div>
            <div class="relative flex justify-between w-full">
              <div class="flex flex-col items-center">
                <div class="w-8 h-8 bg-green-600 dark:bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  1
                </div>
                <span class="text-xs mt-2 text-green-600 dark:text-green-400 font-medium">Aanvraag</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="w-8 h-8 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  2
                </div>
                <span class="text-xs mt-2 font-medium">Offerte</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 text-sm font-medium">
                  3
                </div>
                <span class="text-xs mt-2 text-gray-500 dark:text-gray-400">Adviesgesprek</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 text-sm font-medium">
                  4
                </div>
                <span class="text-xs mt-2 text-gray-500 dark:text-gray-400">Installatie</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8">
          <h2 class="text-xl font-semibold mb-4">Wat gebeurt er nu?</h2>
          <ol class="space-y-4 text-left">
            <li class="flex items-start">
              <span class="w-6 h-6 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 font-medium mr-3 mt-0.5 flex-shrink-0">1</span>
              <p class="text-gray-600 dark:text-gray-300">
                Binnen 24 uur neemt een van onze adviseurs telefonisch contact met u op om uw aanvraag te bespreken.
              </p>
            </li>
            <li class="flex items-start">
              <span class="w-6 h-6 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 font-medium mr-3 mt-0.5 flex-shrink-0">2</span>
              <p class="text-gray-600 dark:text-gray-300">
                U ontvangt per e-mail een persoonlijke offerte op basis van uw wensen en situatie.
              </p>
            </li>
            <li class="flex items-start">
              <span class="w-6 h-6 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 font-medium mr-3 mt-0.5 flex-shrink-0">3</span>
              <p class="text-gray-600 dark:text-gray-300">
                Na akkoord plannen we een afspraak voor een vrijblijvend adviesgesprek bij u thuis.
              </p>
            </li>
          </ol>
        </div>
        
        <div class="mt-12">
          <h2 class="text-xl font-semibold mb-6">Terwijl u wacht, ontdek meer over zonne-energie</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <NuxtLink to="/zonnepanelen-info" class="group bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg p-4 transition-colors">
              <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <UIcon name="i-heroicons-light-bulb" class="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 class="font-medium mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Zonnepanelen Gids</h3>
              <p class="text-sm text-gray-600 dark:text-gray-300">Lees onze uitgebreide gids over zonnepanelen en hun werking.</p>
            </NuxtLink>
            
            <NuxtLink to="/subsidies" class="group bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg p-4 transition-colors">
              <div class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                <UIcon name="i-heroicons-currency-euro" class="text-green-600 dark:text-green-400" />
              </div>
              <h3 class="font-medium mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Subsidie Overzicht</h3>
              <p class="text-sm text-gray-600 dark:text-gray-300">Ontdek welke subsidies en fiscale voordelen er voor u beschikbaar zijn.</p>
            </NuxtLink>
            
            <NuxtLink to="/blog" class="group bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg p-4 transition-colors">
              <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                <UIcon name="i-heroicons-document-text" class="text-purple-600 dark:text-purple-400" />
              </div>
              <h3 class="font-medium mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Onze Blog</h3>
              <p class="text-sm text-gray-600 dark:text-gray-300">Lees de laatste artikelen over duurzame energie en tips voor uw woning.</p>
            </NuxtLink>
          </div>
        </div>
        
        <div class="mt-12 p-6 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
          <h2 class="text-xl font-semibold mb-4">Bereken uw potentiële besparing</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            Vul uw huidige energieverbruik in en zie hoeveel u kunt besparen met zonnepanelen.
          </p>
          
          <div class="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <UFormGroup label="Jaarlijks verbruik (kWh)" class="flex-1">
              <UInput v-model="yearlyConsumption" type="number" placeholder="Bijv. 3500" />
            </UFormGroup>
            
            <UButton class="md:self-end" color="primary" @click="calculateSavings">
              Bereken
            </UButton>
          </div>
          
          <div v-if="savingsResult" class="mt-6 p-4 bg-white dark:bg-gray-700 rounded-lg">
            <h3 class="text-lg font-medium mb-2">Uw potentiële besparing</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Jaarlijkse besparing</p>
                <p class="text-xl font-semibold text-green-600 dark:text-green-400">€{{ savingsResult.yearly }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Na 10 jaar</p>
                <p class="text-xl font-semibold text-green-600 dark:text-green-400">€{{ savingsResult.tenYears }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Na 25 jaar</p>
                <p class="text-xl font-semibold text-green-600 dark:text-green-400">€{{ savingsResult.twentyFiveYears }}</p>
              </div>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-4">
              *Dit is een indicatie. De exacte besparing hangt af van meerdere factoren zoals dakoriëntatie, paneel type en schaduw.
            </p>
          </div>
        </div>
        
        <div class="mt-12">
          <h2 class="text-xl font-semibold mb-4">Deel uw keuze voor duurzame energie</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            Inspireer anderen om ook te kiezen voor zonne-energie en een duurzame toekomst.
          </p>
          
          <div class="flex justify-center gap-4">
            <UButton 
              icon="i-mdi-facebook" 
              color="blue" 
              variant="ghost" 
              size="lg"
              tag="a"
              target="_blank"
              href="https://www.facebook.com/sharer/sharer.php?u=https://zonoptimaal.nl"
              aria-label="Deel op Facebook"
            />
            <UButton 
              icon="i-mdi-twitter" 
              color="sky" 
              variant="ghost" 
              size="lg"
              tag="a"
              target="_blank"
              href="https://twitter.com/intent/tweet?text=Ik%20heb%20zojuist%20een%20offerte%20aangevraagd%20voor%20zonnepanelen%20bij%20Zon%20Optimaal20%23duurzameenergie%20%23zonnepanelen&url=https://zonoptimaal.nl"
              aria-label="Deel op Twitter"
            />
            <UButton 
              icon="i-mdi-linkedin" 
              color="indigo" 
              variant="ghost" 
              size="lg"
              tag="a"
              target="_blank"
              href="https://www.linkedin.com/shareArticle?mini=true&url=https://zonoptimaal.nl&title=Zonnepanelen%20van%20Zon%20Optimaal"
              aria-label="Deel op LinkedIn"
            />
            <UButton 
              icon="i-mdi-whatsapp" 
              color="green" 
              variant="ghost" 
              size="lg"
              tag="a"
              target="_blank"
              href="https://wa.me/?text=Bekijk%20Zon%20Optimaal%20voor%20zonnepanelen:%20https://zonoptimaal.nl"
              aria-label="Deel via WhatsApp"
            />
          </div>
        </div>
        
        <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <UButton to="/" variant="ghost" icon="i-heroicons-arrow-left" leading>
            Terug naar de homepagina
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// SEO metadata - noindex is used here because this is a thank-you page
// that shouldn't be indexed by search engines (prevents skipping the form)
useHead({
  title: 'Bedankt voor uw aanvraag | Zon Optimaal',
  meta: [
    {
      name: 'description',
      content: 'Bedankt voor uw offerte-aanvraag bij Zon Optimaal. We nemen binnen 24 uur contact met u op.'
    },
    {
      name: 'robots',
      content: 'noindex, nofollow'
    }
  ]
})

// Basic savings calculator
const yearlyConsumption = ref('3500')
const savingsResult = ref(null)

const calculateSavings = () => {
  const consumption = parseInt(yearlyConsumption.value) || 0
  
  if (consumption > 0) {
    // Simple calculation based on average energy price (€0.40/kWh)
    const energyPrice = 0.40
    const yearlyEuroSaving = Math.round(consumption * energyPrice * 0.8) // Assuming 80% coverage
    
    savingsResult.value = {
      yearly: yearlyEuroSaving,
      tenYears: yearlyEuroSaving * 10,
      twentyFiveYears: yearlyEuroSaving * 25
    }
  }
}
</script>

