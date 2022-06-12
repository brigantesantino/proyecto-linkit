import React, { useState } from "react";
import "../../componentStyles/header.css";
import menuHambNegro from "../../images/menuHamburguesa.svg";
import MenuHamburguesa from "../MenuHamburguesa";

export default function HeaderENG() {

  const [menu, setMenu] = useState(false);

  return (
    <div className="header">
      <header className="top-header-component">
        <div className="title">
          <div className="menu-wrapper">
            <p className="logo-component">
              Link <span> IT</span>
            </p>
            <div className="menuHamb" onClick={() => setMenu(true)}>
              <img
                src={menuHambNegro}
                className="menuHamburguesaImagen"
                alt=""
              />
            </div>
            {menu && <MenuHamburguesa setMenu={setMenu} />}
          </div>
          <div className="info-component">
            <a href="/homeENG">
              <p className="button-component">HOME</p>
            </a>

            <a href="/empresasENG">
              <p className="button-component">BUSINESS</p>
            </a>

            <a href="/CandidatosENG">
              <p className="button-component">CANDIDATES</p>
            </a>
            <a href="/faqsENG">

            <p className="button-component">FAQs</p>

            </a>
            <div className="contenedor-idiomas-header">
              <a href="/homeENG" className="contenedor-bandera">
                <div className="idioma-component">ENG |</div>

                </a>

              <a className="contenedor-bandera" href="/home">
                <div className="idioma-component">ESP</div>
              </a>
            </div>
            <button type="submit" className="contact-button-component" >
              <a href="/contactoENG">
              CONTACT
              </a>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
