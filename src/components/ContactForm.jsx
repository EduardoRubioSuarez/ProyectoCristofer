"use client";
import * as React from "react";
import * as FeatherIcons from "react-icons/fi";

const services = [
  { value: "redes-sociales", label: "Manejo de redes sociales", Icon: FeatherIcons.FiMessageSquare },
  { value: "talleres", label: "Talleres y capacitación", Icon: FeatherIcons.FiBookOpen },
  { value: "paginas-web", label: "Software + IA", Icon: FeatherIcons.FiCode },
  { value: "consultoria", label: "Consultoría y asesorías", Icon: FeatherIcons.FiCompass },
  { value: "publicidad", label: "Publicidad física", Icon: FeatherIcons.FiMonitor },
  { value: "multiple", label: "Múltiples servicios", Icon: FeatherIcons.FiGrid },
];

function ContactForm() {
  const [status, setStatus] = React.useState("idle");
  const [message, setMessage] = React.useState("");
  const loading = status === "loading";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");
    setMessage("");
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const r = await fetch("/enviar-correo.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const o = await r.json();
      if (r.ok && o.status === "success") {
        setStatus("success");
        setMessage(o.message);
        form.reset();
      } else {
        setStatus("error");
        setMessage(o.message || "Error al enviar el mensaje.");
      }
    } catch (err) {
      console.error("Error al enviar formulario:", err);
      setStatus("error");
      setMessage(
        "Error de conexión. Por favor, intenta de nuevo o escríbenos por WhatsApp.",
      );
    }
  };

  return (
    <form id="contactForm" onSubmit={handleSubmit}>
      <fieldset disabled={loading}>
        <legend>¿Qué servicio te interesa? *</legend>
        <div className="ct-svc">
          {services.map(({ value, label, Icon }, i) => (
            <label key={value}>
              <input
                type="radio"
                name="servicio_interes"
                value={value}
                required={i === 0}
              />
              <span>
                <Icon aria-hidden="true" />
                {label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="ct-fields">
        <div className="ct-f">
          <label htmlFor="name">
            Nombre completo <b>*</b>
          </label>
          <input
            type="text"
            id="name"
            name="nombre"
            autoComplete="name"
            required
            disabled={loading}
          />
        </div>
        <div className="ct-f">
          <label htmlFor="phone">Teléfono</label>
          <input
            type="tel"
            id="phone"
            name="telefono"
            autoComplete="tel"
            disabled={loading}
          />
        </div>
        <div className="ct-f ct-full">
          <label htmlFor="email">
            Correo electrónico <b>*</b>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
            disabled={loading}
          />
        </div>
        <div className="ct-f ct-full">
          <label htmlFor="message">
            Cuéntanos sobre tu proyecto <b>*</b>
          </label>
          <textarea
            id="message"
            name="mensaje"
            required
            disabled={loading}
          />
        </div>
      </div>

      {status === "success" && (
        <div className="ct-msg ok" role="status">
          {message}
        </div>
      )}
      {status === "error" && (
        <div className="ct-msg err" role="alert">
          {message}
        </div>
      )}

      <button type="submit" className="ct-send" disabled={loading}>
        {loading ? "Enviando..." : "Enviar mensaje"}
        <span aria-hidden="true">→</span>
      </button>
      <p className="ct-legal">
        Los campos con <b>*</b> son obligatorios. Usaremos tus datos solo para
        responderte.
      </p>
    </form>
  );
}
export default ContactForm;
