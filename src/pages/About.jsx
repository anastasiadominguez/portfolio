import { useLanguage } from "../LanguageContext";
import "./About.css";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="about-container">
      <div className="about-content">
        {/* TITOLO */}
        <section className="about-header">
          <h1>{t("pages.about.title")}</h1>
        </section>

        {/* INTRODUZIONE */}
        <section className="about-intro">
          <p>{t("pages.about.intro")}</p>
        </section>

        {/* ESPERIENZA E COMPETENZE */}
        <section className="about-section">
          <h2>{t("pages.about.expertise")}</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <h3>{t("pages.about.skill1_title")}</h3>
              <p>{t("pages.about.skill1_desc")}</p>
            </div>
            <div className="skill-item">
              <h3>{t("pages.about.skill2_title")}</h3>
              <p>{t("pages.about.skill2_desc")}</p>
            </div>
            <div className="skill-item">
              <h3>{t("pages.about.skill3_title")}</h3>
              <p>{t("pages.about.skill3_desc")}</p>
            </div>
            <div className="skill-item">
              <h3>{t("pages.about.skill4_title")}</h3>
              <p>{t("pages.about.skill4_desc")}</p>
            </div>
          </div>
        </section>

        {/* EDUCAZIONE */}
        <section className="about-section">
          <h2>{t("pages.about.education")}</h2>
          <div className="education-item">
            <h3>{t("pages.about.degree")}</h3>
            <p className="institution">{t("pages.about.institution")}</p>
            <p className="year">{t("pages.about.year")}</p>
          </div>
        </section>

        {/* PASSIONI */}
        <section className="about-section">
          <h2>{t("pages.about.passions")}</h2>
          <p>{t("pages.about.passions_desc")}</p>
        </section>
      </div>
    </div>
  );
}
