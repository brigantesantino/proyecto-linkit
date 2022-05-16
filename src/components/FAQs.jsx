import React, {useState} from "react";
import MenuHamburguesa from "./MenuHamburguesa";
import ModalContacto from "./ModalContacto"
//import menuHamb from "../images/menuHamburguesaBlanco.png";
import menuHambNegro from "../images/menuHamburguesa.svg";
import vectorFondo from "../images/vectorFondo.svg";
import "../componentStyles/faqs.css"
import USA from "../images/banderaUsa.png"
import ARG from "../images/banderaArg.png"

export default function FAQs() {
  const [modalContacto, setModalContacto] = useState(false);
  const [menu, setMenu] = useState(false);
  return (
    <div className="contenedorFaqs">
            <header className="top">
      <div className="title-faqs">
            <div className="menu-wrapper">
                <p className="logo-faqs">Link<span>IT</span></p>
                <div className="menuHamb" onClick={() => setMenu(true)}>
                    <img src={menuHambNegro} className="menuHamburguesaImagen" alt="" />
                </div>
                {menu && <MenuHamburguesa setMenu={setMenu}/>}
            </div>
            <div className="info-nav">
                <div className="contenedorNav">
                    <a href="/home" className="empresas-button">
                        <p className="options">INICIO</p>
                    </a>
                    <a className="empresas-button" href="/empresas">
                        <p className="options">EMPRESAS</p>
                    </a>                    
                    <a className="empresas-button" href="/Candidatos">
                        <p className="options">CANDIDATOS</p>
                    </a>
                    <a href="/FAQs" className="empresas-button">
                        <p className="options">FAQS</p>
                    </a>
                    <div className="contenedor-idiomas">
              <a className="contenedor-bandera" href="/home">
                <img className="emojiBandera" src={USA} alt="" />
                <div className="idioma-component">ENG</div>
                </a>
              <a className="contenedor-bandera" href="/home">
                <img className="emojiBandera" src={ARG} alt="" />
                <div className="idioma-component">ESP</div>
              </a>
            </div>
                        <button className="contact-button" onClick={() => setModalContacto(true)}>CONTACTO</button>
                    {modalContacto && <ModalContacto setModalContacto={setModalContacto} />}
                </div>

            </div>
        </div>
        </header>
        <div className="background-faqs">
            <img className="img_back1-faqs" src={vectorFondo} alt=""/>
            <img className="img_back2-faqs" src={vectorFondo} alt=""/>
        </div>  
    <main className="mainFaqs">
      <div className="contenedorTitulo">
        <div className="puestos" >
            <h4>NO TE QUEDES CON DUDAS</h4>
        </div>
        <div className="h1" >
            <h1>Preguntas Frecuentes</h1>    
        </div>
      </div>
        <div className="contenedorPreguntas">
            <button className="botonDropdown">

                <p>Acerca de que y como hacemos</p>
                <div className="mas">

                    <img src="./assets/Flecha-abajo.svg" alt=""/>
                </div>
            </button>

            <div className="panel"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nam, id qui dolorum at dicta. Optio quis voluptates culpa, id quibusdam maiores accusamus excepturi sunt nihil illum facilis aut suscipit.
            </div>
        </div>

        <div className="contenedorPreguntas">
            <button className="botonDropdown">

                <p>Cual es el lead time hasta la presentacion del candidato</p>
                <div className="mas">

                    <img src="./assets/Flecha-abajo.svg" alt=""/>
                </div>
            </button>

            <div className="panel"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nam, id qui dolorum at dicta. Optio quis voluptates culpa, id quibusdam maiores accusamus excepturi sunt nihil illum facilis aut suscipit.
            </div>
        </div>

        <div className="contenedorPreguntas">
            <button className="botonDropdown">

                <p>Tengo dudas con el proceso de seleccion</p>
                <div className="mas">

                    <img src="./assets/Flecha-abajo.svg" alt=""/>
                </div>
            </button>

            <div className="panel"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nam, id qui dolorum at dicta. Optio quis voluptates culpa, id quibusdam maiores accusamus excepturi sunt nihil illum facilis aut suscipit.
            </div>
        </div>

        <div className="contenedorPreguntas">
            <button className="botonDropdown">

                <p>Tengo dudas con el perfil exacto que necesitamos</p>
                <div className="mas">

                    <img src="./assets/Flecha-abajo.svg" alt=""/>
                </div>
            </button>

            <div className="panel"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nam, id qui dolorum at dicta. Optio quis voluptates culpa, id quibusdam maiores accusamus excepturi sunt nihil illum facilis aut suscipit.
            </div>
        </div>
    </main>
    <footer className="footer-faqs">
        <div className="footer">
            <h4>Link<span>IT</span></h4>
        </div>
        <div className="info-footer">
            <a href="./home" className="footer-button">
                <p className="options">INICIO</p>
            </a>
            <a className="footer-button" href="/empresas">
                <p className="options">EMPRESAS</p>
            </a>
            <a className="footer-button" href="/Candidatos">
                <p className="options">CANDIDATOS</p>
            </a>
            <a href="./faqs" className="footer-button">
                <p className="options"  >FAQS</p>
            </a>
            <div className="contenedor-idiomas">
              <a href="/home" className="contenedor-bandera">
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
