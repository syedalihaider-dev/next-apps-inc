import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, phone, service, budget, customQuote, message, pageUrl } = body;

        // Get IP Address from headers for tracking
        const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 
                   req.headers.get('x-real-ip') || 
                   req.headers.get('cf-connecting-ip') || 
                   '127.0.0.1';

        // Try to get location info
        let detectedCountry = '';
        let detectedState = '';
        let detectedCity = '';
        let locationSummary = '';

        if (ip === '::1' || ip === '127.0.0.1') {
            detectedCountry = 'Localhost';
            detectedState = 'Development';
            detectedCity = 'Local';
            locationSummary = 'Local Development Environment';
        } else if (ip && !ip.startsWith('192.168.')) {
            try {
                const geoRes = await fetch(`http://ip-api.com/json/${ip}`);
                const geoData = await geoRes.json();
                if (geoData.status === 'success') {
                    detectedCountry = geoData.country;
                    detectedState = geoData.regionName;
                    detectedCity = geoData.city;
                    locationSummary = `${detectedCity}, ${detectedState}, ${detectedCountry}`;
                } else {
                    locationSummary = `Geo Lookup Failed: ${geoData.message || 'Unknown'}`;
                }
            } catch (e) {
                console.error("Geo lookup failed", e);
                locationSummary = 'Geo Lookup Error';
            }
        }

        const transporter = nodemailer.createTransport({
            host: 'smtppro.zoho.com',
            port: 587,
            secure: false,
            auth: {
                user: 'sales@nextappinc.com',
                pass: 'tltZbz#8786@@'
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const mailOptions = {
            from: '"Next App Inc LP" <sales@nextappinc.com>',
            to: ['sales@nextappinc.com','noman@canvasdigital.net','manzar.inam@canvasdigital.org','faran.tanveer@canvasdigital.org','hafiz.oumama@canvasdigital.org','hassan.ak@canvasdigital.org','ali.haider@canvasdigital.org'],
            subject: `New LP Lead: Mobile App Studio`,
            html: `
                <h3>New Lead Details (Mobile App Studio LP):</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Service:</strong> ${service || 'N/A'}</p>
                <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
                ${customQuote ? `<p><strong>Custom Quote ($):</strong> ${customQuote}</p>` : ''}
                <p><strong>Message:</strong> ${message}</p>
                <br>
                <hr>
                <h3>Tracking Information:</h3>
                <p><strong>Country:</strong> ${detectedCountry || 'N/A'}</p>
                <p><strong>State/Region:</strong> ${detectedState || 'N/A'}</p>
                <p><strong>City:</strong> ${detectedCity || 'N/A'}</p>
                <p><strong>Location Summary:</strong> ${locationSummary || 'N/A'}</p>
                <p><strong>Page URL:</strong> ${pageUrl || 'N/A'}</p>
                <p><strong>IP Address:</strong> ${ip}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ 
            message: "Failed to send email", 
            error: error.message 
        }, { status: 500 });
    }
}
