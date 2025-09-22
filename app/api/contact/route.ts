import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Validate phone number (basic validation for Indian numbers)
    const phoneRegex = /^[+]?[0-9]{10,15}$/
    if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
      return NextResponse.json({ error: "Invalid phone number" }, { status: 400 })
    }

    // Email content for the law firm
    const emailContent = `
New Contact Form Submission - Manor & Associates Website

Client Details:
================
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
================
${message}

Submission Details:
================
Date: ${new Date().toLocaleDateString("en-IN", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "long",
      day: "numeric",
    })}
Time: ${new Date().toLocaleTimeString("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })}
IP Address: ${request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "Unknown"}
User Agent: ${request.headers.get("user-agent") || "Unknown"}

---
This email was automatically generated from the Manor & Associates website contact form.
Please respond to the client directly at: ${email}
    `

    // In production, you would integrate with an email service
    // For now, we'll simulate successful sending
    console.log("=== EMAIL WOULD BE SENT ===")
    console.log("To: rohitkoktarebugatti@gmail.com")
    console.log("Subject: New Contact Form Submission - " + name)
    console.log("Content:", emailContent)
    console.log("=== END EMAIL ===")

    // Here you would implement actual email sending
    // Example integrations:

    /*
    // Using Nodemailer with Gmail SMTP
    const nodemailer = require('nodemailer');
    
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'rohitkoktarebugatti@gmail.com',
      subject: `New Contact Form Submission - ${name}`,
      text: emailContent,
      replyTo: email
    });
    */

    /*
    // Using SendGrid
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    await sgMail.send({
      to: 'rohitkoktarebugatti@gmail.com',
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: `New Contact Form Submission - ${name}`,
      text: emailContent,
      replyTo: email
    });
    */

    /*
    // Using Resend
    const { Resend } = require('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'noreply@manorassociates.com',
      to: 'rohitkoktarebugatti@gmail.com',
      subject: `New Contact Form Submission - ${name}`,
      text: emailContent,
      replyTo: email
    });
    */

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json(
      {
        message: "Thank you for your message! We have received your inquiry and will get back to you within 24 hours.",
        success: true,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      {
        error:
          "We're sorry, but there was an error processing your request. Please try again or contact us directly at +91 9823694687.",
        success: false,
      },
      { status: 500 },
    )
  }
}

// Handle preflight requests for CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })
}
