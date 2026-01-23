import { useLanguage } from "../LanguageContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import cv from "/CV-AnastasiaDominguezBurzio.pdf";

export default function About() {
  const { t } = useLanguage();

  // Intersection Observer per scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px 0px 0px",
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".scroll-animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      title: t("pages.about.skill1_title"),
      desc: t("pages.about.skill1_desc"),
    },
    {
      title: t("pages.about.skill2_title"),
      desc: t("pages.about.skill2_desc"),
    },
    {
      title: t("pages.about.skill3_title"),
      desc: t("pages.about.skill3_desc"),
    },
    {
      title: t("pages.about.skill4_title"),
      desc: t("pages.about.skill4_desc"),
    },
    {
      title: t("pages.about.skill5_title"),
      desc: t("pages.about.skill5_desc"),
    },
    {
      title: t("pages.about.skill6_title"),
      desc: t("pages.about.skill6_desc"),
    },
  ];

  return (
    <div className="about-container">
      {/* HEADER */}
      <section className="about-header scroll-animate fade-in-up">
        <h1>{t("pages.about.title")}</h1>
      </section>

      {/* INTRODUZIONE */}
      <section className="about-intro scroll-animate fade-in">
        <p>{t("pages.about.intro")}</p>
      </section>

      {/* COMPETENZE */}
      <section className="about-section scroll-animate fade-in-up">
        <h2>{t("pages.about.expertise")}</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORMAZIONE */}
      <section className="about-section scroll-animate fade-in-up">
        <h2>{t("pages.about.education")}</h2>
        <div className="education-list">
          <div className="education-item">
            <h3>{t("pages.about.degree")}</h3>
            <p className="institution">{t("pages.about.institution")}</p>
            <p className="grade">{t("pages.about.grade")}</p>
            <p className="year">{t("pages.about.year")}</p>
          </div>
          <div className="education-item">
            <h3>{t("pages.about.degree2")}</h3>
            <p className="institution">{t("pages.about.institution2")}</p>
            <p className="year">{t("pages.about.year2")}</p>
          </div>
        </div>
      </section>
      {/* CTA DOWNLOAD CV */}
      <section className="about-cta scroll-animate fade-in-up">
        <h2>{t("pages.about.cv1")}</h2>
        <a href={cv} download className="cta-button cta-primary">
          {t("pages.about.cv2")}
        </a>
      </section>
    </div>
  );
}
