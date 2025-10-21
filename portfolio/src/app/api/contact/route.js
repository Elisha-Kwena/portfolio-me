const nodemailer = require('nodemailer');

export async function POST(request) {
  try {
    const { email, message, name } = await request.json();
    
    console.log('📧 FORM DATA:', { email, name, message: message.substring(0, 50) + '...' });

    // CHECK ENV
    if (!process.env.EMAIL_PASSWORD) {
      console.error('❌ EMAIL_PASSWORD MISSING');
      return Response.json({ success: false, message: 'Server error' }, { status: 500 });
    }

    // CREATE TRANSPORTER - FIXED SYNTAX
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: 'elishakwena@gmail.com',
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    console.log('🔗 SMTP Setup Complete');

    // VERIFY CONNECTION
    await transporter.verify();
    console.log('✅ SMTP Connected Successfully');

    // SEND EMAIL
    await transporter.sendMail({
      from: '"Elisha Kwena" <elishakwena@gmail.com>',
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

    console.log('✅ EMAIL SENT SUCCESSFULLY');

    return Response.json({ 
      success: true, 
      message: 'Message sent successfully! Check your email.' 
    });

  } catch (error) {
    console.error('🚨 DETAILED ERROR:', {
      message: error.message,
      code: error.code,
      response: error.response
    });

    return Response.json({ 
      success: false, 
      message: 'Failed to send email. Please try again.' 
    }, { status: 500 });
  }
}