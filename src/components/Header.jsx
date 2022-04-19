import React, {useState} from "react";
import "../componentStyles/header.css";
import { useNavigate } from "react-router-dom";

export default function Header({setLanguage}) {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/contacto`; 
    navigate(path);
  }

  const handleChange = (e) => {
    if(!e.target.mathces('.selectLanguage')) return;
    if(e.target.value === '1'){
      setLanguage('INGLÉS')
    }
    if(e.target.value === '2'){
      setLanguage('ESPAÑOL')
    }
  }
  return (
    <div className="header">
      <header className="top-header">
        <div className="title">
          <div className="menu-wrapper">
            <p className="logo">
              Link <span>IT</span>
            </p>
            <i className="fas fa-bars menu-hmb" aria-hidden="true"></i>
          </div>
          <div className="info">
            <p className="home-button">INICIO</p>
            <a className="empresas-button" href="/empresas">
              <p className="business">EMPRESAS</p>
            </a>
            <a className="candidates-button" href="/Candidatos">
              <p className="candidates">CANDIDATOS</p>
            </a>
            <p className="faqs">FAQS</p>
            <div className="select">
              <a href="/eng/empresas.html">
                <select className="selectLanguage" onChange={handleChange} name="language" id="idioma">
                  IDIOMA
                  <option value="1">ESPAÑOL</option>
                  <option value="2">INGLES</option>
                </select>
              </a>
            </div>
            <div className="button">
              <button type="submit" className="contact-button" onClick={routeChange}>
                CONTACTO
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
