import { createClient } from '@supabase/supabase-js'
import type { PostgrestError } from '@supabase/supabase-js'
import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  try {
    const client = await serverSupabaseClient(event)
    const body = await readBody(event)
    
    // Validate inputs
      return {
        status: 'error',
        message: 'Name and email are required'
      }
    }
    
    // Store lead in Supabase
    const { data, error } = await client
      .from('leads')
      .insert([
        { 
          name: body.name, 
          email: body.email, 
          phone: body.phone || null,
          message: body.message || null,
          source: body.source || 'website',
          service_interest: body.serviceInterest || null
        }
      ])
      .select()
    
    if (error) {
      throw error
    }
    
    return {
      status: 'success',
      data
    }
  } catch (error) {
    const pgError = error as PostgrestError
    
    return {
      status: 'error',
      message: pgError.message || 'An error occurred while saving your information',
      details: process.env.NODE_ENV === 'development' ? pgError : undefined
    }
  }
})

