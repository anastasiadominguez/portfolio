import { useLanguage } from "../LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="page-content">
      <h1>{t("pages.about.title")}</h1>
      <p>{t("pages.about.description")}</p>
    </div>
  );
}
