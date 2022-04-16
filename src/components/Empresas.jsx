import React from "react";
import "../componentStyles/empresas.css";
import image17 from "../images/image 17.svg";
import image18 from "../images/image 18.png";
import image20 from "../images/image 20.svg";
import image8 from "../images/image 8.svg";
import image9 from "../images/image 9.svg";
import image10 from "../images/image 10.svg";
import image12 from "../images/image 12.svg";
import image13 from "../images/image 13.svg";
import image14 from "../images/image 14.svg";
import image15 from "../images/image 15.png";
import image21 from "../images/image 21.png";

import vector from "../images/Vector.svg";
import vector1 from "../images/Vector-1.svg";
import whatsApp from "../images/WhatsApp.svg";

import Header from "./Header";

export default function Empresas() {
  return (
    <div className="empresas">
      <Header />
      <nav id="sideNav">
        <ul className="side-menu">
          <li>
            <a href="index.html">INICIO</a>
          </li>
          <li>
            <a href="empresas.html">EMPRESAS</a>
          </li>
          <li>
            <a href="Candidatos.html">CANDIDATOS</a>
          </li>
          <li>
            <a href="FAQs.html">FAQs</a>
          </li>
        </ul>
      </nav>
      <main>
        <h4 className="search">BUSQUEDA</h4>
        <div className="h1">
          <h1 className="question">
            ¿Estás buscando talento tech para tu empresa?
          </h1>
        </div>
        <h2 id="rubros">Roles disponibles</h2>
        <div className="buttons-desktop">
          <div className="buttons">
            <button>
              <p>Software Developers</p>
            </button>
            <button>
              <p>QA (automation & manual)</p>
            </button>
            <button>
              <p>UX/UI Designers</p>
            </button>
            <button>
              <p>Proyect Managers</p>
            </button>
          </div>
          <div className="buttons2">
            <button>
              <p>Team Lead</p>
            </button>
            <button>
              <p>Big Data</p>
            </button>
            <button>
              <p>Web 3.0</p>
            </button>
          </div>
          <div className="buttons3">
            <button>
              <p>Machine learning</p>
            </button>
            <button>
              <p>Blockchain</p>
            </button>
          </div>
        </div>

        <div className="button-wrapper">
          <div className="scrollbox">
            <div className="buttons-mobile">
              <button>
                <p>Software Developers</p>
              </button>
              <button>
                <p>QA (automation & manual)</p>
              </button>
              <button>
                <p>UX/UI Designers</p>
              </button>
              <button>
                <p>IT Proyect managers</p>
              </button>

              <button>
                <p>Team Leaders</p>
              </button>
              <button>
                <p>Big Data</p>
              </button>
              <button>
                <p>Web 3.0</p>
              </button>

              <button>
                <p>Machine learning</p>
              </button>
              <button>
                <p>Blockchain</p>
              </button>
            </div>
          </div>
        </div>

        <h2 id="technologies">En estas tecnologías</h2>

        <div className="images">
          <div className="images-wrapper">
            <div className="logo google-img">
              <img alt="" src={image18} />
            </div>
            <div className="logo">
              <img alt="" src={image17} />
            </div>
            <div className="logo">
              <img alt="" src={image20} />
            </div>
            <div className="logo">
              <img alt="" src={image8} />
            </div>
            <div className="logo">
              <img alt="" src={image9} />
            </div>
            <div className="logo">
              <img alt="" src={image10} />
            </div>
            <div className="logo">
              <img alt="" src={image12} />
            </div>
            <div className="logo">
              <img alt="" src={image13} />
            </div>
            <div className="logo">
              <img alt="" src={image14} />
            </div>
            <div className="logo">
              <img alt="" src={image15} />
            </div>
            <div className="logo">
              <img alt="" src={image21} />
            </div>
          </div>
        </div>
        <div>
          <h2 id="contacto">Contacto</h2>
        </div>
        <form>
          <div className="inputs">
            <h3>Nombre</h3>
            <input type="text" />
            <h3>Email</h3>
            <input type="email" />
            <h3>LinkedIn*</h3>
            <input type="text" />
            <h3>Motivo de contacto</h3>
            <input type="text" />
          </div>
          <div className="details">
            <h3>Interesado en roles</h3>
            <div className="checkboxes">
              <div className="checkbox-1">
                <div style={{ display: "flex" }}>
                  <input type="checkbox" />
                  <p>Software Developers</p>
                </div>
                <div style={{ display: "flex" }}>
                  <input type="checkbox" />
                  <p>QA</p>
                </div>
                <div style={{ display: "flex" }}>
                  <input type="checkbox" />
                  <p>UX/UI Designers</p>
                </div>
              </div>
              <div className="checkbox-2">
                <div style={{ display: "flex" }}>
                  <input type="checkbox" />
                  <p>Project Managers</p>
                </div>
                <div style={{ display: "flex" }}>
                  <input type="checkbox" />
                  <p>Team Lead</p>
                </div>
                <div style={{ display: "flex" }}>
                  <input type="checkbox" />
                  <p>Big Data</p>
                </div>
              </div>
              <div className="checkbox-3">
                <div style={{ display: "flex" }}>
                  <input type="checkbox" />
                  <p>Machine learning</p>
                </div>
                <div style={{ display: "flex" }}>
                  <input type="checkbox" />
                  <p>Web 3.0</p>
                </div>
                <div style={{ display: "flex" }}>
                  <input type="checkbox" />
                  <p>Blockchain</p>
                </div>
              </div>
            </div>
            <input className="inp" type="textarea" placeholder="Otros..." />
            <h3>Cómo nos conociste</h3>
            <select name="info">
              <option value="0"></option>
              <option value="1">xxxxxx</option>
              <option value="2">xxxxxx</option>
              <option value="3">xxxxxx</option>
              <option value="4">xxxxxx</option>
            </select>
            <h3 className="mensaje">Mensaje</h3>
            <textarea name="message"></textarea>
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
      </main>
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
            <a href="/eng/empresas.html">
              <select name="language" id="">
                IDIOMA
                <option value="1">INGLÉS</option>
                <option value="2">ESPAÑOL</option>
              </select>
            </a>
          </div>
        </div>
        <div className="rights">
          <p>© 2022 LinkIT. All rights reserved.</p>
          <div className="linea">
            <p>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
          </div>
          <p>Developed by IT-TECHGROUP</p>
        </div>
      </footer>

      {/* <script>
        const $btn = document.querySelector(".menu-hmb");
        const $sideNav  = document.getElementById('sideNav');

        document.addEventListener('click', e=>{
            $sideNav.style.right = "-250px"

            if(e.target.matches('.menu-hmb')){
                if ($sideNav.style.right == "-250px"){
				
				    $sideNav.style.right = "0";
			
			    }
            }
        })
    </script> */}
    </div>
  );
}
