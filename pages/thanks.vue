<template>
  <div>
    <Header />
    <main class="thanks-page">
      <section class="thanks-hero">
        <div class="container">
          <div class="success-animation">
            <div class="checkmark-circle">
              <div class="checkmark">✓</div>
            </div>
          </div>
          
          <h1 class="thanks-title">Bedankt voor je aanvraag!</h1>
          <p class="thanks-subtitle">
            Je gratis offerte wordt nu samengesteld door onze experts
          </p>
          
          <div class="next-steps">
            <div class="step-item">
              <div class="step-number">1</div>
              <div class="step-content">
                <h3>Binnen 2 uur</h3>
                <p>Je ontvangt een bevestigingsmail met je aanvraaggegevens</p>
              </div>
            </div>
            
            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-content">
                <h3>Binnen 24 uur</h3>
                <p>Een expert neemt contact met je op voor je persoonlijke offerte</p>
              </div>
            </div>
            
            <div class="step-item">
              <div class="step-number">3</div>
              <div class="step-content">
                <h3>Gratis advies</h3>
                <p>Op locatie bekijken we samen de mogelijkheden voor jouw situatie</p>
              </div>
            </div>
          </div>
          
          <div class="contact-info">
            <h3>Vragen? We helpen je graag!</h3>
            <div class="contact-options">
              <a href="tel:0123456789" class="contact-button">
                📞 Direct bellen: 012-345 6789
              </a>
              <a href="mailto:info@zon-optimaal.nl" class="contact-button">
                ✉️ E-mail: info@zon-optimaal.nl
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section class="thanks-benefits">
        <div class="container">
          <h2>Wat je kunt verwachten</h2>
          <div class="benefits-grid">
            <div class="benefit-card">
              <div class="benefit-icon">🎯</div>
              <h3>Persoonlijk advies</h3>
              <p>Geen standaard oplossing, maar maatwerk voor jouw situatie</p>
            </div>
            
            <div class="benefit-card">
              <div class="benefit-icon">📊</div>
              <h3>Exacte berekening</h3>
              <p>Precieze besparing en terugverdientijd voor jouw woning</p>
            </div>
            
            <div class="benefit-card">
              <div class="benefit-icon">🏆</div>
              <h3>A+ kwaliteit</h3>
              <p>Alleen de beste panelen en gecertificeerde installateurs</p>
            </div>
            
            <div class="benefit-card">
              <div class="benefit-icon">🔒</div>
              <h3>25 jaar garantie</h3>
              <p>Volledige zekerheid op rendement en prestaties</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { useSeoMeta } from 'nuxt/app'

useSeoMeta({
  title: 'Bedankt voor je aanvraag | Zon Optimaal',
  description: 'Bedankt voor je interesse in zonnepanelen. Je ontvangt binnen 24 uur je persoonlijke offerte.',
  robots: 'noindex, nofollow' // Don't index thank you pages
})
</script>

<style scoped>
.thanks-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.thanks-hero {
  padding: 100px 0 80px;
  color: white;
  text-align: center;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.success-animation {
  margin-bottom: 40px;
}

.checkmark-circle {
  width: 120px;
  height: 120px;
  background: #00D4AA;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  animation: scaleIn 0.6s ease-out;
  box-shadow: 0 0 50px rgba(0, 212, 170, 0.4);
}

.checkmark {
  font-size: 3rem;
  color: white;
  font-weight: bold;
  animation: fadeIn 0.8s ease-out 0.3s both;
}

@keyframes scaleIn {
  0% { transform: scale(0); }
  100% { transform: scale(1); }
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.thanks-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 20px;
  animation: slideUp 0.6s ease-out 0.5s both;
}

.thanks-subtitle {
  font-size: 1.3rem;
  opacity: 0.9;
  margin-bottom: 60px;
  animation: slideUp 0.6s ease-out 0.7s both;
}

@keyframes slideUp {
  0% { 
    opacity: 0;
    transform: translateY(30px);
  }
  100% { 
    opacity: 1;
    transform: translateY(0);
  }
}

.next-steps {
  margin-bottom: 60px;
}

.step-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 30px;
  text-align: left;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.step-number {
  width: 50px;
  height: 50px;
  background: rgba(255,255,255,0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  flex-shrink: 0;
  border: 2px solid rgba(255,255,255,0.3);
}

.step-content h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.step-content p {
  opacity: 0.9;
  line-height: 1.5;
}

.contact-info {
  background: rgba(255,255,255,0.1);
  padding: 40px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.2);
}

.contact-info h3 {
  font-size: 1.5rem;
  margin-bottom: 25px;
}

.contact-options {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.contact-button {
  background: rgba(255,255,255,0.2);
  color: white;
  padding: 15px 30px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 1px solid rgba(255,255,255,0.3);
}

.contact-button:hover {
  background: rgba(255,255,255,0.3);
  transform: translateY(-2px);
}

.thanks-benefits {
  padding: 80px 0;
  background: white;
}

.thanks-benefits h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 60px;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.benefit-card {
  text-align: center;
  padding: 40px 30px;
  border-radius: 15px;
  background: #f8f9fa;
  transition: transform 0.3s ease;
}

.benefit-card:hover {
  transform: translateY(-5px);
}

.benefit-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.benefit-card h3 {
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 15px;
}

.benefit-card p {
  color: #6c757d;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .thanks-title {
    font-size: 2.2rem;
  }
  
  .step-item {
    text-align: center;
    flex-direction: column;
  }
  
  .contact-options {
    flex-direction: column;
    align-items: center;
  }
  
  .contact-button {
    width: 250px;
    text-align: center;
  }
}
</style>
