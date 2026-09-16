import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SERVICE_LABELS: Record<string, string> = {
  "redes-sociales": "Gestión de Redes Sociales",
  talleres: "Talleres y Capacitación",
  "paginas-web": "Desarrollo de Software + IA",
  consultoria: "Consultoría y Asesorías",
  publicidad: "Publicidad Física",
  multiple: "Múltiples servicios",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function denied() {
  return NextResponse.json(
    { status: "error", message: "Acceso denegado. Se requiere método POST." },
    { status: 403 }
  );
}

export async function GET() {
  return denied();
}
export async function PUT() {
  return denied();
}
export async function DELETE() {
  return denied();
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const nombre = String(body?.nombre ?? "").trim();
  const email = String(body?.email ?? "").trim();
  const telefono = String(body?.telefono ?? "").trim() || "No especificado";
  const servicioInteres = String(body?.servicio_interes ?? "").trim();
  const mensaje = String(body?.mensaje ?? "").trim();

  if (!nombre || !email || !servicioInteres || !mensaje || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { status: "error", message: "Por favor completa todos los campos obligatorios correctamente." },
      { status: 400 }
    );
  }

  const servicioLabel = SERVICE_LABELS[servicioInteres] ?? servicioInteres;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `Formulario Web <${process.env.SMTP_FROM ?? process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL ?? "info@isasmkt.com",
      replyTo: email,
      subject: `🔥 Nuevo Lead: ${nombre} - ISA'S Marketing`,
      html: `
        <div style="background:#000c14;padding:32px;font-family:sans-serif;color:#DFDFE2;">
          <div style="max-width:520px;margin:0 auto;background:#001f2e;border-radius:16px;padding:32px;border:1px solid #00dee633;">
            <h2 style="color:#00dee6;margin-top:0;">Nuevo mensaje de contacto</h2>
            <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
            <p><strong>Correo:</strong> <a href="mailto:${escapeHtml(email)}" style="color:#00dee6;">${escapeHtml(email)}</a></p>
            <p><strong>Teléfono:</strong> ${escapeHtml(telefono)}</p>
            <p><strong>Servicio de Interés:</strong> ${escapeHtml(servicioLabel)}</p>
            <p><strong>Mensaje:</strong></p>
            <p style="white-space:pre-wrap;">${escapeHtml(mensaje)}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      status: "success",
      message: "¡Mensaje enviado con éxito! Nos pondremos en contacto contigo lo antes posible.",
    });
  } catch {
    return NextResponse.json(
      {
        status: "error",
        message:
          "Ocurrió un error al intentar enviar el mensaje por correo. Por favor, inténtalo de nuevo más tarde o contáctanos por WhatsApp.",
      },
      { status: 500 }
    );
  }
}
