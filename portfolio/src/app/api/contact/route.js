import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { email, message, name } = await request.json();

    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: 'elishakwena@gmail.com',
        pass: process.env.EMAIL_PASSWORD, 
      },
    });

    // Email options
    const mailOptions = {
      from: 'elishakwena@gmail.com',
      to: 'elishakwena@gmail.com',
      subject: `New Contact Form Submission from ${name || 'Visitor'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">New Message Received!</h2>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>From:</strong> ${email}</p>
            ${name ? `<p><strong>Name:</strong> ${name}</p>` : ''}
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-left: 4px solid #1e40af; margin: 10px 0;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #6b7280; font-size: 14px;">
            Received on: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return Response.json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });

  } catch (error) {
    console.error('Email error:', error);
    return Response.json(
      { success: false, message: 'Failed to send email' }, 
      { status: 500 }
    );
  }
}