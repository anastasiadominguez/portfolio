import { useLanguage } from "../LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="page-content">
      <h1>{t("pages.contact.title")}</h1>
      <p>{t("pages.contact.email")}</p>
    </div>
  );
}
