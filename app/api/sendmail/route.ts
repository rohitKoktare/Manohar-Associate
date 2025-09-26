import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import path from "path";
import { readFile } from "fs/promises";

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    const templatePath = path.join(
      process.cwd(),
      "app",
      "api",
      "sendmail",
      "preview.html"
    );
    let htmlTemplate = await readFile(templatePath, "utf-8");

    htmlTemplate = htmlTemplate
      .replace(/{{name}}/g, name)
      .replace(/{{email}}/g, email)
      .replace(/{{phone}}/g, phone)
      .replace(/{{message}}/g, message);

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
      html: htmlTemplate,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
