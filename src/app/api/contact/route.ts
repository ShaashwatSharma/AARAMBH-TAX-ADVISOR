import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create email content with HTML formatting
//     const emailContent = `
// <!DOCTYPE html>
// <html>
// <head>
//     <meta charset="utf-8">
//     <title>New Contact Form Submission</title>
// </head>
// <body style="font-family: system-ui, sans-serif, Arial; font-size: 12px; color: #2c3e50;">
//     <div>
//         A new contact request has been received via your website's Contact Us form.
//         Please review the details below and respond at your earliest convenience.
//     </div>

//     <div style="margin-top: 20px; padding: 15px 0; border-width: 1px 0; border-style: dashed; border-color: lightgrey;">
//         <table role="presentation" style="width: 100%; border-collapse: collapse;">
//             <tr>
//                 <td style="vertical-align: top; padding-right: 15px;">
//                     <div style="padding: 6px 10px; background-color: aliceblue; border-radius: 5px; font-size: 26px; width: fit-content;" role="img">
//                         📩
//                     </div>
//                 </td>
//                 <td style="vertical-align: top;">
//                     <div style="font-size: 16px; margin-bottom: 5px;">
//                         <strong>${name}</strong>
//                     </div>
//                     <div style="color: #888; font-size: 13px; margin-bottom: 15px;">
//                         Submitted on: ${new Date().toLocaleString('en-IN', {
//                             year: 'numeric',
//                             month: 'long',
//                             day: 'numeric',
//                             hour: '2-digit',
//                             minute: '2-digit',
//                             timeZone: 'Asia/Kolkata'
//                         })}
//                     </div>

//                     <table style="font-size: 14px; color: #2c3e50; line-height: 1.5;">
//                         <tr>
//                             <td style="font-weight: bold; padding-right: 10px;">Email:</td>
//                             <td>${email}</td>
//                         </tr>
//                         <tr>
//                             <td style="font-weight: bold; padding-right: 10px;">Phone:</td>
//                             <td>${phone || 'Not provided'}</td>
//                         </tr>
//                         <tr>
//                             <td style="font-weight: bold; padding-right: 10px;">Company:</td>
//                             <td>${company || 'Not provided'}</td>
//                         </tr>
//                         <tr>
//                             <td style="font-weight: bold; padding-right: 10px;">Service Required:</td>
//                             <td>${service || 'Not specified'}</td>
//                         </tr>
//                     </table>

//                     <div style="margin-top: 15px;">
//                         <strong>Message:</strong>
//                         <p style="font-size: 15px; margin: 5px 0;">${message}</p>
//                     </div>
//                 </td>
//             </tr>
//         </table>
//     </div>
// </body>
// </html>
//     `;

    // Log the contact form submission (for debugging)
    console.log('📧 Contact Form Submission:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone || 'Not provided');
    console.log('Company:', company || 'Not provided');
    console.log('Service:', service || 'Not specified');
    console.log('Message:', message);
    console.log('Timestamp:', new Date().toISOString());
    console.log('---');

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again or contact us directly.' 
      },
      { status: 500 }
    );
  }
} 