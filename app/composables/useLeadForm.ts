import { useToast } from '@nuxt/ui'

export const useLeadForm = (formSource = 'general') => {
  const toast = useToast()
  
  // Form state
  const form = reactive({
    name: '',
    email: '',
    phone: '',
    postalCode: '',
    houseNumber: '',
    street: '',
    city: '',
    interests: {},
    yearlyConsumption: '',
    message: '',
    consent: false,
    source: formSource
  })
  
  // Form processing state
  const isSubmitting = ref(false)
  const formSuccess = ref(false)
  const formError = ref('')
  
  // Get UTM parameters from localStorage if available
  const getUtmParams = () => {
    if (process.client) {
      try {
        const utmParamsString = localStorage.getItem('utm_params')
        if (utmParamsString) {
          return JSON.parse(utmParamsString)
        }
      } catch (error) {
        console.error('Error parsing UTM params:', error)
      }
    }
    return {}
  }
  
  // Form submission handler
  const submitForm = async (redirectUrl = '/bedankt') => {
    try {
      isSubmitting.value = true
      formError.value = ''
      
      // Get UTM parameters
      const utmParams = getUtmParams()
      
      // Create lead data object
      const leadData = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        postalCode: form.postalCode || null,
        houseNumber: form.houseNumber || null,
        street: form.street || null,
        city: form.city || null,
        interests: typeof form.interests === 'object' ? JSON.stringify(form.interests) : null,
        yearlyConsumption: form.yearlyConsumption || null,
        message: form.message || null,
        source: form.source,
        utmSource: utmParams.utm_source || null,
        utmMedium: utmParams.utm_medium || null,
        utmCampaign: utmParams.utm_campaign || null
      }
      
      // Submit form to API
      const { data } = await useFetch('/api/leads', {
        method: 'POST',
        body: leadData
      })
      
      if (data.value?.success) {
        // Show success message if not redirecting
          formSuccess.value = true
          toast.add({
            title: 'Bedankt!',
            description: 'Uw aanvraag is succesvol ontvangen. We nemen zo snel mogelijk contact met u op.',
            color: 'green'
          })
          
          // Reset form after success
          Object.keys(form).forEach(key => {
            if (key !== 'source' && key !== 'consent') {
              if (typeof form[key] === 'object') {
                form[key] = {}
              } else {
                form[key] = ''
              }
            }
          })
          form.consent = false
        } else {
          // Redirect to thank you page
          navigateTo(redirectUrl)
        }
      } else {
        // Show error message
        formError.value = data.value?.message || 'Er is een fout opgetreden bij het versturen van het formulier'
        toast.add({
          title: 'Fout',
          description: formError.value,
          color: 'red'
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      formError.value = 'Er is een fout opgetreden bij het versturen van het formulier'
      toast.add({
        title: 'Fout',
        description: formError.value,
        color: 'red'
      })
    } finally {
      isSubmitting.value = false
    }
  }
  
  // Reset form
  const resetForm = () => {
    Object.keys(form).forEach(key => {
      if (key !== 'source' && key !== 'consent') {
        if (typeof form[key] === 'object') {
          form[key] = {}
        } else {
          form[key] = ''
        }
      }
    })
    form.consent = false
    formSuccess.value = false
    formError.value = ''
  }
  
  return {
    form,
    isSubmitting,
    formSuccess,
    formError,
    submitForm,
    resetForm
  }
}

