import { useLanguage } from "../LanguageContext";
import { useState } from "react";
import "./ProjectThesis.css";
import utente01 from "/thesis/Utente01.jpg";
import utente02 from "/thesis/Utente02.jpg";
import utente03 from "/thesis/Utente03.jpg";
import utente04 from "/thesis/Utente04.jpg";
import utente05 from "/thesis/Utente05.jpg";
import visitaGuidataFoto from "/thesis/VisitaGuidataFoto.jpg";
import dispAnimBandiera from "/thesis/DISP_AnimBandiera.jpg";
import dispAnimBottiglia from "/thesis/DISP_AnimBottiglia.jpg";
import dispAnimCamion from "/thesis/DISP_AnimCamion.jpg";
import dispAnimCampi from "/thesis/DISP_AnimCampi.jpg";
import dispAnimCella from "/thesis/DISP_AnimCella.jpg";
import dispAnimLampione from "/thesis/DISP_AnimLampione.jpg";
import dispAnimScatoletta from "/thesis/DISP_AnimScatoletta.jpg";
import dispAnimSoldato from "/thesis/DISP_AnimSoldato.jpg";
import dispAnimVoltoFemminile from "/thesis/DISP_AnimVoltoFemminile.jpg";
import dispAnimVoltoMaschile from "/thesis/DISP_AnimVoltoMaschile.jpg";
import dispAreaGuidalInquadramentoQR from "/thesis/DISP_AreaGuidaInquadramentoQR.jpg";
import dispCadutaLettere from "/thesis/DISP_CadutaLettere.jpg";
import dispFoto from "/thesis/DISP_Foto.jpg";
import dispIntro02 from "/thesis/DISP_Intro02.jpg";
import dispLettereFrente from "/thesis/DISP_LettereFronte.jpg";
import dispLettereRetro from "/thesis/DISP_LettereRetro.jpg";
import dispLingue from "/thesis/DISP_Lingue.jpg";
import dispPortaleVirtualeDentro from "/thesis/DISP_PortaleVirtualeDentro.jpg";
import dispPortaleVirtualeFuori from "/thesis/DISP_PortaleVirtualeFuori.jpg";
import dispPosizionamentoFoto from "/thesis/DISP_PosizionamentoFoto.jpg";
import dispScatoletta from "/thesis/DISP_Scatoletta.jpg";
import dispTutorial01 from "/thesis/DISP_Tutorial01.jpg";
import dispTutorial02 from "/thesis/DISP_Tutorial02.jpg";
import video from "/videos/Teaser_Progetto_Tesi.mp4";

export default function ProjectThesis() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  const gallery = [
    // SEZIONE UTENTE
    {
      id: 1,
      src: utente01,
      alt: "Utente Test 01",
      category: "User Testing",
    },
    {
      id: 2,
      src: utente02,
      alt: "Utente Test 02",
      category: "User Testing",
    },
    {
      id: 3,
      src: utente03,
      alt: "Utente Test 03",
      category: "User Testing",
    },
    {
      id: 4,
      src: utente04,
      alt: "Utente Test 04",
      category: "User Testing",
    },
    {
      id: 5,
      src: utente05,
      alt: "Utente Test 05",
      category: "User Testing",
    },
    {
      id: 6,
      src: visitaGuidataFoto,
      alt: "Visita Guidata Foto",
      category: "User Testing",
    },

    // SEZIONE DISPLAY / INTERFACE
    {
      id: 7,
      src: dispAnimBandiera,
      alt: "Display - Bandiera Animata",
      category: "Display Interface",
    },
    {
      id: 8,
      src: dispAnimBottiglia,
      alt: "Display - Bottiglia Animata",
      category: "Display Interface",
    },
    {
      id: 9,
      src: dispAnimCamion,
      alt: "Display - Camion Animato",
      category: "Display Interface",
    },
    {
      id: 10,
      src: dispAnimCampi,
      alt: "Display - Campi Animati",
      category: "Display Interface",
    },
    {
      id: 11,
      src: dispAnimCella,
      alt: "Display - Cella Animata",
      category: "Display Interface",
    },
    {
      id: 12,
      src: dispAnimLampione,
      alt: "Display - Lampione Animato",
      category: "Display Interface",
    },
    {
      id: 13,
      src: dispAnimScatoletta,
      alt: "Display - Scatoletta Animata",
      category: "Display Interface",
    },
    {
      id: 14,
      src: dispAnimSoldato,
      alt: "Display - Soldato Animato",
      category: "Display Interface",
    },
    {
      id: 15,
      src: dispAnimVoltoFemminile,
      alt: "Display - Volto Femminile Animato",
      category: "Display Interface",
    },
    {
      id: 16,
      src: dispAnimVoltoMaschile,
      alt: "Display - Volto Maschile Animato",
      category: "Display Interface",
    },
    {
      id: 17,
      src: dispAreaGuidalInquadramentoQR,
      alt: "Display - Area Guida QR",
      category: "Display Interface",
    },
    {
      id: 18,
      src: dispCadutaLettere,
      alt: "Display - Caduta Lettere",
      category: "Display Interface",
    },
    {
      id: 19,
      src: dispFoto,
      alt: "Display - Foto",
      category: "Display Interface",
    },
    {
      id: 20,
      src: dispIntro02,
      alt: "Display - Introduzione 02",
      category: "Display Interface",
    },
    {
      id: 21,
      src: dispLettereFrente,
      alt: "Display - Lettere Fronte",
      category: "Display Interface",
    },
    {
      id: 22,
      src: dispLettereRetro,
      alt: "Display - Lettere Retro",
      category: "Display Interface",
    },
    {
      id: 23,
      src: dispLingue,
      alt: "Display - Lingue",
      category: "Display Interface",
    },
    {
      id: 24,
      src: dispPortaleVirtualeDentro,
      alt: "Display - Portale Virtuale Dentro",
      category: "Display Interface",
    },
    {
      id: 25,
      src: dispPortaleVirtualeFuori,
      alt: "Display - Portale Virtuale Fuori",
      category: "Display Interface",
    },
    {
      id: 26,
      src: dispPosizionamentoFoto,
      alt: "Display - Posizionamento Foto",
      category: "Display Interface",
    },
    {
      id: 27,
      src: dispScatoletta,
      alt: "Display - Scatoletta",
      category: "Display Interface",
    },
    {
      id: 28,
      src: dispTutorial01,
      alt: "Display - Tutorial 01",
      category: "Display Interface",
    },
    {
      id: 29,
      src: dispTutorial02,
      alt: "Display - Tutorial 02",
      category: "Display Interface",
    },
  ];

  return (
    <div className="project-detail-container">
      <section className="project-hero">
        <h1>{t("pages.projects.project2_title")}</h1>
        <p className="project-year">2025</p>
      </section>

      <section className="project-content">
        {/* VIDEO TEASER */}
        <div className="video-section">
          <h2>Teaser</h2>
          <div className="video-container">
            <iframe
              width="100%"
              height="600"
              src={video}
              title="Thesis Teaser"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* LINK ALLA TESI */}
        <div className="thesis-link-section">
          <a
            href="http://webthesis.biblio.polito.it/id/eprint/38837"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button cta-primary"
          >
            {t("pages.projects.thesis_read")} →
          </a>
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
