<template>
  <header>
    <div class="header-container">
      <div class="logo">
        <NuxtLink to="/">
          Zon<span class="accent">Optimaal</span>
        </NuxtLink>
      </div>
      <nav>
        <NuxtLink to="/about">Over ons</NuxtLink>
        <NuxtLink to="/reviews">Reviews</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
// The header has no local script logic; it relies on global CSS
</script>
