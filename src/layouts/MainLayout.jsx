import { Outlet, Link, useLocation } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import logo from "/images/logoADBDef.png";
import "./MainLayout.css";

export default function MainLayout() {
  const { t, language, changeLanguage } = useLanguage();
  const location = useLocation();

  return (
    <>
      <div className="main-container">
        {/* HEADER */}
        <div className="top-bar">
          <div className="logo">
            <img src={logo} className="logo" alt="Logo" />
          </div>
          <nav className="link">
            <Link
              to="/"
              className={`link-item ${location.pathname === "/" ? "active" : ""}`}
            >
              {t("nav.home")}
            </Link>
            <Link
              to="/about"
              className={`link-item ${location.pathname === "/about" ? "active" : ""}`}
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/projects"
              className={`link-item ${location.pathname === "/projects" ? "active" : ""}`}
            >
              {t("nav.projects")}
            </Link>
            <Link
              to="/contact"
              className={`link-item ${location.pathname === "/contact" ? "active" : ""}`}
            >
              {t("nav.contact")}
            </Link>
          </nav>

          {/* LANGUAGE SWITCHER */}
          <div className="language-switcher">
            <button
              onClick={() => changeLanguage("en")}
              className={`lang-btn ${language === "en" ? "active" : ""}`}
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage("it")}
              className={`lang-btn ${language === "it" ? "active" : ""}`}
            >
              IT
            </button>
          </div>
        </div>

        {/* CONTENUTO DINAMICO */}
        <div className="page-content">
          <Outlet />
        </div>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-copyright">
            <p>{t("footer.copyright")}</p>
          </div>
        </footer>
      </div>
    </>
  );
}
