"use client";

import { useState } from "react";

type Status = { type: "idle" | "success" | "error"; message?: string };

const SERVICE_OPTIONS = [
  { value: "", label: "Selecciona un servicio" },
  { value: "redes-sociales", label: "Gestión de Redes Sociales" },
  { value: "talleres", label: "Talleres y Capacitación" },
  { value: "paginas-web", label: "Desarrollo de Software + IA" },
  { value: "consultoria", label: "Consultoría y Asesorías" },
  { value: "publicidad", label: "Publicidad Física" },
  { value: "multiple", label: "Múltiples servicios" },
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "idle" });

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/enviar-correo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      setStatus({ type: json.status === "success" ? "success" : "error", message: json.message });
      if (json.status === "success") form.reset();
    } catch {
      setStatus({
        type: "error",
        message:
          "Ocurrió un error al intentar enviar el mensaje. Por favor, inténtalo de nuevo más tarde o contáctanos por WhatsApp.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-white/10 bg-card p-8">
      <div>
        <h2 className="text-xl font-bold text-ink">Envíanos un mensaje</h2>
        <p className="text-sm text-ink/60">Completa el formulario y nos pondremos en contacto contigo pronto</p>
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold text-ink">Nombre completo *</label>
        <input
          name="nombre"
          type="text"
          required
          placeholder="Ej: María González"
          className="w-full rounded-lg border border-white/10 bg-base px-4 py-3 text-sm text-ink outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold text-ink">Correo electrónico *</label>
        <input
          name="email"
          type="email"
          required
          placeholder="tu@empresa.com"
          className="w-full rounded-lg border border-white/10 bg-base px-4 py-3 text-sm text-ink outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold text-ink">Teléfono</label>
        <input
          name="telefono"
          type="tel"
          placeholder="+52 612 123 4567"
          className="w-full rounded-lg border border-white/10 bg-base px-4 py-3 text-sm text-ink outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold text-ink">Servicio de interés *</label>
        <select
          name="servicio_interes"
          required
          defaultValue=""
          className="w-full rounded-lg border border-white/10 bg-base px-4 py-3 text-sm text-ink outline-none focus:border-accent"
        >
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold text-ink">Cuéntanos sobre tu proyecto *</label>
        <textarea
          name="mensaje"
          required
          rows={5}
          placeholder="Describe brevemente tu proyecto, objetivos y cómo podemos ayudarte..."
          className="w-full rounded-lg border border-white/10 bg-base px-4 py-3 text-sm text-ink outline-none focus:border-accent"
        />
      </div>

      {status.type !== "idle" && (
        <p className={`text-sm ${status.type === "success" ? "text-accent" : "text-red-400"}`}>
          {status.message}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-accent px-6 py-3 text-sm font-bold text-base transition hover:opacity-90 disabled:opacity-50"
      >
        {loading ? "ENVIANDO..." : "ENVIAR MENSAJE"}
      </button>
    </form>
  );
}
