// Import required dependencies
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { firstName, lastName, email } = req.body

      // Load environment variables (you may need to set these in your environment)
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.NODEMAILER_EMAIL,
          pass: process.env.NODEMAILER_PW,
        },
      })

      // Compose welcome email
      const mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: email, // Send the welcome email to the new user's email address
        subject: 'Welcome to Quality United Writers',
        html: `
          <html>
          <body>
            <h1>Welcome to Quality United Writers!</h1>
            <p>Dear ${firstName} ${lastName},</p>
            <p>Thank you for joining Quality United Writers, your premier platform for academic research and writing assistance. We're delighted to have you as part of our academic community, and we want to express our appreciation for choosing <a href="https://www.qualityunitedwriters.com">Quality United Writers</a>.</p>

            <!-- Our Services -->
            <h2>Our Services:</h2>
            <ul>
              <li>Access a team of expert academic writers for all your research and writing needs.</li>
              <li>Receive personalized assistance in achieving your academic goals and project excellence.</li>
              <li>Explore a wide range of academic services tailored to your requirements.</li>
              <li>Benefit from a platform committed to the quality and success of your academic projects.</li>
            </ul>

            <!-- Additional Information -->
            <h2>Additional Information:</h2>
            <ul>
              <li>Discover tips and strategies for academic success on our <a href="https://www.qualityunitedwriters.com/blog">blog</a>.</li>
              <li>Feel free to reach out to our friendly and knowledgeable support team for any questions or assistance.</li>
            </ul>

            <p>Ready to get started? <a href="https://www.qualityunitedwriters.com/signup">Create your account</a>, explore our services, and embark on a journey to academic excellence with Quality United Writers.</p>
            <p>Once again, thank you for choosing Quality United Writers. We are dedicated to helping you achieve your academic goals and providing top-quality solutions for your research and projects.</p>

            <p>Best regards,<br>The Quality United Writers Team</p>
          </body>
          </html>
        `,
      }

      // Send the welcome email
      await transporter.sendMail(mailOptions)

      res.status(200).json({ message: 'Welcome email sent successfully!' })
    } catch (error) {
      console.error(error)
      res
        .status(500)
        .json({ error: 'An error occurred while sending the welcome email.' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' })
  }
}
