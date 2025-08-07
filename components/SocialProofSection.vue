<template>
  <section class="social-proof-section">
    <div class="container">
      <div class="section-header">
        <h2>Wat onze klanten zeggen</h2>
        <div class="trust-score">
          <div class="stars">⭐⭐⭐⭐⭐</div>
          <span class="score">4.8/5 sterren</span>
          <span class="reviews-count">(2.847 reviews)</span>
        </div>
      </div>
      
      <div class="testimonials-grid">
        <div class="testimonial">
          <div class="testimonial-content">
            <div class="quote-icon">"</div>
            <p>
              "Na 6 maanden besparen we al €150 per maand op onze energierekening. 
              De installatie was perfect en de service uitstekend!"
            </p>
          </div>
          <div class="testimonial-author">
            <div class="author-info">
              <strong>Familie van der Berg</strong>
              <span>Amsterdam</span>
            </div>
            <div class="savings-badge">€150/maand bespaard</div>
          </div>
        </div>
        
        <div class="testimonial">
          <div class="testimonial-content">
            <div class="quote-icon">"</div>
            <p>
              "Zon Optimaal heeft ons perfect geadviseerd. We zijn nu 80% zelfvoorzienend 
              met onze eigen zonnepanelen en thuisbatterij."
            </p>
          </div>
          <div class="testimonial-author">
            <div class="author-info">
              <strong>Mark & Sandra</strong>
              <span>Utrecht</span>
            </div>
            <div class="savings-badge">80% zelfvoorzienend</div>
          </div>
        </div>
        
        <div class="testimonial">
          <div class="testimonial-content">
            <div class="quote-icon">"</div>
            <p>
              "Professioneel advies, snelle installatie en nu al 2 jaar probleemloos. 
              Onze stroomrekening is met 70% gedaald!"
            </p>
          </div>
          <div class="testimonial-author">
            <div class="author-info">
              <strong>Jan Pietersen</strong>
              <span>Rotterdam</span>
            </div>
            <div class="savings-badge">70% minder kosten</div>
          </div>
        </div>
      </div>
      
      <div class="certifications">
        <h3>Gecertificeerd & betrouwbaar</h3>
        <div class="cert-logos">
          <div class="cert-item">
            <div class="cert-logo">🏆</div>
            <span>A+ Installateur</span>
          </div>
          <div class="cert-item">
            <div class="cert-logo">✅</div>
            <span>25 jaar garantie</span>
          </div>
          <div class="cert-item">
            <div class="cert-logo">🔒</div>
            <span>Verzekerd & erkend</span>
          </div>
          <div class="cert-item">
            <div class="cert-logo">📞</div>
            <span>24/7 support</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Social proof sectie voor conversie-optimalisatie
</script>

<style scoped>
.social-proof-section {
  padding: 80px 0;
  background: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 20px;
}

.trust-score {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.stars {
  font-size: 1.5rem;
}

.score {
  font-size: 1.2rem;
  font-weight: 700;
  color: #667eea;
}

.reviews-count {
  color: #6c757d;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.testimonial {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 15px;
  position: relative;
  transition: transform 0.3s ease;
  border-left: 4px solid #667eea;
}

.testimonial:hover {
  transform: translateY(-5px);
}

.testimonial-content {
  margin-bottom: 20px;
}

.quote-icon {
  font-size: 3rem;
  color: #667eea;
  opacity: 0.3;
  margin-bottom: 15px;
}

.testimonial p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #2c3e50;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.author-info strong {
  display: block;
  color: #2c3e50;
  font-weight: 700;
}

.author-info span {
  color: #6c757d;
  font-size: 0.9rem;
}

.savings-badge {
  background: #00D4AA;
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.certifications {
  text-align: center;
  padding: 40px 0;
  background: #f8f9fa;
  border-radius: 15px;
}

.certifications h3 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 30px;
}

.cert-logos {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.cert-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.cert-logo {
  width: 60px;
  height: 60px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.cert-item span {
  font-weight: 600;
  color: #2c3e50;
  text-align: center;
}

@media (max-width: 768px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  
  .testimonial-author {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  
  .cert-logos {
    gap: 20px;
  }
  
  .cert-item {
    min-width: 120px;
  }
}
</style>
