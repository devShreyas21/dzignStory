import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, organization, email, contact, website, selectedService } = body;

    // Configure your email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',  // or any email service you prefer
      auth: {
        user: 'devshreyas21@gmail.com',
        pass: 'ueluvpytkbirtebf'  // For Gmail, you may need an "App Password"
      }
    });

    // Email content
    const mailOptions = {
      from: 'devshreyas21@gmail.com',
      to: 'info@dzignstory.com',
      subject: 'New Inquiry from dzignstory.com',
      text: `
        Name: ${name}
        Organization: ${organization}
        Email: ${email}
        Contact: ${contact}
        Website: ${website}
        Interested Service: ${selectedService}
      `
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return Response.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ message: 'Failed to send email', error }, { status: 500 });
  }
}
