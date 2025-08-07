<template>
  <div>
    <Header />
    <main>
      <HeroSection />
      <QuoteForm />
      <SocialProofSection />
      <BenefitsSection />
      <FaqSection />
      <CtaSection />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import HeroSection from '../components/HeroSection.vue'
import QuoteForm from '../components/QuoteForm.vue'
import SocialProofSection from '../components/SocialProofSection.vue'
import BenefitsSection from '../components/BenefitsSection.vue'
import FaqSection from '../components/FaqSection.vue'
import CtaSection from '../components/CtaSection.vue'
import { useSeoMeta } from 'nuxt/app'

// Conversie-geoptimaliseerde SEO metadata
useSeoMeta({
  title: 'Bespaar tot €2.500/jaar met Zonnepanelen | Gratis Offerte - Zon Optimaal',
  description: 'Professionele zonnepanelen installatie door A+ gecertificeerde experts. ✅ 25 jaar garantie ✅ Gratis offerte binnen 24u ✅ 2.847 tevreden klanten ✅ Tot 80% zelfvoorzienend',
  ogTitle: 'Bespaar tot €2.500/jaar met Zonnepanelen | Gratis Offerte',
  ogDescription: 'Ontvang binnen 24 uur je persoonlijke besparingsadvies. 15 jaar ervaring, A+ installateurs, 25 jaar garantie. Start vandaag met besparen!',
  ogImage: '/images/hero-solar.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Bespaar tot €2.500/jaar met Zonnepanelen',
  twitterDescription: 'Gratis offerte binnen 24u. Professionele installatie, 25 jaar garantie.',
  twitterImage: '/images/hero-solar.jpg'
})
</script>
