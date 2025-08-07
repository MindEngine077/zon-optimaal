<template>
  <div>
    <Header />
    <main>
      <MissionSection />
      <VisionSection />
      <CoreValuesSection />
      <TeamSection />
      <BannerSection />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import MissionSection from '../components/MissionSection.vue'
import VisionSection from '../components/VisionSection.vue'
import CoreValuesSection from '../components/CoreValuesSection.vue'
import TeamSection from '../components/TeamSection.vue'
import BannerSection from '../components/BannerSection.vue'
import { useSeoMeta } from 'nuxt/app'

useSeoMeta({
  title: 'Over ons | Zon Optimaal',
  description: 'Lees meer over Zon Optimaal – onze missie, visie, kernwaarden en het team achter jouw zonne‑energie‑oplossing.',
  ogTitle: 'Over ons | Zon Optimaal',
  ogDescription: 'Ontdek onze missie, visie, kernwaarden en het team achter Zon Optimaal.',
  ogImage: '/logo.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Over ons | Zon Optimaal',
  twitterDescription: 'Ontdek onze missie, visie, kernwaarden en het team achter Zon Optimaal.',
  twitterImage: '/logo.png'
})
</script>
