<template>
  <div class="min-h-screen py-12 bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
    <div class="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
      <div class="text-center">
        <h1 class="text-3xl font-bold">Inloggen</h1>
        <p class="mt-2 text-gray-600 dark:text-gray-300">
          Log in op uw Zon Optimaal account
        </p>
      </div>

      <div v-if="authError" class="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 text-sm">
        {{ authError }}
      </div>

      <UForm :state="form" @submit="handleLogin">
        <UFormGroup label="Email" name="email">
          <UInput v-model="form.email" type="email" placeholder="uw@email.nl" autocomplete="email" />
        </UFormGroup>
        
        <UFormGroup label="Wachtwoord" name="password">
          <UInput v-model="form.password" type="password" placeholder="••••••••" autocomplete="current-password" />
        </UFormGroup>
        
        <div class="flex items-center justify-between mt-4">
          <div class="flex items-center">
            <UCheckbox v-model="form.remember" name="remember" label="Onthoud mij" />
          </div>
          
          <NuxtLink to="/wachtwoord-vergeten" class="text-sm text-primary-600 dark:text-primary-400 hover:underline">
            Wachtwoord vergeten?
          </NuxtLink>
        </div>
        
        <UButton type="submit" block class="mt-6" :loading="isLoading">
          Inloggen
        </UButton>
      </UForm>
      
      <div class="mt-6 text-center">
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Nog geen account? 
          <NuxtLink to="/aanmelden" class="text-primary-600 dark:text-primary-400 hover:underline font-medium">
            Aanmelden
          </NuxtLink>
        </p>
      </div>
      
      <div class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <p class="text-sm text-center text-gray-500 dark:text-gray-400 mb-4">
          Of inloggen met
        </p>
        
        <div class="grid grid-cols-2 gap-4">
          <UButton 
            variant="outline" 
            color="gray" 
            block
            icon="i-mdi-google" 
            @click="handleGoogleLogin"
          >
            Google
          </UButton>
          
          <UButton 
            variant="outline" 
            color="gray" 
            block
            icon="i-mdi-microsoft" 
            @click="handleMicrosoftLogin"
          >
            Microsoft
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSupabaseClient } from '#imports'

definePageMeta({
  layout: 'default',
  middleware: ['guest']
})

// SEO metadata
useHead({
  title: 'Inloggen - Zon Optimaal',
  meta: [
    {
      name: 'description',
      content: 'Log in op uw Zon Optimaal account om uw zonnepanelen te monitoren en projecten te beheren.'
    }
  ]
})

const form = reactive({
  email: '',
  password: '',
  remember: false
})

const isLoading = ref(false)
const authError = ref('')
const supabase = useSupabaseClient()
const router = useRouter()

const handleLogin = async () => {
  try {
    isLoading.value = true
    authError.value = ''
    
    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password
    })
    
    if (error) {
      authError.value = error.message
      return
    }
    
    // Redirect to dashboard on successful login
    router.push('/dashboard')
  } catch (error: any) {
    authError.value = error.message || 'Er is een fout opgetreden tijdens het inloggen'
  } finally {
    isLoading.value = false
  }
}

const handleGoogleLogin = async () => {
  try {
    isLoading.value = true
    authError.value = ''
    
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/confirm`
      }
    })
    
    if (error) {
      authError.value = error.message
    }
  } catch (error: any) {
    authError.value = error.message || 'Er is een fout opgetreden tijdens het inloggen met Google'
  } finally {
    isLoading.value = false
  }
}

const handleMicrosoftLogin = async () => {
  try {
    isLoading.value = true
    authError.value = ''
    
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'azure',
      options: {
        redirectTo: `${window.location.origin}/confirm`
      }
    })
    
    if (error) {
      authError.value = error.message
    }
  } catch (error: any) {
    authError.value = error.message || 'Er is een fout opgetreden tijdens het inloggen met Microsoft'
  } finally {
    isLoading.value = false
  }
}
</script>

