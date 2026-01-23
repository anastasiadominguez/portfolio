import { useLanguage } from "../LanguageContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Projects.css";

import projectEffe from "/images/project-effe.png";
import projectTesi from "/images/project-tesi.png";
import projectGame from "/images/project-game.png";
import projectAurora from "/images/project-aurora.png";
import project360 from "/images/project-360.png";
import project3D from "/images/project-3D.png";
import projectComputer from "/images/project-computer.png";
import projectDispencer from "/images/project-dispencer.png";
import projectIndire from "/images/project-indire.png";
import projectVideo from "/images/project-video.png";
import projectArs from "/images/project-ars.png";

import fileComputer from "/DocumentoPropostaDiStrategia_ComputerRivo.pdf";
import fileDispencer from "/Homeow_gruppo08_DigitalInteractionDesign.pdf";
import fileIndire from "/NETCITY.pdf";

export default function Projects() {
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

  const projects = [
    {
      id: 1,
      titleKey: "pages.projects.project11_title",
      descKey: "pages.projects.project11_desc",
      tagsKey: "pages.projects.project11_tags",
      image: projectArs,
      year: "2022-2023",
      link: "https://www.ars-media.it/",
      isInternal: false,
    },
    {
      id: 2,
      titleKey: "pages.projects.project6_title",
      descKey: "pages.projects.project6_desc",
      tagsKey: "pages.projects.project6_tags",
      image: projectIndire,
      year: "2022-2023",
      link: fileIndire,
      isInternal: false,
    },
    {
      id: 3,
      titleKey: "pages.projects.project5_title",
      descKey: "pages.projects.project5_desc",
      tagsKey: "pages.projects.project5_tags",
      image: projectAurora,
      year: "2022-2023",
      link: "https://www.youtube.com/watch?v=XRQAT5P-0qQ",
      isInternal: false,
    },
    {
      id: 4,
      titleKey: "pages.projects.project10_title",
      descKey: "pages.projects.project10_desc",
      tagsKey: "pages.projects.project10_tags",
      image: project3D,
      year: "2022-2023",
      link: "/projects/3d-2d",
      isInternal: true,
    },
    {
      id: 5,
      titleKey: "pages.projects.project4_title",
      descKey: "pages.projects.project4_desc",
      tagsKey: "pages.projects.project4_tags",
      image: project360,
      year: "2023",
      link: "https://www.youtube.com/watch?v=anE39NZF9Kw",
      isInternal: false,
    },
    {
      id: 6,
      titleKey: "pages.projects.project3_title",
      descKey: "pages.projects.project3_desc",
      tagsKey: "pages.projects.project3_tags",
      image: projectGame,
      year: "2023-2024",
      link: "https://www.youtube.com/watch?v=JKVR_b7BoJI",
      isInternal: false,
    },
    {
      id: 7,
      titleKey: "pages.projects.project2_title",
      descKey: "pages.projects.project2_desc",
      tagsKey: "pages.projects.project2_tags",
      image: projectTesi,
      year: "2025",
      link: "/projects/thesis",
      isInternal: true,
    },
    {
      id: 8,
      titleKey: "pages.projects.project1_title",
      descKey: "pages.projects.project1_desc",
      tagsKey: "pages.projects.project1_tags",
      image: projectEffe,
      year: "2025-2026",
      link: "https://collettivoeffe.it/",
      isInternal: false,
    },
    {
      id: 9,
      titleKey: "pages.projects.project7_title",
      descKey: "pages.projects.project7_desc",
      tagsKey: "pages.projects.project7_tags",
      image: projectComputer,
      year: "2025-2026",
      link: fileComputer,
      isInternal: false,
    },
    {
      id: 10,
      titleKey: "pages.projects.project8_title",
      descKey: "pages.projects.project8_desc",
      tagsKey: "pages.projects.project8_tags",
      image: projectDispencer,
      year: "2025-2026",
      link: fileDispencer,
      isInternal: false,
    },
    {
      id: 11,
      titleKey: "pages.projects.project9_title",
      descKey: "pages.projects.project9_desc",
      tagsKey: "pages.projects.project9_tags",
      image: projectVideo,
      year: "2025-2026",
      link: "https://youtu.be/96uvvvGhVEE?si=wqfH-kA6IDTFe942",
      isInternal: false,
    },
  ];

  return (
    <div className="projects-container">
      {/* HEADER */}
      <section className="projects-header scroll-animate fade-in-up">
        <h1>{t("pages.projects.title")}</h1>
      </section>

      {/* GRIGLIA PROGETTI */}
      <section className="projects-section">
        <div className="projects-grid">
          {projects.reverse().map((project, index) => (
            <div
              key={project.id}
              className="project-card scroll-animate fade-in-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  loading="lazy"
                />
                <div className="project-overlay">
                  {project.isInternal ? (
                    <Link to={project.link} className="view-project">
                      View Project
                    </Link>
                  ) : (
                    <a
                      href={project.link}
                      className="view-project"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </div>
              <div className="project-info">
                <div className="project-year">{project.year}</div>
                <h3 className="project-title">{t(project.titleKey)}</h3>
                <p className="project-desc">{t(project.descKey)}</p>
                <div className="project-tags">
                  {t(project.tagsKey)
                    .split(", ")
                    .map((tag, i) => (
                      <span key={i} className="tag">
                        {tag}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
