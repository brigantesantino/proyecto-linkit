import React, {useState} from "react";

import ModalContactoENG from "./ModalContactoENG"
import MenuHamburguesaENG from "./MenuHamburguesaENG";
import vectorFondo from "../../images/vectorFondo.svg";
import logoTres from "../../images/LogoTres.svg";
import menuHamb from "../../images/menuHamburguesaBlanco.png";
import carafeliz from "../../images/manos.png";
import eficiencia from "../../images/eficiencia.png";
import velocidad from "../../images/auto.png";
import seguridad from "../../images/candado.png";

import vector from "../../images/Vector.svg"
import vector1 from "../../images/Vector-1.svg";
import whatsApp from "../../images/WhatsApp.svg"

import "../../componentStyles/home.css";

export default function IndexENG() {
    const [style, setStyle] = useState("style");
    const [styleNormal2, setStyle2] = useState("style");
    const [styleNormal3, setStyle3] = useState("style");
    const [styleNormal4, setStyle4] = useState("style");
    const [modalContacto, setModalContacto] = useState(false);
    const [menu, setMenu] = useState(false);

    const changeStyle = () => {
        style === "styleDos" ? setStyle("style"):setStyle("styleDos")
        };
    const changeStyle2 = () => {
        styleNormal2 === "style2" ? setStyle2("style"):setStyle2("style2")
        };
    const changeStyle3 = () => {
        styleNormal3 === "style3" ? setStyle3("style"):setStyle3("style3")
        };
    const changeStyle4 = () => {
        styleNormal4 === "style4" ? setStyle4("style"):setStyle4("style4")
        };
  return (
    <div className="body">
      <header className="top-header">
      <div className="title">
            <div className="menu-wrapper">
                <p className="logo">Link<span>IT</span></p>
                <div className="menuHamb" onClick={() => setMenu(true)}>
                    <img src={menuHamb} className="menuHamburguesaImagen" alt="" />
                </div>
                {menu && <MenuHamburguesaENG setMenu={setMenu}/>}
            </div>
            <div className="info">
                <div className="contenedorNav">
                    <a href="./homeENG" className="empresas-button">
                        <p className="home-button">HOME</p>
                    </a>
                    <a className="empresas-button" href="/empresasENG">
                        <p className="business">BUSINESS</p>
                    </a>                    
                    <a className="empresas-button" href="/candidatoseng">
                        <p className="candidates">CANDIDATES</p>
                    </a>
                    <a href="./faqsENG" className="empresas-button">
                        <p className="faqs"  >FAQS</p>
                    </a>
                    <div className="contenedor-idiomas">
              <a href="/homeENG" className="contenedor-bandera">
                <div className="idioma-component">ENG</div>
                </a>
              <a className="contenedor-bandera" href="/home">
                <div className="idioma-component">ESP</div>
              </a>
            </div>
                        <button className="contact-button" onClick={() => setModalContacto(true)}>CONTACT</button>
                    {modalContacto && <ModalContactoENG setModalContacto={setModalContacto} />}
                </div>

            </div>
        </div>
        </header>
       <main className="mainHome">
       <div className="background-home">
            <img className="img_back1" src={vectorFondo} alt=""/>
            <img className="img_back2" src={vectorFondo} alt=""/>
        </div>  

        <div className="contenedorTitle_main">
            <div className ="contenedor_main" >
                <div className="contenedorText_main">
                    <div className="atention_main">We Are Hiring!</div>
                    <div className="preg_main">Are you looking for <span>top talent selection </span> services in the tech industry world?</div>
                    <div className="service_main">At Linkit, both companies looking for new trained employees, as well as candidates who want to grow professionally</div>
                    <a href="#section" className="bMasInfo" id="colorBlanco">
                        More Information
                    </a>
                </div>
                <div className="cont_ilustration">
                    <img className="img_main"  alt=""/>
                </div>
            </div>
        </div>
        </main> 
        <section className="section_abaut" >
        <div className="contenedorCards_about" id="section">
            <div className="cardDetails_abaut" id="myBtn1" onClick={changeStyle}>
                <div>
                    <img className="img-home" src={carafeliz} alt="" />
                </div>
                <div>
                    <div className="confianza_about">Confianza</div>
                    <p className={style}>Equipo de consultores especializados en el área TECH.</p>
                </div>
            </div>


            <div className="cardDetails_abaut" id="myBtnVelocidad" onClick={changeStyle2}>
                <div>
                    <img className="img-home" src={velocidad} alt=""/>
                </div>
                <div>
                    <div className="confianza_about">Velocidad</div>
                    <p className={styleNormal2}>2 Semanas de espera desde el cierre del perfil necesitado.</p>
                </div>
            </div>

            <div className="cardDetails_abaut" id="myBtnEficiencia" onClick={changeStyle3}>
                <div>
                    <img className="img-home" src={eficiencia} alt=""/>
                </div>
                <div>
                    <div className="confianza_about">Eficiencia</div>
                    <p className={styleNormal3}>Equipo de consultores especializados en el área TECH.</p>
                </div>
            </div>

            <div className="cardDetails_abaut" id="myBtnSeguridad" onClick={changeStyle4}>
                <div>
                    <img className="img-home" src={seguridad} alt=""/>
                </div>
                <div >
                    <div className="confianza_about">Seguridad</div>
                    <p className={styleNormal4}>Equipo de consultores especializados en el área TECH.</p>
                </div>
            </div>
        </div>
    </section>
    <section>

        <div className="contenedorContratoAbout">
            <div className="contenedorContrato">
                <div>
                    Contrato
                </div>
            </div>
            <div className="contenedorAboutUs_about">
                <div className="about_about">About Us</div>
                <div className="preg_about">What do we do?</div>
                <ol>
                    <li><span>Entendemos tus necesidades tecnicas</span></li>
                    <li><span>Source and vet all the market during 72hs.</span></li>
                    <li><span>Avanzamos con enrtevistas preeliminares</span></li>
                    <li><span>Te presentamos los mejores perfiles que se alinean con tus necesidades técnicas, culturales e inclusive de habilidades blandas.</span></li>
                    <li><span>Te brindamos soporte y nos adaptamos a tu proceso de selección interna.</span></li>
                </ol>
            </div>
        </div>
    </section>

        <div className="titulo_confianza">
            <h1>OUR CLIENTS</h1>
            <h3>Trust us</h3>
        </div>
    <section className="contenedor_confianza">
        <div className="cardClientes_confianza" >
            <a href="https://www.google.com/" className="card_clientes" target="_blank" rel="noopener noreferrer">
                <div className="ContenedorNombreUser_clientes">
                    <img src={logoTres} alt="" width="80px"/>
                    <div >
                        <p>nombre</p>
                        <p>user</p>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora laudantium </p>
            </a>
            <a href="https://www.google.com/" className="card_clientes" target="_blank" rel="noopener noreferrer">
                <div className="ContenedorNombreUser_clientes">
                    <img src={logoTres} alt="" width="80px"/>
                    <div >
                        <p>nombre</p>
                        <p>user</p>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora laudantium </p>
            </a>
            <a href="https://www.google.com/" className="card_clientes" target="_blank" rel="noopener noreferrer">
                <div className="ContenedorNombreUser_clientes">
                    <img src={logoTres} alt="" width="80px"/>
                    <div >
                        <p>nombre</p>
                        <p>user</p>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora laudantium </p>
            </a>
        </div>
    </section>

    <footer>
        <div className="footer">
            <h4>Link<span>IT</span></h4>
        </div>
        <div className="social-media-home">
            <a
            target="_blank"
              className="boton-rr"
              href="https://www.linkedin.com/company/linkit-hr/"
              rel="noopener noreferrer"
            >
              <img alt="" src={vector} />
            </a>
            <a
              className="boton-rr"
              href="https://www.gmail.com/mail/help/intl/es/about.html?iframe"
            >
              <img alt="" src={vector1} />
            </a>
            <a className="boton-rr" href="https://web.whatsapp.com/">
              <img alt="" src={whatsApp} />
            </a>
          </div>
        <div className="info-footer">
            <a href="./homeENG">
                <p className="footer-button-home">HOME</p>
            </a>
            <a  href="/empresasENG">
                <p className="footer-button-home">BUSINESS</p>
            </a>
            <a href="/CandidatosENG">
                <p className="footer-button-home" >CANDIDATES</p>
            </a>
            <a href="./faqs">
                <p className="footer-button-home"  >FAQS</p>
            </a>
            <div className="contenedor-idiomas">
              <a href="/homeENG" className="contenedor-bandera">
                <div className="idioma-component">ENG</div>
                </a>
              <a className="contenedor-bandera" href="/home">
                <div className="idioma-component">ESP</div>
              </a>
            </div>
        </div>
        <div className="rights">
            <p>© 2022 LINKIT. All rights reserved.</p>
        </div>
    </footer>
        


    </div>
  );
}
