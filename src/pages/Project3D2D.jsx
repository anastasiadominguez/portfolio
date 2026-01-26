import { useLanguage } from "../LanguageContext";
import { useState } from "react";
import "./Project3D2D.css";
import anelloGiorno from "/3D/anello_giorno.png";
import anelloNotte from "/3D/anello_notte.png";
import barattolo from "/3D/barattolo.png";
import corridoio from "/3D/corridoio.png";
import dettaglioPortaIngresso from "/3D/dettaglio_porta_ingresso_glare.png";
import dettaglioSpada from "/3D/dettaglio_spada.png";
import ingressoGlare from "/3D/ingresso_glare.png";
import salottoNotteT2 from "/3D/salotto_notte_tot2.png";
import salottoT1Def from "/3D/salotto_tot1_def.png";
import salottoT2Def from "/3D/salotto_tot2_def.png";
import sedia from "/3D/sedia.png";
import tavoloAlto from "/3D/tavolo_alto.png";
import tavoloTot from "/3D/tavolo_tot.png";

export default function Project3D2D() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  // Array delle tue immagini di rendering
  const gallery = [
    {
      id: 1,
      src: anelloGiorno,
      alt: "Anello - Giorno",
    },
    {
      id: 2,
      src: anelloNotte,
      alt: "Anello - Notte",
    },
    {
      id: 3,
      src: barattolo,
      alt: "Barattolo",
    },
    {
      id: 4,
      src: corridoio,
      alt: "Corridoio",
    },
    {
      id: 5,
      src: dettaglioPortaIngresso,
      alt: "Dettaglio Porta Ingresso",
    },
    {
      id: 6,
      src: dettaglioSpada,
      alt: "Dettaglio Spada",
    },
    {
      id: 7,
      src: ingressoGlare,
      alt: "Ingresso - Glare",
    },
    {
      id: 8,
      src: salottoNotteT2,
      alt: "Salotto - Notte (Tot2)",
    },
    {
      id: 9,
      src: salottoT1Def,
      alt: "Salotto (Tot1)",
    },
    {
      id: 10,
      src: salottoT2Def,
      alt: "Salotto (Tot2)",
    },
    {
      id: 11,
      src: sedia,
      alt: "Sedia",
    },
    {
      id: 12,
      src: tavoloAlto,
      alt: "Tavolo Alto",
    },
    {
      id: 13,
      src: tavoloTot,
      alt: "Tavolo",
    },
  ];

  return (
    <div className="project-detail-container">
      <section className="project-hero">
        <h1>{t("pages.projects.project10_title")}</h1>
        <p className="project-year">2022-2023</p>
      </section>

      <section className="project-content">
        <div className="project-description">
          <p>{t("pages.projects.project10_desc")}</p>
        </div>

        {/* GALLERIA DI IMMAGINI */}
        <div className="project-gallery">
          <div className="gallery-grid">
            {gallery.map((image) => (
              <div
                key={image.id}
                className="gallery-item"
                onClick={() => setSelectedImage(image)}
              >
                <img src={image.src} alt={image.alt} />
                <div className="gallery-overlay">
                  <span>{t("pages.projects.cta")}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LIGHTBOX - IMMAGINE INGRANDITA */}
        {selectedImage && (
          <div className="lightbox" onClick={() => setSelectedImage(null)}>
            <div className="lightbox-content">
              <img src={selectedImage.src} alt={selectedImage.alt} />
              <button
                className="lightbox-close"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
