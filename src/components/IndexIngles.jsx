import React, {useState} from "react";
import Modal from "./Modal";
import ModalEficiencia from "./ModalEficiencia"
import ModalSeguridad from "./ModalSeguridad"
import ModalVelocidad from "./ModalVelocidad"
import ModalContacto from "./ModalContacto"
import MenuHamburguesa from "./MenuHamburguesa";
import vectorFondo from "../images/vectorFondo.svg";
import carafeliz from "../images/carafeliz.svg";
import eficiencia from "../images/eficiencia.svg";
import velocidad from "../images/velocidad.svg";
import seguridad from "../images/seguridad.svg";
import logoTres from "../images/LogoTres.svg";
import menuHamb from "../images/menuHamburguesaBlanco.png";
import logoCuatro from "../images/LogoCuatro.svg";
import logoCinco from "../images/LogoCinco.svg";
import logoSeis from "../images/LogoSeis.svg";
import logoSiete from "../images/LogoSiete.svg";
import logoOcho from "../images/LogoOcho.svg";
import logoNueve from "../images/LogoNueve.svg";


import "../componentStyles/home.css";

export default function Index() {
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
                {menu && <MenuHamburguesa setMenu={setMenu}/>}
            </div>
            <div className="info">
                <div className="contenedorNav">
                    <a href="./home" className="empresas-button">
                        <p className="home-button">INICIO</p>
                    </a>
                    <a className="empresas-button" href="/empresas">
                        <p className="business">EMPRESAS</p>
                    </a>                    
                    <a className="empresas-button" href="/Candidatos">
                        <p className="candidates">CANDIDATOS</p>
                    </a>
                    <a href="./faqs" className="empresas-button">
                        <p className="faqs"  >FAQS</p>
                    </a>
                    <div className="select">
                        <select name="language" id="idioma">IDIOMA
                            <option value="1">ESPAÑOL</option>
                            <option value="2">INGLÉS</option>
                            <option value="3">FRANCÉS</option>
                            <option value="4">PORTUGUÉS</option>
                            <option value="5">ITALIANO</option>
                        </select>
                    </div>
                        <button className="contact-button" onClick={() => setModalContacto(true)}>CONTACTO</button>
                    {modalContacto && <ModalContacto setModalContacto={setModalContacto} />}
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
                    <div className="atention_main">Estamos Contratando!</div>
                    <div className="preg_main">¿Estás buscando servicio de <span>selección de talento</span> en el mundo TECH?</div>
                    <div className="service_main">En Linkit tanto a empresas que buscan nuevos empleados capacitados, como candidatos que quieren crecer profesionalmente</div>
                    <a href="#section" className="bMasInfo" id="colorBlanco">
                        Más información
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
                    <div className="confianza_about">Confianza</div>
                    <div className="detalles_about">Ver detalles</div>
                </div>
            </div>
            {isOpen && <Modal setIsOpen={setIsOpen} />}

            <div className="cardDetails_abaut" id="myBtnVelocidad" onClick={() => setModal4(true)}>
                <div>
                    <img src={velocidad} alt=""/>
                </div>
                <div>
                    <div className="confianza_about">Velocidad</div>
                    <div className="detalles_about">Ver detalles</div>
                </div>
            </div>
            {modal4 && <ModalVelocidad setModal4={setModal4} />}

            <div className="cardDetails_abaut" id="myBtnEficiencia" onClick={() => setModal2(true)}>
                <div>
                    <img src={eficiencia} alt=""/>
                </div>
                <div>
                    <div className="confianza_about">Eficiencia</div>
                    <div className="detalles_about">Ver detalles</div>
                </div>
            </div>
            {modal2 && <ModalEficiencia setModal2={setModal2} />}

            <div className="cardDetails_abaut" id="myBtnSeguridad" onClick={() => setModal3(true)}>
                <div>
                    <img src={seguridad} alt=""/>
                </div>
                <div >
                    <div className="confianza_about">Seguridad</div>
                    <div className="detalles_about">Ver detalles</div>
                </div>
            </div>
        </div>
        {modal3 && <ModalSeguridad setModal3={setModal3} />}
        <div className="contenedorContratoAbout">
            <div className="contenedorContrato">
                <div>
                    Contrato
                </div>
            </div>
            <div className="contenedorAboutUs_about">
                <div className="about_about">SOBRE NOSOTROS</div>
                <div className="preg_about">Qué hacemos?</div>
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
            <h1>NUESTROS CLIENTES</h1>
            <h3>Confían en nosotros</h3>
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
            <h4>Link <span>IT</span></h4>
        </div>
        <div className="info-footer">
            <a href="./home" className="footer-button">
                <p className="footer-button">INICIO</p>
            </a>
            <a  href="/empresas">
                <p className="footer-button">EMPRESAS</p>
            </a>
            <a href="/Candidatos">
                <p className="footer-button" >CANDIDATOS</p>
            </a>
            <a href="./faqs" className="footer-button">
                <p className="footer-button"  >FAQS</p>
            </a>
            <div className="select">
                <select name="language" id="">IDIOMA
                    <option value="1">ESPAÑOL</option>
                    <option value="2">INGLÉS</option>
                    <option value="3">FRANCÉS</option>
                    <option value="4">PORTUGUÉS</option>
                    <option value="5">ITALIANO</option>
                </select>
            </div>
        </div>
        <div className="rights">
            <p>© 2022 LINKIT. All rights reserved.</p>
        </div>
    </footer>
        


    </div>
  );
}
