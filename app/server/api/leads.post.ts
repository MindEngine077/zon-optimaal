import { createError, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  try {
    // Get request body data
    const body = await readBody(event)
    
    // Validate required fields
    if (!body.name || !body.email || !body.phone) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Naam, e-mail en telefoonnummer zijn verplicht'
      })
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Ongeldig e-mailadres formaat'
      })
    }
    
    // Get IP address and user agent for better lead tracking
    const headers = event.req.headers
    const ipAddress = headers['x-forwarded-for'] || event.req.socket.remoteAddress
    const userAgent = headers['user-agent']
    
    // Get UTM parameters from body or session
    const utmParams = body.utmParams || {}
    
    // Mock successful lead creation for development
    console.log('Lead data received:', {
      name: body.name,
      email: body.email,
      phone: body.phone,
      postal_code: body.postalCode || null,
      house_number: body.houseNumber || null,
      street: body.street || null,
      city: body.city || null,
      interests: body.interests || null,
      yearly_consumption: body.yearlyConsumption || null,
      message: body.message || null,
      source: body.source || 'website',
      created_at: new Date().toISOString(),
      status: 'new',
      utm_source: utmParams.utm_source || null,
      utm_medium: utmParams.utm_medium || null,
      utm_campaign: utmParams.utm_campaign || null,
      utm_content: utmParams.utm_content || null,
      utm_term: utmParams.utm_term || null,
      ip_address: ipAddress || null,
      user_agent: userAgent || null,
      landing_page: body.landingPage || null,
      referrer: body.referrer || null,
      form_name: body.formName || 'default',
      priority: body.priority || 'normal'
    })
    
    // Create a mock lead ID
    const mockLeadId = Math.floor(Math.random() * 1000000) + 1
    
    // Log lead creation for analytics
    console.log(`New lead created: ${mockLeadId} - ${body.name} (${body.email})`)
    
    // Return success response with lead details
    return {
      success: true,
      message: 'Uw aanvraag is succesvol ontvangen',
      leadId: mockLeadId,
      nextSteps: 'Een van onze adviseurs neemt binnen 24 uur contact met u op.'
    }
    
  } catch (err: unknown) {
    console.error('Lead submission error:', err)
    
    // Return user-friendly error response
    return {
      success: false,
      message: (err as { statusMessage?: string })?.statusMessage || 'Er is een fout opgetreden bij het verwerken van uw aanvraag. Probeer het later opnieuw of neem telefonisch contact met ons op.',
      error: process.env.NODE_ENV === 'development' ? err : undefined
    }
  }
})

