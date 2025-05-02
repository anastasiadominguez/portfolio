import { useState } from "react";
import logo from "/images/logoADB.png";
import photo from "/images/photo.JPG";
import "./App.css";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="top-bar">
          <div className="logo">
            <img src={logo} className="logo" alt="Vite logo" />
          </div>
          <div className="link">
            <div className="link-item">Home</div>
            <div className="link-item">Chi sono</div>
            <div className="link-item">Progetti</div>
            <div className="link-item">Contatti</div>
          </div>
        </div>
        <div className="intro">
          <div className="intro-text">Anastasia Dominguez Burzio</div>
          <div className="intro-image">
            <img src={photo} alt="Intro" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
