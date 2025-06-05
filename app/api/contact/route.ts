import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Email content
    const emailContent = `
New Contact Form Submission from Manor & Associates Website

Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}

Submitted at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
    `

    // In a real application, you would integrate with an email service like:
    // - Nodemailer with SMTP
    // - SendGrid
    // - AWS SES
    // - Resend

    // For now, we'll simulate sending the email
    console.log("Email would be sent to: rohitkoktarebugatti@gmail.com")
    console.log("Email content:", emailContent)

    // Here you would implement the actual email sending logic
    // Example with a hypothetical email service:
    /*
    await emailService.send({
      to: 'rohitkoktarebugatti@gmail.com',
      subject: `New Contact Form Submission - ${name}`,
      text: emailContent,
      replyTo: email
    })
    */

    return NextResponse.json({ message: "Contact form submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
