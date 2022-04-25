import React from "react";
import Header from "./Header";
import "../componentStyles/contact.css";

import vector from "../images/Vector.svg";
import vector1 from "../images/Vector-1.svg";
import whatsApp from "../images/WhatsApp.svg";


export default function Contacto() {
  return (
    <div className="contacto">
        <Header />
        <form>
        <div className="inputs">
          <h3>Nombre</h3>
          <input type="text" />
          <h3>Email</h3>
          <input type="email" />
          <h3>Dirección</h3>
          <input type="text" />
          <h3>Linkedin*</h3>
          <input type="text" />
          

          <div className="condition">
            <div className="acept-conditions">
              <input type="checkbox" className="terms" />
              <h3>Aceptar condiciones legales</h3>
            </div>
            <button type="submit" className="send-button">
              Enviar
            </button>
          </div>
        </div>
      </form>
      <footer>
        <div className="footer">
          <h4>
            Link<span>IT</span>
          </h4>
          <div className="social-media">
            <a
              className="linkedin"
              href="https://r.search.yahoo.com/_ylt=AwrCmnoYc0NiNFIAUBDX9wt.;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1648616345/RO=10/RU=https%3a%2f%2far.linkedin.com%2f/RK=2/RS=NOL2bRj1EEkj6dfnPKWAHekJg74-"
            >
              <img alt="" src={vector} />
            </a>
            <a
              className="gmail"
              href="https://www.gmail.com/mail/help/intl/es/about.html?iframe"
            >
              <img alt="" src={vector1} />
            </a>
            <a className="wpp" href="https://web.whatsapp.com/">
              <img alt="" src={whatsApp} />
            </a>
          </div>
        </div>
        <div className="info">
          <p className="home-button">INICIO</p>
          <a className="empresas-button" href="/empresas.html">
            <p className="business">EMPRESAS</p>
          </a>
          <p className="candidates">CANDIDATOS</p>
          <p className="faqs">FAQS</p>
          <div className="select">
            <a href="/eng/Candidates.html">
              <select name="language" id="">
                IDIOMA
                <option value="1">ESPAÑOL</option>
                <option value="2">INGLÉS</option>
              </select>
            </a>
          </div>
        </div>
        <div className="rights">
          <p>© 2022 LinkIT. All rights reserved...</p>
          <div className="linea">
            <p>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
          </div>
          <p>Developed by IT-TECHGROUP</p>
        </div>
        
      </footer>
    </div>
  );
}
    