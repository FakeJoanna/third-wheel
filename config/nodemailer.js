const nodemailer = require("nodemailer")

const sendEmail = async (mailDetails) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      // your Google Account email
      user: process.env.MAILER_USER,
      // your Google App password
      pass: process.env.MAILER_SECRET,
    },
    tls: {
      rejectUnauthorized: false,
    },
  })
  try {
    console.log("Sending your email...")
    await transporter.sendMail(mailDetails)
    console.log(`Email sent successfully to ${mailDetails.to}`)
  } catch (error) {
    console.log("Sorry, failed to send your email!")
  }
}
sendEmail({
  from: process.env.MAILER_USER,
  to: "test-to",
  subject: "Test Email via NodeJS using Nodemailer",
  text: "Hi, there...This is a test email sent via NodeJS App using Nodemailer.",
})
