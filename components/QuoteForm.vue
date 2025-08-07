<template>
  <section id="quote-form" class="quote-form-section">
    <div class="container">
      <div class="form-header">
        <h2>Bereken direct je besparing</h2>
        <p>Vul je gegevens in en ontvang binnen 5 minuten je persoonlijke offerte</p>
      </div>
      
      <form @submit.prevent="submitForm" class="quote-form" :class="{ loading: isLoading }">
        <div class="form-steps">
          <div class="step" :class="{ active: currentStep >= 1, completed: currentStep > 1 }">
            <span class="step-number">1</span>
            <span class="step-text">Adres</span>
          </div>
          <div class="step" :class="{ active: currentStep >= 2, completed: currentStep > 2 }">
            <span class="step-number">2</span>
            <span class="step-text">Verbruik</span>
          </div>
          <div class="step" :class="{ active: currentStep >= 3 }">
            <span class="step-number">3</span>
            <span class="step-text">Contact</span>
          </div>
        </div>

        <!-- Step 1: Address -->
        <div v-if="currentStep === 1" class="form-step">
          <div class="form-group">
            <label>Postcode *</label>
            <input 
              v-model="formData.postcode" 
              type="text" 
              placeholder="1234AB"
              maxlength="7"
              @input="validatePostcode"
              required
            >
          </div>
          <div class="form-group">
            <label>Huisnummer *</label>
            <input v-model="formData.houseNumber" type="text" placeholder="123" required>
          </div>
          <button type="button" @click="nextStep" class="btn-next">
            Volgende stap →
          </button>
        </div>

        <!-- Step 2: Usage -->
        <div v-if="currentStep === 2" class="form-step">
          <div class="form-group">
            <label>Jaarlijks stroomverbruik (kWh)</label>
            <select v-model="formData.usage" required>
              <option value="">Selecteer verbruik</option>
              <option value="2500">Tot 2.500 kWh (1-2 personen)</option>
              <option value="3500">2.500 - 4.000 kWh (3-4 personen)</option>
              <option value="5000">4.000+ kWh (5+ personen)</option>
              <option value="weet_niet">Weet ik niet</option>
            </select>
          </div>
          <div class="form-group">
            <label>Type dak</label>
            <select v-model="formData.roofType" required>
              <option value="">Selecteer daktype</option>
              <option value="hellend">Hellend dak (pannen/leien)</option>
              <option value="plat">Plat dak</option>
              <option value="anders">Anders</option>
            </select>
          </div>
          <div class="form-navigation">
            <button type="button" @click="prevStep" class="btn-prev">← Terug</button>
            <button type="button" @click="nextStep" class="btn-next">Volgende stap →</button>
          </div>
        </div>

        <!-- Step 3: Contact -->
        <div v-if="currentStep === 3" class="form-step">
          <div class="form-row">
            <div class="form-group">
              <label>Voornaam *</label>
              <input v-model="formData.firstName" type="text" required>
            </div>
            <div class="form-group">
              <label>Achternaam *</label>
              <input v-model="formData.lastName" type="text" required>
            </div>
          </div>
          <div class="form-group">
            <label>E-mailadres *</label>
            <input v-model="formData.email" type="email" required>
          </div>
          <div class="form-group">
            <label>Telefoonnummer *</label>
            <input v-model="formData.phone" type="tel" required>
          </div>
          
          <div class="urgency-banner">
            ⏰ <strong>Beperkte tijd:</strong> €500 extra subsidie bij bestelling voor 31 augustus!
          </div>
          
          <div class="form-navigation">
            <button type="button" @click="prevStep" class="btn-prev">← Terug</button>
            <button type="submit" class="btn-submit" :disabled="isLoading">
              <span v-if="!isLoading">🎯 Gratis Offerte Ontvangen</span>
              <span v-else>Bezig met versturen...</span>
            </button>
          </div>
          
          <p class="privacy-notice">
            ✅ Je gegevens zijn veilig en worden niet gedeeld met derden
          </p>
        </div>

        <!-- Success Message -->
        <div v-if="showSuccess" class="success-message">
          <div class="success-icon">🎉</div>
          <h3>Bedankt voor je aanvraag!</h3>
          <p>Je ontvangt binnen 24 uur een persoonlijke offerte op je e-mailadres.</p>
          <p><strong>Verwachte besparing:</strong> €{{ calculatedSavings }}/jaar</p>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const currentStep = ref(1)
const isLoading = ref(false)
const showSuccess = ref(false)

const formData = ref({
  postcode: '',
  houseNumber: '',
  usage: '',
  roofType: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: ''
})

const calculatedSavings = computed(() => {
  const usage = parseInt(formData.value.usage) || 3500
  return Math.round(usage * 0.25) // Geschatte besparing van 25 cent per kWh
})

const nextStep = () => {
  if (currentStep.value < 3) {
    currentStep.value++
  }
}

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const validatePostcode = () => {
  // Simple Dutch postcode validation
  const postcode = formData.value.postcode.toUpperCase()
  formData.value.postcode = postcode
}

const submitForm = async () => {
  isLoading.value = true
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Show success message
    showSuccess.value = true
    
    // Track conversion (Google Analytics, Facebook Pixel, etc.)
    if (typeof window !== 'undefined') {
      // Google Analytics tracking
      if ('gtag' in window) {
        (window as any).gtag('event', 'generate_lead', {
          event_category: 'engagement',
          event_label: 'quote_form'
        })
      }
      
      // Facebook Pixel tracking  
      if ('fbq' in window) {
        (window as any).fbq('track', 'Lead')
      }
    }
    
  } catch (error) {
    console.error('Form submission error:', error)
    alert('Er is iets misgegaan. Probeer het opnieuw of neem contact met ons op.')
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.quote-form-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.form-header {
  text-align: center;
  margin-bottom: 50px;
}

.form-header h2 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 15px;
}

.form-steps {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  position: relative;
}

.form-steps::before {
  content: '';
  position: absolute;
  top: 20px;
  left: 20%;
  right: 20%;
  height: 2px;
  background: #eee;
  z-index: 1;
}

.step {
  display: flex;
  align-items: center;
  margin: 0 30px;
  color: #bbb;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
}

.step.active {
  color: #667eea;
}

.step.completed {
  color: #00D4AA;
}

.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  font-weight: bold;
  transition: all 0.3s ease;
}

.step.active .step-number {
  background: #667eea;
  color: white;
}

.step.completed .step-number {
  background: #00D4AA;
  color: white;
}

.quote-form {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.1);
  min-height: 400px;
}

.form-group {
  margin-bottom: 25px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #2c3e50;
}

input, select {
  width: 100%;
  padding: 15px;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

input:focus, select:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-navigation {
  display: flex;
  gap: 20px;
  margin-top: 30px;
}

.btn-prev, .btn-next, .btn-submit {
  padding: 15px 30px;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-prev {
  background: #6c757d;
  color: white;
}

.btn-next {
  background: #667eea;
  color: white;
  flex: 1;
}

.btn-submit {
  background: #FF6B35;
  color: white;
  flex: 1;
  font-size: 1.1rem;
}

.btn-next:hover, .btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.urgency-banner {
  background: linear-gradient(45deg, #FF6B35, #FF8E53);
  color: white;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  margin: 20px 0;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.8; }
  100% { opacity: 1; }
}

.privacy-notice {
  text-align: center;
  color: #6c757d;
  font-size: 0.9rem;
  margin-top: 20px;
}

.success-message {
  text-align: center;
  padding: 40px;
}

.success-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.success-message h3 {
  color: #00D4AA;
  font-size: 2rem;
  margin-bottom: 15px;
}

.success-message p {
  font-size: 1.1rem;
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .form-steps {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  
  .form-steps::before {
    display: none;
  }
  
  .step {
    margin: 0;
  }
  
  .form-navigation {
    flex-direction: column;
  }
}
</style>
