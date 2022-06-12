import React, {useState} from "react";

import ModalContactoENG from "./ModalContactoENG"
import MenuHamburguesaENG from "./MenuHamburguesaENG";
import vectorFondo from "../../images/vectorFondo.svg";
import menuHamb from "../../images/menuHamburguesaBlanco.png";
import carafeliz from "../../images/manos.png";
import eficiencia from "../../images/eficiencia.png";
import velocidad from "../../images/auto.png";
import seguridad from "../../images/candado.png";
import img3D from "../../images/logo3d.svg";
import contrato from "../../images/contrato.png"

import vector from "../../images/Vector.svg"
import vector1 from "../../images/Vector-1.svg";
import whatsApp from "../../images/WhatsApp.svg"
import cliente1 from "../../images/cliente1.png"
import cliente2 from "../../images/cliente2.png"
import cliente3 from "../../images/cliente3.png"

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
                    <div className="contenedor-idiomas-home">
              <a href="/homeENG" className="contenedor-bandera">
                <div className="idioma-component">ENG |</div>
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
                    <img className="img_main" src={img3D} alt=""/>
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
                    <div className="confianza_about">Trust</div>
                    <p className={style}>Team of consultants specialized in the TECH area.</p>
                </div>
            </div>


            <div className="cardDetails_abaut" id="myBtnVelocidad" onClick={changeStyle2}>
                <div>
                    <img className="img-home" src={velocidad} alt=""/>
                </div>
                <div>
                    <div className="confianza_about">Velocity</div>
                    <p className={styleNormal2}>2 weeks of waiting from the closing of the needed profile.</p>
                </div>
            </div>

            <div className="cardDetails_abaut" id="myBtnEficiencia" onClick={changeStyle3}>
                <div>
                    <img className="img-home" src={eficiencia} alt=""/>
                </div>
                <div>
                    <div className="confianza_about">Efficiency</div>
                    <p className={styleNormal3}>Recurring feedback with the client from the beginning of the process until its completion and subsequent incorporation.</p>
                </div>
            </div>

            <div className="cardDetails_abaut" id="myBtnSeguridad" onClick={changeStyle4}>
                <div>
                    <img className="img-home" src={seguridad} alt=""/>
                </div>
                <div >
                    <div className="confianza_about">Security</div>
                    <p className={styleNormal4}>Hiring fee and fee after successfully completing the trial period.</p>
                </div>
            </div>
        </div>
    </section>
    <section>

    <div className="contenedorContratoAbout">
            <div className="contenedorContrato">
                <div>
                    <img className="img_contrato" src={contrato} alt="" />
                </div>
            </div>
            <div className="contenedorAboutUs_about">
                <div className="about_about">ABOUT US</div>
                <div className="preg_about">What do we do?</div>
                <ol>
                    <li>
                        <div className="titulos">Role assignment</div>
                        <span className="subt">We understand your complete needs, technical, culture, soft skills and more.</span>
                    </li>
                    <li>
                        <div className="titulos">Alignment call</div>
                        <span className="subt">We research and source the market.</span>
                    </li>
                    <li>
                        <div className="titulos">
                        Search and recruitment
                        </div>
                        <span className="subt">We move forward with preliminary interviews.</span></li>
                    <li>
                        <div className="titulos">Presentation of candidates</div>
                        <span className="subt">We present the best profiles that align with your needs.</span></li>
                    <li>
                        <div className="titulos">Empowerment</div>
                        <span className="subt">We provide you with support and adapt to your internal selection process.</span></li>
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
            <a href="" className="card_clientes" target="_blank" rel="noopener noreferrer">

                <div className="ContenedorNombreUser_clientes">
                    <img src={cliente1} alt="" width="100px"/>
                </div>
                <p className="testimonio">"The synergy with LinkIT as a partner was immediate, after 2 weeks we already had qualified profiles ready to be interviewed by us, without a doubt we will continue to trust them."</p>
            </a>

            <a href="" className="card_clientes" target="_blank" rel="noopener noreferrer">

                <div className="ContenedorNombreUser_clientes">
                    <img src={cliente2} alt="" width="80px"/>
                    <div >
                        <p>Geotec</p>
                    </div>
                </div>
                <p className="testimonio">"The speed and professionalism with which we are working together with LinkIT is what allows us to trust them and continue betting on growing, the partners when it comes to climbing are inflatables, without a doubt, here we find one"</p>
            </a>

            <a href="" className="card_clientes" target="_blank" rel="noopener noreferrer">

                <div className="ContenedorNombreUser_clientes">
                    <img src={cliente3} alt="" width="100px"  />
                </div>
                <p className="testimonio">"In the crypto world it is necessary to have knowledge of all the parts that make it up, obtaining profiles in technologies such as solidity is not easy, LinkIT has proven to have in-depth knowledge of the skills and technical qualities that talents need"</p>
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
              href="/contacto"
            >
              <img alt="" src={vector1} />
            </a>
            <a className="wpp" href="https://wa.me/+5491165287429" target="_blank">
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
                <p className="footer-button-home"  >FAQs</p>
            </a>
            <div className="contenedor-idiomas-home">
              <a href="/homeENG" className="contenedor-bandera">
                <div className="idioma-component">ENG |</div>
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
