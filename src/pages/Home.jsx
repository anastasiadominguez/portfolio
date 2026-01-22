import { useLanguage } from "../LanguageContext";
import photo from "/images/photo.JPG";
import "./Home.css";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="intro">
      <div className="intro-text">{t("pages.home.name")}</div>
      <div className="intro-image">
        <img src={photo} alt="Intro" />
      </div>
    </div>
  );
}
