import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { name, email, phone, message } = await request.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        await transporter.sendMail({
            from: `"Contact Form" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "New Enquiry Details",
            html: `
        <h2>Contact Form Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        });

        return NextResponse.json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error("Email send error:", error);
        return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
    }
}
