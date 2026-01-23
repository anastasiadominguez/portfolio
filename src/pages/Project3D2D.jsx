import { useLanguage } from "../LanguageContext";
import "./Project3D2D.css";

export default function Project3D2D() {
  const { t } = useLanguage();

  return (
    <div className="project-detail-container">
      <section className="project-hero">
        <h1>{t("pages.projects.project10_title")}</h1>
        <p className="project-year">2022-2023</p>
      </section>

      <section className="project-content">
        <div className="project-description">
          <h2>Descrizione</h2>
          <p>{t("pages.projects.project10_desc")}</p>
        </div>

        <div className="project-gallery">{/* Inserisci contenuti 3D/2D */}</div>

        <div className="project-details">
          <h2>Dettagli</h2>
          <p>{t("pages.projects.project10_tags")}</p>
        </div>
      </section>
    </div>
  );
}
