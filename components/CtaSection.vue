<template>
  <section class="final-cta-section">
    <div class="container">
      <div class="cta-content">
        <div class="urgency-header">
          <div class="timer-icon">⏰</div>
          <h2>Beperkte tijd: €500 extra subsidie!</h2>
          <p class="urgency-text">
            Bij bestelling voor <strong>31 augustus 2025</strong> ontvang je €500 extra subsidie 
            bovenop de reguliere voordelen.
          </p>
        </div>
        
        <div class="benefits-summary">
          <div class="benefit-item">
            <div class="benefit-icon">💰</div>
            <div class="benefit-text">
              <strong>Tot €2.500 besparing</strong>
              <span>per jaar op je energierekening</span>
            </div>
          </div>
          <div class="benefit-item">
            <div class="benefit-icon">⚡</div>
            <div class="benefit-text">
              <strong>25 jaar garantie</strong>
              <span>op rendement en prestaties</span>
            </div>
          </div>
          <div class="benefit-item">
            <div class="benefit-icon">🏆</div>
            <div class="benefit-text">
              <strong>A+ installateurs</strong>
              <span>gecertificeerd en ervaren</span>
            </div>
          </div>
        </div>
        
        <div class="cta-main">
          <h3>Start vandaag met besparen</h3>
          <p>Ontvang binnen 24 uur je gratis, vrijblijvende offerte op maat</p>
          
          <div class="cta-buttons">
            <button class="cta-primary" @click="scrollToForm">
              🎯 Gratis Offerte Aanvragen
            </button>
            <a href="tel:0123456789" class="cta-secondary">
              📞 Direct bellen: 012-345 6789
            </a>
          </div>
        </div>
        
        <div class="trust-footer">
          <div class="trust-items">
            <div class="trust-item">
              <span class="trust-icon">✅</span>
              <span>100% vrijblijvend</span>
            </div>
            <div class="trust-item">
              <span class="trust-icon">🔒</span>
              <span>Veilig & betrouwbaar</span>
            </div>
            <div class="trust-item">
              <span class="trust-icon">⚡</span>
              <span>24u respons</span>
            </div>
            <div class="trust-item">
              <span class="trust-icon">🏆</span>
              <span>4.8★ klantbeoordeling</span>
            </div>
          </div>
          
          <div class="social-proof">
            <p>
              <strong>2.847 tevreden klanten</strong> gingen je voor. 
              Vorige maand: <strong>127 nieuwe installaties</strong>
            </p>
          </div>
        </div>
      </div>
      
      <div class="background-elements">
        <div class="bg-circle bg-circle-1"></div>
        <div class="bg-circle bg-circle-2"></div>
        <div class="bg-circle bg-circle-3"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollToForm = () => {
  const element = document.getElementById('quote-form')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.final-cta-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 10;
}

.cta-content {
  text-align: center;
}

.urgency-header {
  margin-bottom: 50px;
}

.timer-icon {
  font-size: 3rem;
  margin-bottom: 20px;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.urgency-header h2 {
  font-size: 2.8rem;
  margin-bottom: 15px;
  font-weight: 800;
}

.urgency-text {
  font-size: 1.2rem;
  opacity: 0.9;
  line-height: 1.5;
}

.benefits-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 15px;
  background: rgba(255,255,255,0.1);
  padding: 20px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.2);
}

.benefit-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.benefit-text {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.benefit-text strong {
  font-size: 1.1rem;
  margin-bottom: 5px;
}

.benefit-text span {
  font-size: 0.9rem;
  opacity: 0.8;
}

.cta-main {
  margin-bottom: 50px;
}

.cta-main h3 {
  font-size: 2.2rem;
  margin-bottom: 15px;
  font-weight: 700;
}

.cta-main p {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 30px;
}

.cta-buttons {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
  margin: 0 auto;
}

.cta-primary {
  background: #FF6B35;
  color: white;
  border: none;
  padding: 20px 40px;
  font-size: 1.3rem;
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

.cta-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 15px 30px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  display: block;
}

.cta-secondary:hover {
  background: white;
  color: #667eea;
  transform: translateY(-2px);
}

.trust-footer {
  border-top: 1px solid rgba(255,255,255,0.2);
  padding-top: 40px;
}

.trust-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.trust-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 0.9rem;
}

.trust-icon {
  font-size: 1.2rem;
}

.social-proof {
  opacity: 0.8;
  font-size: 0.95rem;
}

.background-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.bg-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255,255,255,0.05);
  animation: float 6s ease-in-out infinite;
}

.bg-circle-1 {
  width: 200px;
  height: 200px;
  top: -100px;
  left: -100px;
}

.bg-circle-2 {
  width: 300px;
  height: 300px;
  top: 50%;
  right: -150px;
  animation-delay: -2s;
}

.bg-circle-3 {
  width: 150px;
  height: 150px;
  bottom: -75px;
  left: 30%;
  animation-delay: -4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@media (max-width: 768px) {
  .urgency-header h2 {
    font-size: 2.2rem;
  }
  
  .benefits-summary {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .benefit-item {
    flex-direction: column;
    text-align: center;
  }
  
  .benefit-text {
    text-align: center;
  }
  
  .trust-items {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .cta-buttons {
    gap: 15px;
  }
}
</style>
