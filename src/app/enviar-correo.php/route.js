import { failureMessage, isValidContact, parseContact, requiredMessage, sendContactMail, successMessage } from '@/lib/contact-mail';

export const runtime = 'nodejs';
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};
const json = (status, message, code) => Response.json({ status, message }, { status: code, headers });

export function OPTIONS() { return new Response(null, { status: 200, headers }); }
export function GET() { return json('error', 'Acceso denegado. Se requiere método POST.', 403); }

export async function POST(request) {
  let data;
  try {
    data = request.headers.get('content-type')?.includes('application/json')
      ? await request.json()
      : Object.fromEntries(await request.formData());
  } catch { return json('error', requiredMessage, 400); }
  const contact = parseContact(data);
  if (!isValidContact(contact)) return json('error', requiredMessage, 400);
  try {
    if (process.env.CONTACT_PHP_URL) {
      const endpoint = new URL(process.env.CONTACT_PHP_URL);
      const current = new URL(request.url);
      if (!['http:', 'https:'].includes(endpoint.protocol) || (endpoint.origin === current.origin && endpoint.pathname.replace(/\/$/, '') === current.pathname.replace(/\/$/, ''))) {
        throw new Error('CONTACT_PHP_URL must point to a separate PHP server.');
      }
      const response = await fetch(endpoint, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data), signal: AbortSignal.timeout(15000),
      });
      const result = await response.json();
      return json(result.status, result.message, response.status);
    }
    await sendContactMail(contact);
    return json('success', successMessage, 200);
  } catch (error) {
    console.error('Contact mail delivery failed:', error.message);
    return json('error', failureMessage, 500);
  }
}
