import { useLanguage } from "../LanguageContext";
import "./Contact.css";

export default function Contact() {
  const { t } = useLanguage();

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
            <h3>Email</h3>
            <a href="mailto:anastasiadb17@gmail.com" className="contact-link">
              anastasiadb17@gmail.com
            </a>
          </div>

          <div className="method-card">
            <h3>LinkedIn</h3>
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
            <h3>GitHub</h3>
            <a
              href="https://github.com/anastasiadominguez"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              github.com/anastasia
            </a>
          </div>
        </section>

        {/* NEWSLETTER SUBSTACK */}
        <section className="contact-newsletter">
          <div className="newsletter-card">
            <h2>{t("pages.contact.substack_title")}</h2>
            <p className="newsletter-desc">
              {t("pages.contact.substack_desc")}
            </p>
            <a
              href="https://anastasiadominguez.substack.com/?utm_campaign=profile_chips"
              target="_blank"
              rel="noopener noreferrer"
              className="newsletter-link"
            >
              {t("pages.contact.substack_link")} →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
