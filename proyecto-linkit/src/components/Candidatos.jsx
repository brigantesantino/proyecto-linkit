import React from "react";
//import "../componentStyles/candidatos.css";

export default function Candidatos() {
  return (
    <div>
        <div className="title">
          <div className="menu-wrapper">
            <p className="logo">
              Link <span>IT</span>
            </p>
            <i className="fas fa-bars menu-hmb" aria-hidden="true"></i>
          </div>
          <div className="info">
            <p className="home-button">INICIO</p>
            <a className="empresas-button" href="/empresas.html">
              <p className="business">EMPRESAS</p>
            </a>
            <a className="candidates-button" href="/Candidatos.html">
              <p className="candidates">CANDIDATOS</p>
            </a>
            <p className="faqs">FAQS</p>
            <div className="select">
              <a href="/eng/Candidates.html">
                <select name="language" id="idioma">
                  IDIOMA
                </select>
              </a>
              <option value="1">INGLÉS</option>
              <option value="2">ESPAÑOL</option>
            </div>
            <div className="button">
              <button type="submit" className="contact-button">
                CONTACTO
              </button>
            </div>
          </div>
        </div>
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
        <h4 className="puestos">ROLES ABIERTOS</h4>
        <div className="h1">
          <h1 className="question">
            ¿Estás buscando un cambio en tu camino profesional?
          </h1>
        </div>
        <h2 id="offers">Ofertas disponibles</h2>
        <div className="buttons buttons-desktop scrollbox">
          <div className="candidate-buttons">
            <a className="link-pupup" href="/popup.html">
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

            <a className="link-pupup" href="/popup.html">
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

            <a className="link-pupup" href="/popup.html">
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

            <a className="link-pupup" href="/popup.html">
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

            <a className="link-pupup" href="/popup.html">
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

            <a className="link-pupup" href="/popup.html">
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

            <a href="/popup.html">
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

            <a className="link-pupup" href="/popup.html">
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

            <a className="link-pupup" href="/popup.html">
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
        <h2 id="technologies">En estas tecnologías</h2>
        <div className="images">
          <div className="images-wrapper">
            <div className="logo google-img">
              <img alt="" src="/views/image 18.png" />
            </div>
            <div className="logo">
              <img alt="" src="/views/image 17.svg" />
            </div>
            <div className="logo">
              <img alt="" src="/views/image 20.svg" />
            </div>
            <div className="logo">
              <img alt="" src="/views/image 8.svg" />
            </div>
            <div className="logo">
              <img alt="" src="/views/image 9.svg" />
            </div>
            <div className="logo">
              <img alt="" src="/views/image 10.svg" />
            </div>
            <div className="logo">
              <img alt="" src="/views/image 12.svg" />
            </div>
            <div className="logo">
              <img alt="" src="/views/image 13.svg" />
            </div>
            <div className="logo">
              <img alt="" src="/views/image 14.svg" />
            </div>
            <div className="logo">
              <img alt="" src="/views/image 15.png" />
            </div>
            <div className="logo">
              <img alt="" src="/views/image 21.png" />
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
            <h3>Dirección</h3>
            <input type="text" />
            <h3>LinkedIn*</h3>
            <input type="text" />
            <h3>Experiencia</h3>
            <select name="info" className="experience">
              <option value="0"></option>
              <option value="1">xxxxxx</option>
              <option value="2">xxxxxx</option>
              <option value="3">xxxxxx</option>
              <option value="4">xxxxxx</option>
            </select>
          </div>
          <div className="details">
            <h3>Carga tu CV</h3>
            <div className="file">
              <label for="archive">
                +
                <input type="file" id="archive" />
              </label>
            </div>
            <h3>Remuneracion pretendida</h3>
            <div className="value">
              <select name="value">
                <option value="0"></option>
                <option value="1">ARS</option>
                <option value="2">USD</option>
                <input type="number" />
              </select>
            </div>
            <h3>Interesado en roles</h3>
            <select name="info">
              <option value="0"></option>
              <option value="1">xxxxxx</option>
              <option value="2">xxxxxx</option>
              <option value="3">xxxxxx</option>
              <option value="4">xxxxxx</option>
            </select>
            <h3>Cómo nos conociste</h3>
            <select name="info">
              <option value="0"></option>
              <option value="1">xxxxxx</option>
              <option value="2">xxxxxx</option>
              <option value="3">xxxxxx</option>
              <option value="4">xxxxxx</option>
            </select>
            <h3>Tecnologías</h3>
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
              <img alt="" src="/views/Vector.svg" />
            </a>
            <a
              className="gmail"
              href="https://www.gmail.com/mail/help/intl/es/about.html?iframe"
            >
              <img alt="" src="/views/Vector-1.svg" />
            </a>
            <a className="wpp" href="https://web.whatsapp.com/">
              <img alt="" src="/views/WhatsApp.svg" />
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
