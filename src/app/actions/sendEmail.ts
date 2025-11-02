'use server'

import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string
  const htmlMessage = message.replace(/\n/g, '<br>')

  if (!subject || !message) {
    throw new Error('Missing subject or message')
  }

  try {
    const res = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ["delivered@resend.dev"],
      subject,
      html: `<p>${htmlMessage}</p>`,
    })

    console.log('Email sent:', res)
    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, error: 'Failed to send email' }
  }
}
