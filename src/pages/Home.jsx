import { useLanguage } from "../LanguageContext";
import { useEffect } from "react";
import photo from "/images/photo.JPG";
import video from "/videos/Teaser_Progetto_Tesi.mp4";
import "./Home.css";
import { Link } from "react-router-dom";
import projectEffe from "/images/project-effe.png";
import projectTesi from "/images/project-tesi.png";
import projectGame from "/images/project-game.png";
import projectAurora from "/images/project-aurora.png";

export default function Home() {
  const { t } = useLanguage();

  // Intersection Observer per scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
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

  // Featured projects - seleziona i 4 principali
  const featuredProjects = [
    {
      id: 1,
      title: t("pages.projects.project1_title"),
      desc: t("pages.projects.project1_desc"),
      tags: t("pages.projects.project1_tags"),
      image: projectEffe,
      link: "/projects/1",
    },
    {
      id: 2,
      title: t("pages.projects.project2_title"),
      desc: t("pages.projects.project2_desc"),
      tags: t("pages.projects.project2_tags"),
      image: projectTesi,
      link: "/projects/2",
    },
    {
      id: 3,
      title: t("pages.projects.project3_title"),
      desc: t("pages.projects.project3_desc"),
      tags: t("pages.projects.project3_tags"),
      image: projectGame,
      link: "/projects/3",
    },
  ];

  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-background">
          <video autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content scroll-animate fade-in-up">
          <h1 className="hero-name">{t("pages.home.name")}</h1>
          <p className="hero-subtitle">{t("pages.home.subtitle")}</p>
          <Link to="/projects" className="cta-button cta-primary">
            {t("pages.home.cta1")}
          </Link>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="intro">
        <div className="intro-text scroll-animate fade-in">
          <h2>{t("pages.about.title")}</h2>
          <p className="intro-desc">
            {t("pages.about.intro").substring(0, 310)}...
          </p>
          <Link to="/about" className="cta-button cta-primary">
            {t("pages.home.cta2")}
          </Link>
        </div>
        <div className="intro-image scroll-animate slide-in-right">
          <img src={photo} alt="Anastasia" className="profile-photo" />
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="featured-projects">
        <h2 className="section-title scroll-animate fade-in-up">
          {t("pages.home.h2")}
        </h2>
        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card scroll-animate fade-in-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <a href={project.link} className="view-project">
                    {t("pages.home.project")}
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-tags">
                  {project.tags.split(", ").map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cta-container scroll-animate fade-in-up">
          <Link to="/projects" className="cta-button cta-primary">
            {t("pages.home.cta3")}
          </Link>
        </div>
      </section>
    </div>
  );
}
