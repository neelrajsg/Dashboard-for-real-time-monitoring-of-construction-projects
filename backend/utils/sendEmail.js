const nodemailer = require("nodemailer");

// Setup Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,  // Store credentials securely in environment variables
    pass: process.env.MAILTRAP_PASS,  // Store credentials securely in environment variables
  },
});

// Function to send email
const sendEmail = async ({ to, subject, text, html }) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,  // Sender's email address
      to,  // Recipient's email address
      subject,  // Subject of the email
      text,  // Plain text body (can be left empty if using HTML)
      html,  // HTML content of the email (optional)
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Email sending failed");
  }
};

module.exports = sendEmail;
