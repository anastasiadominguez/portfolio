import { useLanguage } from "../LanguageContext";
import photo from "/images/photo.JPG";
import "./Home.css";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="home-container">
      <div className="intro">
        <div className="intro-text">
          <h1>{t("pages.home.name")}</h1>
          <p className="subtitle">{t("pages.home.subtitle")}</p>
        </div>
        <div className="intro-image">
          <img src={photo} alt="Anastasia" className="profile-photo" />
        </div>
      </div>
    </div>
  );
}
