export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { to, subject, text } = req.body;

    try {
      // Simulate email sending logic (replace with actual email service like Nodemailer or Resend)
      console.log(`Sending email to: ${to}`);
      console.log(`Subject: ${subject}`);
      console.log(`Text: ${text}`);

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
