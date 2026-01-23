import { useLanguage } from "../LanguageContext";
import { useEffect } from "react";
import photo from "/images/photo.JPG";
import video from "/videos/Teaser_Progetto_Tesi.mp4";
import "./Home.css";
import { Link } from "react-router-dom";

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
      image: "/images/project-effe.jpg",
      link: "/projects/1",
    },
    {
      id: 2,
      title: t("pages.projects.project2_title"),
      desc: t("pages.projects.project2_desc"),
      tags: t("pages.projects.project2_tags"),
      image: "/images/project-vr.jpg",
      link: "/projects/2",
    },
    {
      id: 3,
      title: t("pages.projects.project3_title"),
      desc: t("pages.projects.project3_desc"),
      tags: t("pages.projects.project3_tags"),
      image: "/images/project-game.jpg",
      link: "/projects/3",
    },
    {
      id: 4,
      title: t("pages.projects.project5_title"),
      desc: t("pages.projects.project5_desc"),
      tags: t("pages.projects.project5_tags"),
      image: "/images/project-installation.jpg",
      link: "/projects/5",
    },
  ];

  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content scroll-animate fade-in-up">
          <h1 className="hero-name">{t("pages.home.name")}</h1>
          <p className="hero-subtitle">{t("pages.home.subtitle")}</p>
          <Link to="/projects" className="cta-button cta-primary">
            Scopri i miei progetti
          </Link>
        </div>
        <div className="hero-background">
          <video autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="intro scroll-animate fade-in">
        <div className="intro-text">
          <h2>{t("pages.about.title")}</h2>
          <p className="intro-desc">
            {t("pages.about.intro").substring(0, 300)}...
          </p>
          <Link to="/about" className="cta-button cta-primary">
            Scopri di più
          </Link>
        </div>
        <div className="intro-image scroll-animate slide-in-right">
          <img src={photo} alt="Anastasia" className="profile-photo" />
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="featured-projects">
        <h2 className="section-title scroll-animate fade-in-up">
          Progetti in Evidenza
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
                    Visualizza Progetto
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
          <a href="/projects" className="cta-button cta-primary">
            Vedi Tutti i Progetti →
          </a>
        </div>
      </section>
    </div>
  );
}
