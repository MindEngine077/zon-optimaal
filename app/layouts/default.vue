<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <UHeader class="border-b dark:border-gray-800">
      <template #left>
        <NuxtLink to="/" class="font-bold text-xl text-primary-600 dark:text-primary-400 flex items-center space-x-2">
          <img src="/logo.svg" alt="Zon Optimaal Logo" class="h-8 w-auto" />
          <span>Zon Optimaal</span>
        </NuxtLink>
      </template>
      <template #right>
        <UButton
          to="/login"
          variant="ghost"
          label="Inloggen"
        />
        <UButton
          to="/aanmelden"
          label="Gratis Offerte"
          variant="solid"
          color="primary"
        />
        <UDropdown v-if="user" :items="userMenuItems">
          <UAvatar :src="user?.user_metadata?.avatar_url" :alt="user?.email" />
        </UDropdown>
      </template>
    </UHeader>

    <main>
      <slot />
    </main>

    <footer class="bg-gray-100 dark:bg-gray-800 py-12 mt-16">
      <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Zon Optimaal</h3>
          <p class="text-gray-600 dark:text-gray-300">Molenstraat 42, Kessel, Netherlands</p>
          <p class="text-gray-600 dark:text-gray-300">085 303 1193</p>
          <p class="text-gray-600 dark:text-gray-300">info@zonoptimaal.nl</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Diensten</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/zonnepanelen" class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">Zonnepanelen</NuxtLink></li>
            <li><NuxtLink to="/energieopslag" class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">Energieopslag</NuxtLink></li>
            <li><NuxtLink to="/verduurzaming" class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">Verduurzaming</NuxtLink></li>
            <li><NuxtLink to="/subsidies" class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">Subsidies</NuxtLink></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Over Ons</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/over-ons" class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">Over Zon Optimaal</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">Contact</NuxtLink></li>
            <li><NuxtLink to="/veelgestelde-vragen" class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">FAQ</NuxtLink></li>
            <li><NuxtLink to="/blog" class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">Blog</NuxtLink></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Volg Ons</h3>
          <div class="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <UIcon name="i-mdi-facebook" class="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <UIcon name="i-mdi-instagram" class="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <UIcon name="i-mdi-linkedin" class="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400" />
            </a>
          </div>
          
          <div class="mt-6">
            <h4 class="text-md font-semibold mb-2">Nieuwsbrief</h4>
            <div class="flex">
              <UInput placeholder="Uw e-mailadres" class="rounded-r-none" />
              <UButton label="Aanmelden" color="primary" class="rounded-l-none" />
            </div>
          </div>
        </div>
      </div>
      
      <div class="container mx-auto px-4 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-600 dark:text-gray-300 text-sm">© {{ new Date().getFullYear() }} Zon Optimaal. Alle rechten voorbehouden.</p>
          <div class="flex space-x-4 mt-4 md:mt-0">
            <NuxtLink to="/privacy-beleid" class="text-gray-600 dark:text-gray-300 text-sm hover:text-primary-600 dark:hover:text-primary-400">Privacy Beleid</NuxtLink>
            <NuxtLink to="/cookiebeleid" class="text-gray-600 dark:text-gray-300 text-sm hover:text-primary-600 dark:hover:text-primary-400">Cookiebeleid</NuxtLink>
            <NuxtLink to="/algemene-voorwaarden" class="text-gray-600 dark:text-gray-300 text-sm hover:text-primary-600 dark:hover:text-primary-400">Algemene Voorwaarden</NuxtLink>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useSupabaseUser } from '#imports'

const user = useSupabaseUser()

const userMenuItems = computed(() => [
  [
    {
      label: 'Mijn Profiel',
      icon: 'i-heroicons-user-circle',
      to: '/profiel'
    },
    {
      label: 'Mijn Projecten',
      icon: 'i-heroicons-clipboard-document-list',
      to: '/projecten'
    }
  ],
  [
    {
      label: 'Uitloggen',
      icon: 'i-heroicons-arrow-left-on-rectangle',
      click: () => { navigateTo('/api/auth/logout') }
    }
  ]
])
</script>

