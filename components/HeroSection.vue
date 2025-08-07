<template>
  <section class="hero-section">
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">
          Bespaar tot <span class="highlight">€2.500</span> per jaar<br>
          met slimme zonnepanelen & thuisbatterijen
        </h1>
        <p class="hero-subtitle">
          Ontvang binnen 24 uur een gratis offerte op maat. 
          Geen verrassingen, wel garantie op 25 jaar rendement.
        </p>
        
        <div class="cta-section">
          <button class="cta-primary" @click="scrollToForm">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            Gratis Offerte in 30 seconden
          </button>
          <div class="trust-indicators">
            <span>
              <svg class="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              2.847 tevreden klanten
            </span>
            <span>
              <svg class="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              15 jaar ervaring
            </span>
            <span>
              <svg class="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              A+ gecertificeerde installateurs
            </span>
          </div>
        </div>
      </div>
      
      <div class="hero-visual">
        <div class="hero-placeholder">
          <div class="placeholder-content">
            <div class="placeholder-icon">
              <svg class="w-16 h-16 mx-auto text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 2L13.09 8.26L20 9L15 13.74L16.18 20.5L10 17L3.82 20.5L5 13.74L0 9L6.91 8.26L10 2Z"/>
              </svg>
              <svg class="w-12 h-12 mx-auto mt-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <h3>Moderne Zonnepanelen</h3>
            <p>Professionele installatie door gecertificeerde experts</p>
          </div>
        </div>
        <div class="savings-badge">
          <span class="amount">€187</span>
          <span class="period">besparing/maand</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Conversie-geoptimaliseerde hero sectie
const scrollToForm = () => {
  const element = document.getElementById('quote-form');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 0;
  position: relative;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 20px;
}

.highlight {
  background: linear-gradient(45deg, #FFD700, #FFA500);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.3rem;
  opacity: 0.9;
  margin-bottom: 40px;
  line-height: 1.5;
}

.cta-primary {
  background: #FF6B35;
  color: white;
  border: none;
  padding: 18px 40px;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.4);
}

.cta-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(255, 107, 53, 0.6);
}

.trust-indicators {
  display: flex;
  gap: 20px;
  margin-top: 20px;
  font-size: 0.9rem;
  opacity: 0.9;
}

.hero-visual {
  position: relative;
}

.hero-placeholder {
  background: rgba(255,255,255,0.1);
  border-radius: 20px;
  padding: 60px 40px;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.2);
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}

.placeholder-content h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.placeholder-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.savings-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #00D4AA;
  padding: 15px 20px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,212,170,0.4);
  z-index: 10;
}

.amount {
  display: block;
  font-size: 1.8rem;
  font-weight: 800;
  color: white;
}

.period {
  font-size: 0.8rem;
  opacity: 0.8;
  color: white;
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .trust-indicators {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
