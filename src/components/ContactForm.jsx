"use client";
// Recovered from the exported application; handlers and rendered markup are preserved.
import * as ReactJSX from "react/jsx-runtime";
import * as React from "react";
import * as FeatherIcons from "react-icons/fi";
import styles from "../styles/ContactForm.classes.js";
function ContactForm() {
  let [status, setStatus] = React.useState("idle"),
    [message, setMessage] = React.useState(""),
    handleSubmit = async (e) => {
      (e.preventDefault(), setStatus("loading"), setMessage(""));
      let a = Object.fromEntries(new FormData(e.currentTarget).entries());
      try {
        let r = await fetch("/enviar-correo.php", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(a),
          }),
          o = await r.json();
        r.ok && "success" === o.status
          ? (setStatus("success"), setMessage(o.message), e.target.reset())
          : (setStatus("error"),
            setMessage(o.message || "Error al enviar el mensaje."));
      } catch (e) {
        (console.error("Error al enviar formulario:", e),
          setStatus("error"),
          setMessage(
            "Error de conexión. Por favor, intenta de nuevo o escríbenos por WhatsApp.",
          ));
      }
    };
  return (
    <form
      id={"contactForm"}
      onSubmit={handleSubmit}
      className={styles.contactFormWrapper}
    >
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor={"name"}>
          {"Nombre completo *"}
        </label>
        <input
          type={"text"}
          id={"name"}
          name={"nombre"}
          className={styles.formInput}
          placeholder={"Ej: María González"}
          required={true}
          disabled={"loading" === status}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor={"email"}>
          {"Correo electrónico *"}
        </label>
        <input
          type={"email"}
          id={"email"}
          name={"email"}
          className={styles.formInput}
          placeholder={"tu@empresa.com"}
          required={true}
          disabled={"loading" === status}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor={"phone"}>
          {"Teléfono"}
        </label>
        <input
          type={"tel"}
          id={"phone"}
          name={"telefono"}
          className={styles.formInput}
          placeholder={"+52 612 123 4567"}
          disabled={"loading" === status}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor={"service"}>
          {"Servicio de interés *"}
        </label>
        <select
          id={"service"}
          name={"servicio_interes"}
          className={styles.formSelect}
          required={true}
          disabled={"loading" === status}
        >
          <option value={""}>{"Selecciona un servicio"}</option>
          <option value={"redes-sociales"}>
            {"Gestión de Redes Sociales"}
          </option>
          <option value={"talleres"}>{"Talleres y Capacitación"}</option>
          <option value={"paginas-web"}>{"Desarrollo de Software + IA"}</option>
          <option value={"consultoria"}>{"Consultoría y Asesorías"}</option>
          <option value={"publicidad"}>{"Publicidad Física"}</option>
          <option value={"multiple"}>{"Múltiples servicios"}</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor={"message"}>
          {"Cuéntanos sobre tu proyecto *"}
        </label>
        <textarea
          id={"message"}
          name={"mensaje"}
          className={styles.formTextarea}
          placeholder={
            "Describe brevemente tu proyecto, objetivos y cómo podemos ayudarte..."
          }
          required={true}
          disabled={"loading" === status}
        />
      </div>
      {"success" === status && (
        <div className={`${styles.statusMessage} ${styles.successMessage}`}>
          {message}
        </div>
      )}
      {"error" === status && (
        <div className={`${styles.statusMessage} ${styles.errorMessage}`}>
          {message}
        </div>
      )}
      <button
        type={"submit"}
        className={styles.submitButton}
        disabled={"loading" === status}
      >
        {"loading" === status ? (
          <span>{"Enviando..."}</span>
        ) : (
          <ReactJSX.Fragment>
            <FeatherIcons.FiSend
              size={16}
              style={{
                marginRight: "8px",
              }}
            />
            {"ENVIAR MENSAJE"}
          </ReactJSX.Fragment>
        )}
      </button>
    </form>
  );
}
export default ContactForm;
