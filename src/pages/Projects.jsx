import { useLanguage } from "../LanguageContext";
import "./Projects.css";

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      titleKey: "pages.projects.project1_title",
      descKey: "pages.projects.project1_desc",
      tagsKey: "pages.projects.project1_tags",
      year: "2024-2025",
    },
    {
      id: 2,
      titleKey: "pages.projects.project2_title",
      descKey: "pages.projects.project2_desc",
      tagsKey: "pages.projects.project2_tags",
      year: "2024",
    },
    {
      id: 3,
      titleKey: "pages.projects.project3_title",
      descKey: "pages.projects.project3_desc",
      tagsKey: "pages.projects.project3_tags",
      year: "2023-2024",
    },
    {
      id: 4,
      titleKey: "pages.projects.project4_title",
      descKey: "pages.projects.project4_desc",
      tagsKey: "pages.projects.project4_tags",
      year: "2023",
    },
    {
      id: 5,
      titleKey: "pages.projects.project5_title",
      descKey: "pages.projects.project5_desc",
      tagsKey: "pages.projects.project5_tags",
      year: "2022-2023",
    },
  ];

  return (
    <div className="projects-container">
      <div className="projects-content">
        {/* TITOLO */}
        <section className="projects-header">
          <h1>{t("pages.projects.title")}</h1>
        </section>

        {/* GRIGLIA PROGETTI */}
        <section className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-year">{project.year}</div>
              <h3 className="project-title">{t(project.titleKey)}</h3>
              <p className="project-desc">{t(project.descKey)}</p>
              <div className="project-tags">
                {t(project.tagsKey)
                  .split(", ")
                  .map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
