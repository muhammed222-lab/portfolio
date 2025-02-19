import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, urgent } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields (name, email, message) are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${process.env.SMTP_NAME}" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // Send email to yourself
      subject: urgent
        ? "🚨 Urgent Inquiry Received"
        : "New Contact Form Message",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nUrgent: ${
        urgent ? "Yes" : "No"
      }`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <p><strong>Urgent:</strong> ${urgent ? "Yes" : "No"}</p>
      `,
    };

    // Send email to yourself
    await transporter.sendMail(mailOptions);

    // Send confirmation email to the user
    await transporter.sendMail({
      from: `"${process.env.SMTP_NAME}" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank You for Contacting Me!",
      text: `Hi ${name},\n\nThank you for reaching out! I have received your message and will get back to you soon.\n\nBest Regards,\nYour Name`,
      html: `
        <h3>Thank You, ${name}!</h3>
        <p>We have received your message and will respond shortly.</p>
        <p><strong>Your Message:</strong></p>
        <blockquote>${message}</blockquote>
        <p>Best Regards,</p>
        <p>Your Name</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
