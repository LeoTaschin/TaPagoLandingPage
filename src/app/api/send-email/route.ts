require('dotenv').config();

import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const dynamic = "force-dynamic"; // Força a execução no servidor

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const receiverEmail = process.env.RECEIVER_EMAIL;

  try {
    const { name, email, age, phone, deviceType } = await request.json()

    const { data, error } = await resend.emails.send({
      from: 'TaPago <onboarding@resend.dev>',
      to: 'tapagoconfirmacao@gmail.com',
      subject: 'Nova Inscrição TaPago',
      html: `
        <h2>Nova inscrição recebida!</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Idade:</strong> ${age}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Dispositivo:</strong> ${deviceType}</p>
      `,
    })

    if (error) {
      console.error('Erro ao enviar email:', error)
      return NextResponse.json(
        { error: 'Erro ao enviar email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email enviado com sucesso!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erro:', error)
    return NextResponse.json(
      { error: 'Erro ao processar requisição' },
      { status: 500 }
    )
  }
}
