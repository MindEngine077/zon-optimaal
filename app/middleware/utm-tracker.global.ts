export default defineNuxtRouteMiddleware((to) => {
  // Only run on client-side
  if (process.client) {
    const utmParams = {}
    
    // Get UTM parameters from URL
    const searchParams = new URLSearchParams(window.location.search)
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
    
    // Extract UTM parameters
    utmKeys.forEach(key => {
      const value = searchParams.get(key)
      if (value) {
        utmParams[key] = value
      }
    })
    
    // If UTM parameters exist, store them in localStorage for later use
    if (Object.keys(utmParams).length > 0) {
      localStorage.setItem('utm_params', JSON.stringify(utmParams))
      localStorage.setItem('utm_timestamp', new Date().toISOString())
    }
  }
})

