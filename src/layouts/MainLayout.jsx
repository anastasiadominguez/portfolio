import { Outlet, Link, useLocation } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import logo from "/images/logoADBDef.png";
import "./MainLayout.css";
import { useState } from "react";

export default function MainLayout() {
  const { t, language, changeLanguage } = useLanguage();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="main-container">
        {/* HEADER */}
        <div className="top-bar">
          <div className="logo">
            <img src={logo} className="logo" alt="Logo" />
          </div>

          {/* HAMBURGER BUTTON */}
          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`links ${menuOpen ? "active" : ""}`}>
            <Link
              to="/"
              className={`link-item ${location.pathname === "/" ? "active" : ""}`}
              onClick={closeMenu}
            >
              {t("nav.home")}
            </Link>
            <Link
              to="/about"
              className={`link-item ${location.pathname === "/about" ? "active" : ""}`}
              onClick={closeMenu}
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/projects"
              className={`link-item ${location.pathname === "/projects" ? "active" : ""}`}
              onClick={closeMenu}
            >
              {t("nav.projects")}
            </Link>
            <Link
              to="/contact"
              className={`link-item ${location.pathname === "/contact" ? "active" : ""}`}
              onClick={closeMenu}
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
