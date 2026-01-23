import { useLanguage } from "../LanguageContext";
import "./ProjectThesis.css";

export default function ProjectThesis() {
  const { t } = useLanguage();

  return (
    <div className="project-detail-container">
      <section className="project-hero">
        <h1>{t("pages.projects.project2_title")}</h1>
        <p className="project-year">2025</p>
      </section>

      <section className="project-content">
        <div className="project-description">
          <h2>Descrizione</h2>
          <p>{t("pages.projects.project2_desc")}</p>
        </div>

        {/* Aggiungi qui immagini, video, galleria */}
        <div className="project-gallery">{/* Inserisci contenuti */}</div>

        <div className="project-details">
          <h2>Dettagli</h2>
          <p>{t("pages.projects.project2_tags")}</p>
        </div>
      </section>
    </div>
  );
}
