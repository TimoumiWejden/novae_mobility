import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { prenom, nom, societe, email, secteur, message } = await req.json();

  if (!prenom || !nom || !email || !message) {
    return NextResponse.json(
      { error: "Champs obligatoires manquants." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f7f8fa; border-radius: 12px;">
      <div style="background: #1E3A5F; padding: 20px 24px; border-radius: 8px 8px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 20px;">Nouvelle demande — Novae Mobility</h1>
      </div>
      <div style="background: white; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px; width: 130px;">Prénom</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #1a1a2e;">${prenom}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">Nom</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #1a1a2e;">${nom}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">Société</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #1a1a2e;">${societe || "—"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
              <a href="mailto:${email}" style="color: #2D6A9F;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">Secteur</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #1a1a2e;">${secteur || "—"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #888; font-size: 13px; vertical-align: top;">Message</td>
            <td style="padding: 10px 0; color: #1a1a2e; white-space: pre-line;">${message}</td>
          </tr>
        </table>
      </div>
      <p style="text-align: center; color: #aaa; font-size: 12px; margin-top: 16px;">
        Envoyé depuis le formulaire de contact de novaemobility.fr
      </p>
    </div>
  `;

  await transporter.sendMail({
    from: `"Novae Mobility" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_TO,
    replyTo: email,
    subject: `Nouvelle demande de ${prenom} ${nom} — ${societe || email}`,
    html,
  });

  return NextResponse.json({ success: true });
}
