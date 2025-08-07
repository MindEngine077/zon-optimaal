<template>
  <section class="reviews">
    <h2>Klantbeoordelingen</h2>
    <div class="grid">
      <div class="card" v-for="(review, index) in reviews" :key="index">
        <p><strong>{{ review.name }}</strong> — {{ review.date }}</p>
        <p>{{ review.text }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Review {
  name: string
  date: string
  text: string
}

const reviews: Review[] = [
  {
    name: 'Jan',
    date: '10 november 2024',
    text: 'Uitstekende service en super rendement!'
  },
  {
    name: 'Lisa',
    date: '3 januari 2025',
    text: 'Heel tevreden met de installatie en begeleiding.'
  },
  {
    name: 'Mark',
    date: '18 mei 2025',
    text: 'Professioneel team en duidelijke communicatie.'
  },
  {
    name: 'Sophie',
    date: '22 juli 2025',
    text: 'Snelle installatie, vriendelijke monteurs.'
  }
]
</script>
