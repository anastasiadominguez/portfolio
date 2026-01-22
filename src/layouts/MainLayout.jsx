import { Outlet, Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import logo from "/images/logoADBDef.png";
import "./MainLayout.css";

export default function MainLayout() {
  const { t, language, changeLanguage } = useLanguage();

  return (
    <>
      <div className="main-container">
        {/* HEADER */}
        <div className="top-bar">
          <div className="logo">
            <img src={logo} className="logo" alt="Logo" />
          </div>
          <div className="link">
            <Link to="/" className="link-item">
              {t("nav.home")}
            </Link>
            <Link to="/about" className="link-item">
              {t("nav.about")}
            </Link>
            <Link to="/projects" className="link-item">
              {t("nav.projects")}
            </Link>
            <Link to="/contact" className="link-item">
              {t("nav.contact")}
            </Link>
          </div>

          {/* LANGUAGE SWITCHER */}
          <div className="language-switcher">
            <button
              onClick={() => changeLanguage("en")}
              className={language === "en" ? "active" : ""}
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage("it")}
              className={language === "it" ? "active" : ""}
            >
              IT
            </button>
          </div>
        </div>

        {/* CONTENUTO DINAMICO (cambia in base alla pagina) */}
        <Outlet />

        {/* FOOTER */}
        <footer className="footer">
          <p>{t("footer.copyright")}</p>
        </footer>
      </div>
    </>
  );
}
