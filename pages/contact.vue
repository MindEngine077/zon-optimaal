<template>
  <div>
    <Header />
    <main>
      <ContactForm />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ContactForm from '../components/ContactForm.vue'
import { useSeoMeta } from 'nuxt/app'

useSeoMeta({
  title: 'Contact | Zon Optimaal',
  description: 'Neem contact op met Zon Optimaal voor een vrijblijvende offerte of advies over zonne‑energie.',
  ogTitle: 'Contact | Zon Optimaal',
  ogDescription: 'Neem contact op met Zon Optimaal voor een vrijblijvende offerte of advies over zonne‑energie.',
  ogImage: '/logo.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Contact | Zon Optimaal',
  twitterDescription: 'Neem contact op met Zon Optimaal voor een vrijblijvende offerte or advies over zonne‑energie.',
  twitterImage: '/logo.png'
})
</script>
