import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { name, email, phone, organisation, message } = await req.json();

    const emailBody = `
New Website Enquiry from Digital Lawmedix

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Organisation: ${organisation || 'Not provided'}

Message:
${message}
    `;

    const recipients = ['info@digitallawmedix.co.za', 'nikanasta15@gmail.com'];
    const promises = recipients.map(async (recipient) => {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        },
        body: JSON.stringify({
          from: 'Digital Lawmedix <noreply@digitallawmedix.co.za>',
          to: [recipient],
          subject: 'Website Enquiry: Digital Lawmedix',
          text: emailBody,
        }),
      });
      return res;
    });

    await Promise.all(promises);

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});
