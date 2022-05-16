import React from "react";
import Header from "./Header";
import "../componentStyles/contact.css";
import vectorFondo from "../images/vectorFondo.svg"
import vector from "../images/Vector.svg";
import vector1 from "../images/Vector-1.svg";
import whatsApp from "../images/WhatsApp.svg";
import USA from "../images/banderaUsa.png"
import ARG from "../images/banderaArg.png"


export default function Contacto() {
  return (
    <div className="contacto">
        <Header />
        <div className="background">
            <img className="img_back1" src={vectorFondo}/>
            <img className="img_back2" src={vectorFondo}/>
            
        </div>
        <div className="contenedor-cuestion">
          <h1 className="cuestion">¿Tenés alguna consulta?</h1>
          <h2 className="exclamation">¡CONTÁCTANOS!</h2>
        </div>

        <form>
        <div  className="inputs">
          <h3>Nombre*</h3>
          <input className="nuevo-input" placeholder="Nombre"  type="text" />
          <h3>Email*</h3>
          <input className="nuevo-input" placeholder="Email" type="email" />
          <h3>Motivo de contacto</h3>
          <input className="nuevo-input" placeholder="¿Por qué nos contactaste?" type="text" />
          <h3>Mensaje</h3>
          <input className="nuevo-input" placeholder="Mensaje" type="text" />
          

          <div className="conditionss">
            <div className="acept-conditions">
              <input type="checkbox" className="terms" />
              <p className="acept-text">Aceptar condiciones legales</p>
            </div>
            <div className="contenedor-sumb">
              <button type="submit" className="send-button">
                Enviar
              </button>
            </div>
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
            target="_blank"
              className="linkedin"
              href="https://www.linkedin.com/company/linkit-hr/"
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
        <div className="info-candidatos">
          <a href="/home">
          <p className="footer-button">INICIO</p>
          </a>
          <a className="empresas-button" href="/empresas">
            <p className="footer-button">EMPRESAS</p>
          </a>
          <a href="/Candidatos">
          <p className="footer-button">CANDIDATOS</p>
          </a>
          <a href="/faqs">
          <p className="footer-button">FAQS</p>
          </a>
          <div className="contenedor-idiomas">
              <a href="/homeENG" className="contenedor-bandera">
                <img className="emojiBandera" src={USA} alt="" />
                <div className="idioma-component">ENG</div>
                </a>
              <a className="contenedor-bandera" href="/home">
                <img className="emojiBandera" src={ARG} alt="" />
                <div className="idioma-component">ESP</div>
              </a>
            </div>
        </div>
        <div className="rights-candidatos">
          <p>© 2022 LinkIT. All rights reserved.</p>
        </div>
      </footer>
  
      {/* <footer>
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
        
      </footer> */}
    </div>
  );
}
    