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
                // Send to user
                await transporter.sendMail({
                        from: `"Contact Form" <${process.env.EMAIL_USER}>`,
                        to: email,
                        subject: "New Enquiry Details",
                        html: `
            <div style="max-width:520px;margin:0 auto;background:#fff;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.07);font-family:sans-serif;border:1px solid #e5e7eb;overflow:hidden;">
                <div style="background:#0f172a;padding:24px 0 12px 0;text-align:center;">
                    <img src="https://manohar.rohitkoktare.live//logo.png" alt="Company Logo" style="height:48px;margin-bottom:8px;">
                </div>
                <div style="background:linear-gradient(90deg,#0f172a 60%,#334155 100%);padding:24px 0;text-align:center;">
                    <h2 style="color:#fff;font-size:20px;margin:0;">Hi ${name},</h2>
                    <div style="color:#fff;font-size:16px;margin-top:8px;">You have received a new enquiry form.</div>
                </div>
                <div style="padding:28px 24px 18px 24px;">
                    <p style="color:#0f172a;font-size:15px;margin-bottom:18px;">Thank you for contacting Manohar Associate. Our team will contact you soon.</p>
                    <table style="width:100%;border-collapse:collapse;font-size:15px;">
                        <tr>
                            <td style="padding:8px 0;color:#334155;width:120px;"><strong>Name:</strong></td>
                            <td style="padding:8px 0;color:#0f172a;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 0;color:#334155;"><strong>Email:</strong></td>
                            <td style="padding:8px 0;color:#0f172a;">${email}</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 0;color:#334155;"><strong>Phone:</strong></td>
                            <td style="padding:8px 0;color:#0f172a;">${phone}</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 0;color:#334155;vertical-align:top;"><strong>Message:</strong></td>
                            <td style="padding:8px 0;color:#0f172a;">${message}</td>
                        </tr>
                    </table>
                    <div style="margin:24px 0 0 0;text-align:center;">
                        <a href="mailto:${email}" style="display:inline-block;padding:12px 32px;background:#0f172a;color:#fff;border-radius:6px;text-decoration:none;font-weight:600;font-size:15px;">Reply</a>
                    </div>
                </div>
                <div style="background:#f1f5f9;padding:16px 0;text-align:center;color:#64748b;font-size:13px;">
                    <div style="margin-bottom:8px;">
                        <a href="#" style="margin:0 6px;display:inline-block;"><img src="https://cdn-icons-png.flaticon.com/24/733/733547.png" alt="Facebook" style="height:20px;"></a>
                        <a href="#" style="margin:0 6px;display:inline-block;"><img src="https://cdn-icons-png.flaticon.com/24/733/733558.png" alt="LinkedIn" style="height:20px;"></a>
                        <a href="#" style="margin:0 6px;display:inline-block;"><img src="https://cdn-icons-png.flaticon.com/24/733/733579.png" alt="Instagram" style="height:20px;"></a>
                    </div>
                    &copy; ${new Date().getFullYear()} Manohar Associate. All rights reserved.
                </div>
            </div>
            `,
                });

                // Send to admin
                await transporter.sendMail({
                        from: `"Contact Form" <${process.env.EMAIL_USER}>`,
                        to: process.env.ADMIN_EMAIL,
                        subject: "New Contact Form Submission",
                        html: `
            <div style="max-width:520px;margin:0 auto;background:#fff;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.07);font-family:sans-serif;border:1px solid #e5e7eb;overflow:hidden;">
                <div style="background:#0f172a;padding:24px 0 12px 0;text-align:center;">
                    <img src="https://manohar.rohitkoktare.live//logo.png" alt="Company Logo" style="height:48px;margin-bottom:8px;">
                </div>
                <div style="background:linear-gradient(90deg,#0f172a 60%,#334155 100%);padding:24px 0;text-align:center;">
                    <h2 style="color:#fff;font-size:20px;margin:0;">New Contact Form Submission</h2>
                    <div style="color:#fff;font-size:16px;margin-top:8px;">You have received a new enquiry from the website.</div>
                </div>
                <div style="padding:28px 24px 18px 24px;">
                    <p style="color:#0f172a;font-size:15px;margin-bottom:18px;">Here are the details submitted:</p>
                    <table style="width:100%;border-collapse:collapse;font-size:15px;">
                        <tr>
                            <td style="padding:8px 0;color:#334155;width:120px;"><strong>Name:</strong></td>
                            <td style="padding:8px 0;color:#0f172a;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 0;color:#334155;"><strong>Email:</strong></td>
                            <td style="padding:8px 0;color:#0f172a;">${email}</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 0;color:#334155;"><strong>Phone:</strong></td>
                            <td style="padding:8px 0;color:#0f172a;">${phone}</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 0;color:#334155;vertical-align:top;"><strong>Message:</strong></td>
                            <td style="padding:8px 0;color:#0f172a;">${message}</td>
                        </tr>
                    </table>
                </div>
                <div style="background:#f1f5f9;padding:16px 0;text-align:center;color:#64748b;font-size:13px;">
                    <div style="margin-bottom:8px;">
                        <a href="#" style="margin:0 6px;display:inline-block;"><img src="https://cdn-icons-png.flaticon.com/24/733/733547.png" alt="Facebook" style="height:20px;"></a>
                        <a href="#" style="margin:0 6px;display:inline-block;"><img src="https://cdn-icons-png.flaticon.com/24/733/733558.png" alt="LinkedIn" style="height:20px;"></a>
                        <a href="#" style="margin:0 6px;display:inline-block;"><img src="https://cdn-icons-png.flaticon.com/24/733/733579.png" alt="Instagram" style="height:20px;"></a>
                    </div>
                    &copy; ${new Date().getFullYear()} Manohar Associate. All rights reserved.
                </div>
            </div>
            `,
                });

        return NextResponse.json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error("Email send error:", error);
        return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
    }
}
