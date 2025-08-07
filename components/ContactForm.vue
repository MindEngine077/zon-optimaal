<template>
  <section class="contact-section section-centered">
    <div class="section-header">
      <h2>🚀 Gratis Adviesgesprek - Bespaar Direct op je Energierekening!</h2>
      <p class="urgency-text">
        <strong>⏰ Beperkte tijd:</strong> Ontvang binnen 24 uur een persoonlijk energieadvies ter waarde van €150,- 
        <span class="highlight">volledig gratis</span> en zonder verplichtingen!
      </p>
    </div>

    <!-- Conversion boosters -->
    <div class="conversion-boosters">
      <div class="boost-item">
        <span class="boost-icon">💰</span>
        <span>Tot €2.000,- besparing per jaar</span>
      </div>
      <div class="boost-item">
        <span class="boost-icon">⚡</span>
        <span>90% energie-onafhankelijkheid</span>
      </div>
      <div class="boost-item">
        <span class="boost-icon">📞</span>
        <span>Reactie binnen 2 uur</span>
      </div>
      <div class="boost-item">
        <span class="boost-icon">🎯</span>
        <span>100% op maat advies</span>
      </div>
    </div>

    <!-- Direct contact opties -->
    <div class="contact-emergency">
      <div class="emergency-cta">
        <h3>🔥 Direct contact? Bel nu!</h3>
        <div class="phone-options">
          <a href="tel:0850303193" class="phone-btn primary">
            📞 <strong>085 - 303 1193</strong>
            <span>Kantoor (Ma-Vr 8:00-18:00)</span>
          </a>
          <a href="tel:+31682067770" class="phone-btn mobile">
            📱 <strong>06 - 82 06 77 70</strong>
            <span>Mobiel (24/7 WhatsApp)</span>
          </a>
        </div>
        <p class="phone-subtext">💬 <strong>WhatsApp ook mogelijk!</strong> Stuur een bericht naar 06 - 82 06 77 70</p>
      </div>
    </div>

    <!-- Enhanced form -->
    <form action="https://formspree.io/f/mldeyezg" method="POST" class="contact-form conversion-form" id="contactForm">
      <input type="hidden" name="_subject" value="🚀 Nieuwe aanvraag Gratis Adviesgesprek - Zon Optimaal">
      <input type="hidden" name="_next" value="https://zon-optimaal.nl/thanks">
      <input type="hidden" name="_captcha" value="false">
      
      <div class="form-header">
        <h3>📋 Vul onderstaand formulier in voor je gratis energieadvies</h3>
        <p class="form-subtext">⏱️ Duurt slechts 2 minuten · 🔒 100% veilig & vertrouwelijk</p>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="voornaam">Voornaam *</label>
          <input type="text" id="voornaam" name="voornaam" placeholder="Je voornaam" required 
                 autocomplete="given-name" />
        </div>
        <div class="form-group">
          <label for="achternaam">Achternaam *</label>
          <input type="text" id="achternaam" name="achternaam" placeholder="Je achternaam" required 
                 autocomplete="family-name" />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="email">E-mailadres *</label>
          <input type="email" id="email" name="email" placeholder="jouw@email.nl" required 
                 autocomplete="email" />
        </div>
        <div class="form-group">
          <label for="telefoon">Telefoonnummer *</label>
          <input type="tel" id="telefoon" name="telefoon" placeholder="06 - 12 34 56 78" required 
                 autocomplete="tel" pattern="[0-9\s\-\+\(\)]{10,}" />
        </div>
      </div>

      <div class="form-group priority">
        <label for="adres">📍 Adres (voor locatie-specifiek advies) *</label>
        <input type="text" id="adres" name="adres" placeholder="Straat + huisnummer, Plaats" required
               autocomplete="address-line1" />
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="woningtype">🏠 Type woning/gebouw</label>
          <select id="woningtype" name="woningtype" required>
            <option value="">Selecteer type</option>
            <option value="eengezinswoning">Eengezinswoning</option>
            <option value="appartement">Appartement</option>
            <option value="bedrijfspand">Bedrijfspand</option>
            <option value="boerderij">Boerderij</option>
            <option value="anders">Anders</option>
          </select>
        </div>
        <div class="form-group">
          <label for="energieverbruik">⚡ Huidige energierekening per jaar</label>
          <select id="energieverbruik" name="energieverbruik" required>
            <option value="">Selecteer bedrag</option>
            <option value="0-1000">€0 - €1.000</option>
            <option value="1000-2000">€1.000 - €2.000</option>
            <option value="2000-3000">€2.000 - €3.000</option>
            <option value="3000-5000">€3.000 - €5.000</option>
            <option value="5000+">€5.000+</option>
            <option value="onbekend">Weet ik niet</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label for="interesse">🎯 Waar ben je het meest in geïnteresseerd? (meerdere keuzes mogelijk)</label>
        <div class="checkbox-group interest-grid">
          <label class="checkbox-label priority-option">
            <input type="checkbox" name="interesse" value="thuisbatterij">
            <span class="checkmark">✓</span>
            <span class="option-content">
              <strong>🔋 Thuisbatterij</strong>
              <small>Sla je zonne-energie op</small>
            </span>
          </label>
          <label class="checkbox-label priority-option">
            <input type="checkbox" name="interesse" value="zonnepanelen">
            <span class="checkmark">✓</span>
            <span class="option-content">
              <strong>☀️ Zonnepanelen</strong>
              <small>Wek je eigen stroom op</small>
            </span>
          </label>
          <label class="checkbox-label">
            <input type="checkbox" name="interesse" value="complete-oplossing">
            <span class="checkmark">✓</span>
            <span class="option-content">
              <strong>🏡 Complete Oplossing</strong>
              <small>Zonnepanelen + Batterij</small>
            </span>
          </label>
          <label class="checkbox-label">
            <input type="checkbox" name="interesse" value="energiemonitoring">
            <span class="checkmark">✓</span>
            <span class="option-content">
              <strong>📊 Energiemonitoring</strong>
              <small>Inzicht in verbruik</small>
            </span>
          </label>
        </div>
      </div>

      <div class="form-group urgency">
        <label for="timing">⏰ Wanneer wil je dit realiseren?</label>
        <select id="timing" name="timing" required>
          <option value="">Selecteer timing</option>
          <option value="zo-snel-mogelijk">🚀 Zo snel mogelijk</option>
          <option value="binnen-3-maanden">📅 Binnen 3 maanden</option>
          <option value="binnen-6-maanden">📅 Binnen 6 maanden</option>
          <option value="dit-jaar">📅 Nog dit jaar</option>
          <option value="volgend-jaar">📅 Volgend jaar</option>
          <option value="orienterend">🤔 Eerst oriënteren</option>
        </select>
      </div>

      <div class="form-group">
        <label for="bericht">💬 Vertel ons meer over je situatie (optioneel)</label>
        <textarea 
          id="bericht" 
          name="bericht" 
          rows="4" 
          placeholder="Bijvoorbeeld: dakrichting, schaduw van bomen, huidige energierekening, specifieke wensen of vragen..."
        ></textarea>
      </div>

      <div class="form-group privacy">
        <label class="checkbox-label privacy-check">
          <input type="checkbox" name="privacy" required>
          <span class="checkmark">✓</span>
          <span>
            Ik ga akkoord met het opslaan van mijn gegevens voor contact en het ontvangen van 
            informatie over energie-oplossingen van Zon Optimaal. Je kunt je altijd afmelden. *
          </span>
        </label>
      </div>

      <button type="submit" class="btn conversion-btn" id="submitBtn">
        � <strong>JA! Ik wil mijn GRATIS energieadvies (t.w.v. €150,-)</strong>
        <small>Reactie binnen 24 uur gegarandeerd</small>
      </button>

      <div class="form-guarantees">
        <div class="guarantee">
          ✅ <strong>100% Gratis & Vrijblijvend</strong>
        </div>
        <div class="guarantee">
          🔒 <strong>Veilig & Vertrouwelijk</strong>
        </div>
        <div class="guarantee">
          ⚡ <strong>Reactie binnen 24 uur</strong>
        </div>
        <div class="guarantee">
          📞 <strong>Persoonlijk Contact</strong>
        </div>
      </div>
    </form>

    <!-- Trust signals -->
    <div class="trust-signals">
      <div class="trust-item">
        <h4>🏆 Waarom kiezen voor Zon Optimaal?</h4>
        <ul>
          <li>✅ <strong>Specialist</strong> in thuisbatterijen & zonnepanelen</li>
          <li>✅ <strong>AlphaESS & Marstek</strong> gecertificeerd partner</li>
          <li>✅ <strong>10 jaar garantie</strong> op installatie & service</li>
          <li>✅ <strong>150.000+ systemen</strong> wereldwijd actief</li>
          <li>✅ <strong>KVK: 97293253</strong> - Officieel geregistreerd</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Contact form component; for production you may wish to handle form
// submissions with a serverless function or backend endpoint.
</script>
