
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

// This function serves as a proxy to the main send-contact-email function
serve(async (req) => {
  // CORS setup
  if (req.method === 'OPTIONS') {
    return new Response('ok', { 
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    })
  }

  try {
    // Get the request data
    const { name, email, message, recipientEmail } = await req.json()
    
    // Forward the request to the send-contact-email function
    // Use fetch to an external API here, or just pass through to send-contact-email
    const forwardResponse = await fetch(
      `${Deno.env.get('SUPABASE_URL')}/functions/v1/send-contact-email`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Deno.env.get('SUPABASE_ANON_KEY')}`,
        },
        body: JSON.stringify({
          name,
          email,
          message,
          recipientEmail
        }),
      }
    )

    const data = await forwardResponse.json()
    
    return new Response(
      JSON.stringify(data), 
      { 
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        status: forwardResponse.status 
      }
    )
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }), 
      { 
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        status: 500 
      }
    )
  }
})
