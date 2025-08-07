<template>
  <div>
    <Header />
    <main>
      <ReviewList />
      <BannerSection />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ReviewList from '../components/ReviewList.vue'
import BannerSection from '../components/BannerSection.vue'
import { useSeoMeta } from 'nuxt/app'

useSeoMeta({
  title: 'Reviews | Zon Optimaal',
  description: 'Lees klantbeoordelingen over Zon Optimaal en ontdek waarom onze klanten zo tevreden zijn.',
  ogTitle: 'Reviews | Zon Optimaal',
  ogDescription: 'Lees klantbeoordelingen over Zon Optimaal en ontdek waarom onze klanten zo tevreden zijn.',
  ogImage: '/logo.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Reviews | Zon Optimaal',
  twitterDescription: 'Lees klantbeoordelingen over Zon Optimaal en ontdek waarom onze klanten zo tevreden zijn.',
  twitterImage: '/logo.png'
})
</script>
