import React, {useState} from "react";
import ModalENG from "../../components/eng/ModalENG";
import ModalEficienciaENG from "./ModalEficienciaENG"
import ModalSeguridadENG from "./ModalSeguridadENG"
import ModalVelocidadENG from "./ModalVelocidadENG"
import ModalContactoENG from "./ModalContactoENG"
import MenuHamburguesaENG from "./MenuHamburguesaENG";
import vectorFondo from "../../images/vectorFondo.svg";
import carafeliz from "../../images/carafeliz.svg";
import eficiencia from "../../images/eficiencia.svg";
import velocidad from "../../images/velocidad.svg";
import seguridad from "../../images/seguridad.svg";
import logoTres from "../../images/LogoTres.svg";
import menuHamb from "../../images/menuHamburguesaBlanco.png";
import USA from "../../images/banderaUsa.png"
import ARG from "../../images/banderaArg.png"

import vector from "../../images/Vector.svg"
import vector1 from "../../images/Vector-1.svg";
import whatsApp from "../../images/WhatsApp.svg"

import "../../componentStyles/home.css";

export default function IndexENG() {
    const [isOpen, setIsOpen] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);
    const [modal4, setModal4] = useState(false);
    const [modalContacto, setModalContacto] = useState(false);
    const [menu, setMenu] = useState(false);
  return (
    <div className="body">
      <header className="top-header">
      <div className="title">
            <div className="menu-wrapper">
                <p className="logo">Link <span>IT</span></p>
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
                <img className="emojiBandera" src={USA} alt="" />
                <div className="idioma-component">ENG</div>
                </a>
              <a className="contenedor-bandera" href="/home">
                <img className="emojiBandera" src={ARG} alt="" />
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
                    <div className="preg_main">Are you looking for <span>talent selection </span> services in the tech world?</div>
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

            <div className="cardDetails_abaut" id="myBtn1" onClick={() => setIsOpen(true)}>
                <div>
                    <img src={carafeliz} alt="" />
                </div>
                <div>
                    <div className="confianza_about">Trust</div>
                    <div className="detalles_about">See more</div>
                </div>
            </div>
            {isOpen && <ModalENG setIsOpen={setIsOpen} />}

            <div className="cardDetails_abaut" id="myBtnVelocidad" onClick={() => setModal4(true)}>
                <div>
                    <img src={velocidad} alt=""/>
                </div>
                <div>
                    <div className="confianza_about">Velocity</div>
                    <div className="detalles_about">See more</div>
                </div>
            </div>
            {modal4 && <ModalVelocidadENG setModal4={setModal4} />}

            <div className="cardDetails_abaut" id="myBtnEficiencia" onClick={() => setModal2(true)}>
                <div>
                    <img src={eficiencia} alt=""/>
                </div>
                <div>
                    <div className="confianza_about">Efficiency</div>
                    <div className="detalles_about">See more</div>
                </div>
            </div>
            {modal2 && <ModalEficienciaENG setModal2={setModal2} />}

            <div className="cardDetails_abaut" id="myBtnSeguridad" onClick={() => setModal3(true)}>
                <div>
                    <img src={seguridad} alt=""/>
                </div>
                <div >
                    <div className="confianza_about">Security</div>
                    <div className="detalles_about">See more</div>
                </div>
            </div>
        </div>
        {modal3 && <ModalSeguridadENG setModal3={setModal3} />}
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
            <a href="https://www.google.com/" className="card_clientes" target="_blank">
                <div className="ContenedorNombreUser_clientes">
                    <img src={logoTres} alt="" width="80px"/>
                    <div >
                        <p>nombre</p>
                        <p>user</p>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora laudantium </p>
            </a>
            <a href="https://www.google.com/" className="card_clientes" target="_blank">
                <div className="ContenedorNombreUser_clientes">
                    <img src={logoTres} alt="" width="80px"/>
                    <div >
                        <p>nombre</p>
                        <p>user</p>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora laudantium </p>
            </a>
            <a href="https://www.google.com/" className="card_clientes" target="_blank">
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
            <h4>Link <span>IT</span></h4>
        </div>
        <div className="social-media-home">
            <a
            target="_blank"
              className="boton-rr"
              href="https://www.linkedin.com/company/linkit-hr/"
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
                <img className="emojiBandera" src={USA} alt="" />
                <div className="idioma-component">ENG</div>
                </a>
              <a className="contenedor-bandera" href="/home">
                <img className="emojiBandera" src={ARG} alt="" />
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
