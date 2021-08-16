import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "../../styles/ContactForm.module.css";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xayalqlq");
  if (state.succeeded) {
    return (
      <section className={styles.contactSection}>
        <div id="contact">
          <p style={{ color: "white", padding: "5rem", textAlign: "center" }}>
            Thanks for reaching out!
          </p>
        </div>
      </section>
    );
  }
  return (
    <section className={styles.contactSection}>
      <div id="contact">
        <form id="contact-form" className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="email">Contact Me!</label>
          <input
            className={styles.info}
            id="name"
            type="text"
            name="name"
            placeholder="Name"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <input
            className={styles.info}
            id="email"
            type="email"
            name="email"
            placeholder="My.email@sample.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea className={styles.text} id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            className={styles.button}
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
