import nodemailer from 'nodemailer';
import emailTemplate from './contact-email-template';

export const requiredMessage = 'Por favor completa todos los campos obligatorios correctamente.';
export const failureMessage = 'Ocurrió un error al intentar enviar el mensaje por correo. Por favor, inténtalo de nuevo más tarde o contáctanos por WhatsApp.';
export const successMessage = '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo lo antes posible.';

const clean = (value) => typeof value === 'string' ? value.trim().replace(/<[^>]*>/g, '') : '';
const escapeHtml = (value) => value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[char]);

export function parseContact(data) {
  return {
    nombre: clean(data?.nombre),
    email: clean(data?.email),
    telefono: clean(data?.telefono ?? 'No especificado'),
    servicio: clean(data?.servicio_interes),
    mensaje: clean(data?.mensaje),
  };
}

export function isValidContact(contact) {
  return Boolean(contact.nombre && contact.servicio && contact.mensaje && /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(contact.email));
}

export async function sendContactMail(contact) {
  if (!process.env.SMTP_HOST) throw new Error('Configure SMTP_HOST or CONTACT_PHP_URL to deliver contact mail.');
  const port = Number(process.env.SMTP_PORT || 587);
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    ...(process.env.SMTP_USER ? { auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD } } : {}),
    connectionTimeout: 10000,
    socketTimeout: 15000,
  });
  await transport.sendMail({
    from: process.env.CONTACT_FROM || 'Formulario Web <noreply@isasmkt.com>',
    to: process.env.CONTACT_TO || 'info@isasmkt.com',
    replyTo: contact.email,
    subject: `🔥 Nuevo Lead: ${contact.nombre} - ISA'S Marketing`,
    html: emailTemplate.replace(/\{\{(nombre|email|telefono|servicio|mensaje)\}\}/g, (_, key) => escapeHtml(contact[key])),
  });
}
