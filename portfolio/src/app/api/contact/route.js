import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email, message, name } = await request.json();

    console.log('📧 FORM DATA:', { email, name });

    if (!process.env.RESEND_API_KEY) {
      return Response.json({ success: false, message: 'Server error' }, { status: 500 });
    }

    await resend.emails.send({
      from: 'Elisha Kwena <elishakwena@portfolio.com>',
      to: 'elishakwena@gmail.com',
      subject: `Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1e40af; text-align: center;">📧 New Portfolio Message</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">From ${name}</h3>
            <p><strong>Email:</strong> ${email}</p>
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

    console.log('✅ EMAIL SENT VIA RESEND');

    return Response.json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });

  } catch (error) {
    console.error('🚨 RESEND ERROR:', error.message);
    return Response.json({ 
      success: false, 
      message: 'Failed to send email' 
    }, { status: 500 });
  }
}