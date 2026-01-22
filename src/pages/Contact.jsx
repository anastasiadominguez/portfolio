import { useLanguage } from "../LanguageContext";
import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crea il link mailto con i dati del form
    const mailtoLink = `mailto:anastasia@example.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )}`;

    window.location.href = mailtoLink;

    // Resetta il form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        {/* TITOLO */}
        <section className="contact-header">
          <h1>{t("pages.contact.title")}</h1>
          <p className="contact-intro">{t("pages.contact.intro")}</p>
        </section>

        {/* METODI DI CONTATTO */}
        <section className="contact-methods">
          <div className="method-card">
            <h3>📧 {t("pages.contact.email")}</h3>
            <a href="mailto:anastasia@example.com" className="contact-link">
              anastasia@example.com
            </a>
          </div>

          <div className="method-card">
            <h3>💼 LinkedIn</h3>
            <a
              href="https://linkedin.com/in/anastasia-dominguez-burzio"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              linkedin.com/in/anastasia-dominguez-burzio
            </a>
          </div>

          <div className="method-card">
            <h3>🔗 GitHub</h3>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              github.com/anastasia
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
