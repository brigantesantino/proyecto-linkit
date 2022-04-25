import React from "react";
import "../componentStyles/candidatos.css";

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

      /* {/* <script>
        {/* {
          document.addEventListener('click', e => {
            sideNav.style.right = "-250px"

            if (e.target.matches('.menu-hmb')) {
              if (sideNav.style.right == "-250px") {

                sideNav.style.right = "0";

              }
            }
          })
     //   } */
    //  </script> */} */


export default function Candidatos() {
  /* const btn = document.querySelector(".menu-hmb");
  const sideNav = document.getElementById('sideNav'); */

  return (
    <div className="candidatos">
      <Header />
      <nav id="sideNav">
        <ul className="side-menu">
          <li>
            <a href="index.html">HOME</a>
          </li>
          <li>
            |<a href="empresas.html">COMPANY</a>
          </li>
          <li>
            <a href="Candidatos.html">CANDIDATES</a>
          </li>
          <li>
            <a href="FAQs.html">FAQs</a>
          </li>
        </ul>
      </nav>
      <main>
        <h4 className="puestos">FEATURED POSTS</h4>
        <div className="h1">
          <h1 className="question">
          Are you looking for a change in your professional path?
          </h1>
        </div>
        <h2 id="offers">Available offers</h2>
        <div className="buttons buttons-desktop scrollbox">
          <div className="candidate-buttons">
            <a className="link-pupup" href="/popup">
              <button>
                <h2 className="designer">
                  UX Designer<span className="google">123456</span>
                </h2>
                <h3 className="adress">
                  Ubicacion:Buenos Aires,Argentina
                  <span className="date">Fecha de creacion:23/02/2022</span>
                </h3>
                <h3 className="date-mobile">Fecha de creacion:23/02/2022</h3>
              </button>
            </a>

            <a className="link-pupup" href="/popup">
              <button>
                <h2 className="designer">
                  UX Designer<span className="google">123456</span>
                </h2>
                <h3 className="adress">
                  Ubicacion:Buenos Aires,Argentina
                  <span className="date">Fecha de creacion:23/02/2022</span>
                </h3>
                <h3 className="date-mobile">Fecha de creacion:23/02/2022</h3>
              </button>
            </a>

            <a className="link-pupup" href="/popup">
              <button>
                <h2 className="designer">
                  UX Designer<span className="google">123456</span>
                </h2>
                <h3 className="adress">
                  Ubicacion:Buenos Aires,Argentina
                  <span className="date">Fecha de creacion:23/02/2022</span>
                </h3>
                <h3 className="date-mobile">Fecha de creacion:23/02/2022</h3>
              </button>
            </a>

            <a className="link-pupup" href="/popup">
              <button>
                <h2 className="designer">
                  UX Designer<span className="google">123456</span>
                </h2>
                <h3 className="adress">
                  Ubicacion:Buenos Aires,Argentina
                  <span className="date">Fecha de creacion:23/02/2022</span>
                </h3>
                <h3 className="date-mobile">Fecha de creacion:23/02/2022</h3>
              </button>
            </a>

            <a className="link-pupup" href="/popup">
              <button>
                <h2 className="designer">
                  UX Designer<span className="google">123456</span>
                </h2>
                <h3 className="adress">
                  Ubicacion:Buenos Aires,Argentina
                  <span className="date">Fecha de creacion:23/02/2022</span>
                </h3>
                <h3 className="date-mobile">Fecha de creacion:23/02/2022</h3>
              </button>
            </a>

            <a className="link-pupup" href="/popup">
              <button>
                <h2 className="designer">
                  UX Designer<span className="google">123456</span>
                </h2>
                <h3 className="adress">
                  Ubicacion:Buenos Aires,Argentina
                  <span className="date">Fecha de creacion:23/02/2022</span>
                </h3>
                <h3 className="date-mobile">Fecha de creacion:23/02/2022</h3>
              </button>
            </a>

            <a href="/popup">
              <button>
                <h2 className="designer">
                  UX Designer<span className="google">123456</span>
                </h2>
                <h3 className="adress">
                  Ubicacion:Buenos Aires,Argentina
                  <span className="date">Fecha de creacion:23/02/2022</span>
                </h3>
                <h3 className="date-mobile">Fecha de creacion:23/02/2022</h3>
              </button>
            </a>

            <a className="link-pupup" href="/popup">
              <button>
                <h2 className="designer">
                  UX Designer<span className="google">123456</span>
                </h2>
                <h3 className="adress">
                  Ubicacion:Buenos Aires,Argentina
                  <span className="date">Fecha de creacion:23/02/2022</span>
                </h3>
                <h3 className="date-mobile">Fecha de creacion:23/02/2022</h3>
              </button>
            </a>

            <a className="link-pupup" href="/popup">
              <button>
                <h2 className="designer">
                  UX Designer<span className="google">123456</span>
                </h2>
                <h3 className="adress">
                  Ubicacion:Buenos Aires,Argentina
                  <span className="date">Fecha de creacion:23/02/2022</span>
                </h3>
                <h3 className="date-mobile">Fecha de creacion:23/02/2022</h3>
              </button>
            </a>
          </div>
        </div>
        <h2 id="technologies">On this tecnologies</h2>
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
          <h2 id="contacto">Contact</h2>
        </div>
        <form>
          <div className="inputs">
            <h3>Name</h3>
            <input type="text" />
            <h3>Email</h3>
            <input type="email" />
            <h3>Adress</h3>
            <input type="text" />
            <h3>LinkedIn*</h3>
            <input type="text" />
            <h3>Experience</h3>
            <select name="info" className="experience">
              <option value="0"></option>
              <option value="1">xxxxxx</option>
              <option value="2">xxxxxx</option>
              <option value="3">xxxxxx</option>
              <option value="4">xxxxxx</option>
            </select>
          </div>
          <div className="details">
            <h3>Load your CV</h3>
            <div className="file">
              <label form="archive">
                +
                <input type="file" id="archive" />
              </label>
            </div>
            <h3>Intended remuneration</h3>
            <div className="value">
              <select name="value">
                <option value="0">Elegir</option>
                <option value="1">ARS</option>
                <option value="2">USD</option>
              </select>
              <input type="number"/>
            </div>
            <h3>Interesed en roles</h3>
            <select name="info">
              <option value="0"></option>
              <option value="1">xxxxxx</option>
              <option value="2">xxxxxx</option>
              <option value="3">xxxxxx</option>
              <option value="4">xxxxxx</option>
            </select>
            <h3>How did you meet us</h3>
            <select name="info">
              <option value="0"></option>
              <option value="1">xxxxxx</option>
              <option value="2">xxxxxx</option>
              <option value="3">xxxxxx</option>
              <option value="4">xxxxxx</option>
            </select>
            <h3>Tecnologies</h3>
            <select name="info">
              <option value="0"></option>
              <option value="1">xxxxxx</option>
              <option value="2">xxxxxx</option>
              <option value="3">xxxxxx</option>
              <option value="4">xxxxxx</option>
            </select>
            <div className="condition">
              <div className="acept-conditions">
                <input type="checkbox" className="terms" />
                <h3>Agree legal conditions</h3>
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
            <a href="/eng/Candidates.html">
              <select name="language" id="">
                Lenguage
                <option value="1">ESPAÑOL</option>
                <option value="2">INGLÉS</option>
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
    </div>
  );
}