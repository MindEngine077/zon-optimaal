<template>
  <section class="faq-section">
    <div class="container">
      <div class="section-header">
        <h2>Veelgestelde vragen</h2>
        <p>Alle antwoorden op je vragen over zonnepanelen en thuisbatterijen</p>
      </div>
      
      <div class="faq-grid">
        <div class="faq-list">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index" 
            class="faq-item"
            :class="{ active: activeIndex === index }"
          >
            <div class="faq-question" @click="toggleFaq(index)">
              <h3>{{ faq.question }}</h3>
              <div class="faq-icon">{{ activeIndex === index ? '−' : '+' }}</div>
            </div>
            <div class="faq-answer" v-show="activeIndex === index">
              <div class="faq-answer-content">
                <p v-html="faq.answer"></p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="faq-cta">
          <div class="cta-card">
            <h3>Nog vragen?</h3>
            <p>
              Onze experts helpen je graag verder. 
              Bel direct of vraag een gratis adviesgesprek aan.
            </p>
            <div class="contact-options">
              <a href="tel:0123456789" class="contact-button phone">
                📞 Direct bellen
              </a>
              <button @click="scrollToForm" class="contact-button form">
                💬 Gratis advies
              </button>
            </div>
            <div class="trust-indicators">
              <div class="trust-item">
                <strong>Gratis advies</strong>
                <span>Geen verplichtingen</span>
              </div>
              <div class="trust-item">
                <strong>24u respons</strong>
                <span>Snelle service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref<number | null>(null)

const faqs = ref([
  {
    question: "Hoeveel kan ik besparen met zonnepanelen?",
    answer: "Gemiddeld bespaart een Nederlands huishouden <strong>€150-€200 per maand</strong> op de energierekening. De exacte besparing hangt af van je verbruik, dakoriëntatie en het aantal panelen. Met onze gratis berekening krijg je binnen 5 minuten inzicht in jouw mogelijke besparing."
  },
  {
    question: "Hoe lang duurt de terugverdientijd?",
    answer: "Bij de huidige energieprijzen verdienen zonnepanelen zich terug binnen <strong>6-8 jaar</strong>. Daarna profiteer je nog 17+ jaar van gratis energie. Met een thuisbatterij verkort je de terugverdientijd naar 5-7 jaar door optimaal zelfverbruik."
  },
  {
    question: "Wat kost een complete zonnepanelen installatie?",
    answer: "Een complete installatie kost gemiddeld <strong>€8.000-€15.000</strong> afhankelijk van je dak en wensen. Dit lijkt veel, maar door de besparing betaalt het systeem zichzelf terug. Bovendien zijn er nog subsidiemogelijkheden en kun je spreiden over maximaal 120 maanden."
  },
  {
    question: "Hoe lang gaan zonnepanelen mee?",
    answer: "Moderne zonnepanelen gaan <strong>25-30 jaar</strong> mee en behouden na 25 jaar nog 80% van hun oorspronkelijke capaciteit. Wij geven 25 jaar productgarantie én 10 jaar installatiegarantie voor volledige zekerheid."
  },
  {
    question: "Zijn zonnepanelen geschikt voor mijn dak?",
    answer: "De meeste daken zijn geschikt! Belangrijkste factoren zijn: <br>• Dakoriëntatie (Zuid, Oost, West werken goed)<br>• Minimaal schaduw<br>• Dak in goede staat<br>• Voldoende ruimte (minimaal 15m²)<br><br>Onze experts bekijken gratis jouw situatie en adviseren de beste oplossing."
  },
  {
    question: "Wat is het voordeel van een thuisbatterij?",
    answer: "Een thuisbatterij verhoogt je zelfverbruik van 30% naar <strong>80%</strong>. Voordelen:<br>• Energie opslaan voor 's avonds/nachts<br>• Minder afhankelijk van het stroomnet<br>• Altijd stroom bij stroomuitval<br>• Maximale besparing op je energierekening<br>• Klaar voor de toekomst (dynamische tarieven)"
  },
  {
    question: "Regelen jullie alle vergunningen?",
    answer: "Ja, wij regelen alles! Van aanvraag tot installatie:<br>• Vergunningen bij gemeente<br>• Aanmelding bij netbeheerder<br>• Subsidieaanvragen<br>• Verzekeringen informeren<br>• Garantieregistraties<br><br>Jij hoeft je nergens zorgen over te maken."
  },
  {
    question: "Kan ik mijn zonnepanelen monitoren?",
    answer: "Ja! Je krijgt toegang tot onze slimme monitoring app waar je real-time kunt zien:<br>• Hoeveel energie je opwekt<br>• Wat je verbruikt<br>• Hoeveel je bespaart<br>• Status van alle componenten<br><br>Plus automatische meldingen bij onderhoud of problemen."
  }
])

const toggleFaq = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const scrollToForm = () => {
  const element = document.getElementById('quote-form')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.faq-section {
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

.section-header p {
  font-size: 1.2rem;
  color: #6c757d;
}

.faq-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  align-items: start;
}

.faq-item {
  border: 2px solid #f1f1f1;
  border-radius: 15px;
  margin-bottom: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item.active {
  border-color: #667eea;
  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.1);
}

.faq-question {
  padding: 25px 30px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fa;
  transition: all 0.3s ease;
}

.faq-item.active .faq-question {
  background: #667eea;
  color: white;
}

.faq-question h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  flex: 1;
}

.faq-icon {
  font-size: 1.5rem;
  font-weight: bold;
  width: 30px;
  text-align: center;
  transition: transform 0.3s ease;
}

.faq-item.active .faq-icon {
  transform: rotate(180deg);
}

.faq-answer {
  background: white;
  overflow: hidden;
}

.faq-answer-content {
  padding: 30px;
  border-top: 1px solid #eee;
}

.faq-answer p {
  margin: 0;
  line-height: 1.6;
  color: #2c3e50;
}

.faq-cta {
  position: sticky;
  top: 100px;
}

.cta-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 40px 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
}

.cta-card h3 {
  font-size: 1.8rem;
  margin-bottom: 15px;
}

.cta-card p {
  opacity: 0.9;
  line-height: 1.6;
  margin-bottom: 30px;
}

.contact-options {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
}

.contact-button {
  padding: 15px 25px;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: block;
}

.contact-button.phone {
  background: #00D4AA;
  color: white;
}

.contact-button.form {
  background: white;
  color: #667eea;
}

.contact-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
}

.trust-indicators {
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.2);
}

.trust-item {
  text-align: center;
}

.trust-item strong {
  display: block;
  font-size: 0.9rem;
}

.trust-item span {
  font-size: 0.8rem;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .faq-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .faq-question {
    padding: 20px;
  }
  
  .faq-answer-content {
    padding: 25px 20px;
  }
  
  .faq-cta {
    position: static;
  }
  
  .trust-indicators {
    flex-direction: column;
    gap: 15px;
  }
}
</style>
