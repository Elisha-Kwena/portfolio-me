export async function POST(request) {
  try {
    const { email, message, name } = await request.json();
    
    console.log('📧 SENDING FROM:', `${name} <${email}>`);

    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: `${name} <${email}>`,           // ← SENDER'S NAME + EMAIL
      to: 'elishakwena@gmail.com',          // ← YOUR INBOX
      replyTo: email,                       // ← REPLY GOES TO SENDER
      subject: `Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1e40af; text-align: center;">📧 New Portfolio Message</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e40af;">From: ${name}</h3>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <hr style="border: none; border-top: 1px solid #dee2e6;">
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-left: 4px solid #1e40af; margin: 10px 0; border-radius: 4px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="text-align: center; color: #6b7280; font-size: 12px;">
            Received: ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Nairobi' })}
          </p>
        </div>
      `,
    });

    console.log('✅ EMAIL SENT FROM:', `${name} <${email}>`);

    return Response.json({ 
      success: true, 
      message: 'Message sent successfully! I\'ll reply soon.' 
    });

  } catch (error) {
    console.error('🚨 EMAIL ERROR:', error.message);
    return Response.json({ 
      success: false, 
      message: 'Failed to send email. Please try again.' 
    }, { status: 500 });
  }
}