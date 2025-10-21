export async function POST(request) {
  try {
    const { email, message, name } = await request.json();
    
    console.log('🚀 SENDING:', { name, email });

    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    // TEST SEND
    const result = await resend.emails.send({
      from: `${name} <${email}>`,
      to: 'elishakwena@gmail.com',
      replyTo: email,
      subject: `Portfolio: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,  // PLAIN TEXT BACKUP
      html: `
        <h2 style="color:#1e40af">New Message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log('✅ RESEND RESULT:', result.data);

    return Response.json({ 
      success: true, 
      message: 'Email sent! Check inbox + spam.' 
    });

  } catch (error) {
    console.error('💥 ERROR:', error);
    return Response.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}