import { useLanguage } from "../LanguageContext";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">{t("pages.notfound.title")}</h2>
        <p className="notfound-message">{t("pages.notfound.message")}</p>
        <Link to="/" className="notfound-link">
          {t("pages.notfound.back_home")}
        </Link>
      </div>
    </div>
  );
}
