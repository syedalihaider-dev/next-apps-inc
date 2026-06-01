import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, phone, budget, msg, services, pageUrl } = body;

        // Validate required fields
        if (!name || !email || !phone) {
            return NextResponse.json({ error: 'Required fields are missing.' }, { status: 400 });
        }

        // Configure Nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: 'smtppro.zoho.com',
            port: 587,
            secure: false,
            auth: {
                user: 'sales@nextappinc.com',
                pass: 'tltZbz#8786@@'
            }
        });

        // HTML message for internal team
        const internalMessage = `
            <h2>New Lead Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
            <p><strong>Services:</strong> ${services ? services.join(', ') : 'Not specified'}</p>
            <p><strong>Message:</strong> ${msg || 'Not specified'}</p>
            <p><strong>Page URL:</strong> ${pageUrl || 'Not specified'}</p>
        `;

        // Send email to team
        await transporter.sendMail({
            from: '"Next App Inc Main Brand" <sales@nextappinc.com>',
            to: [
                'sales@nextappinc.com',
                'noman@canvasdigital.net',
                'manzar.inam@canvasdigital.org',
                'faran.tanveer@canvasdigital.org',
                'hafiz.oumama@canvasdigital.org',
                'hassan.ak@canvasdigital.org',
                'ali.haider@canvasdigital.org'
            ],
            subject: 'Lead | Next App Inc Main Brand',
            html: internalMessage,
        });

        const thankYouMessage = `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #0056b3;">Thank You for Contacting Us, ${name}!</h2>
                <p>We have received your inquiry and our team will get back to you shortly.</p>
                <p>If you have any urgent questions, feel free to reply directly to this email.</p>
                <br />
                <p>Best regards,</p>
                <p><strong>Next App Inc Team</strong></p>
            </div>
        `;

        // Send thank you email to user
        await transporter.sendMail({
            from: '"Next App Inc" <sales@nextappinc.com>',
            to: email,
            subject: 'Thank You for Contacting Us',
            html: thankYouMessage,
        });

        return NextResponse.json({ success: true, message: 'Emails sent successfully!' }, { status: 200 });

    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json({ error: 'Email could not be sent: ' + error.message }, { status: 500 });
    }
}
