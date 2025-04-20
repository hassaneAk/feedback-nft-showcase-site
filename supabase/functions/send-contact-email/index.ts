
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

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
    const { name, email, message, recipientEmail } = await req.json()

    // Create Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Send email using Supabase's Email service
    const { error } = await supabase.functions.invoke('send-email', {
      body: {
        from: 'noreply@nfts.feedback',
        to: recipientEmail,
        subject: `New Contact Form Submission from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          
          Message:
          ${message}
        `
      }
    })

    if (error) throw error

    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }), 
      { 
        headers: { 'Content-Type': 'application/json' },
        status: 200 
      }
    )
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }), 
      { 
        headers: { 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
})
