import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes('@')) {
      return Response.json({ message: 'Invalid email address' }, { status: 400 });
    }

    // Configure your email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'devshreyas21@gmail.com',
        pass: 'ueluvpytkbirtebf' // Use an App Password instead of your actual password
      }
    });

    // Email content
    const mailOptions = {
      from: 'devshreyas21@gmail.com',
      to: 'info@dzignstory.com',
      subject: 'New Email Subscription',
      text: `New subscription request from: ${email}`
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return Response.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ message: 'Failed to send email', error }, { status: 500 });
  }
}
