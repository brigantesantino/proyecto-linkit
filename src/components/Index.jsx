import React, {useState} from "react";
import MenuHamburguesa from "./MenuHamburguesa";
import vectorFondo from "../images/vectorFondo.svg";
import carafeliz from "../images/manos.png";
import eficiencia from "../images/eficiencia.png";
import velocidad from "../images/auto.png";
import seguridad from "../images/candado.png";
import logoTres from "../images/LogoTres.svg";
import menuHamb from "../images/menuHamburguesaBlanco.png";
import vector from "../images/Vector.svg";
import vector1 from "../images/Vector-1.svg";
import whatsApp from "../images/WhatsApp.svg";
import img3D from "../images/logo3d.svg"
import contrato from "../images/contrato.png"
import "../componentStyles/home.css";

export default function Index() {
    const [style, setStyle] = useState("style");
    const [styleNormal2, setStyle2] = useState("style");
    const [styleNormal3, setStyle3] = useState("style");
    const [styleNormal4, setStyle4] = useState("style");
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
                        <p className="faqs"  >FAQs</p>
                    </a>
                <div className="contenedor-idiomas-home">
                <a href="/homeENG" className="contenedor-bandera">
                    <p className="idioma-component">ENG |</p>
                </a>
                <a className="contenedor-bandera" href="/home">
                    <p className="idioma-component">ESP</p>
                </a>
            </div>
                <a href="/contacto">
                        <button className="contact-button">CONTACTO</button>
                </a>
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
                    <div className="service_main">En un mundo tan grande, LinkIT conecta las mejores empresas con el mejor talento para potenciar su desarrollo.</div>
                    <a href="#section" className="bMasInfo" id="colorBlanco">
                        Más información
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
                    <p className={styleNormal3}>Feedback recurrente con el cliente desde el inicio del proceso hasta su finalización y posterior incorporación.</p>
                </div>
            </div>

            <div className="cardDetails_abaut" id="myBtnSeguridad" onClick={changeStyle4}>
                <div>
                    <img className="img-home" src={seguridad} alt=""/>
                </div>
                <div >
                    <div className="confianza_about">Seguridad</div>
                    <p className={styleNormal4}> Fee de contratación y fee luego de terminar exitosamente el período de prueba.</p>
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
                <div className="about_about">SOBRE NOSOTROS</div>
                <div className="preg_about">Qué hacemos?</div>
                <ol>
                    <li>
                        <div className="titulos">Asignación de rol</div>
                        <span className="subt">Entendemos tus necesidades completas, técnicas, de cultura, habilidades blandas y demás.</span>
                    </li>
                    <li>
                        <div className="titulos">Llamada de alineación</div>
                        <span className="subt">Investigamos y sourceamos el mercado.</span>
                    </li>
                    <li>
                        <div className="titulos">
                            Búsqueda y reclutamiento
                        </div>
                        <span className="subt">Avanzamos con entrevistas preeliminares.</span></li>
                    <li>
                        <div className="titulos">Presentación de candidatos</div>
                        <span className="subt">Te presentamos los mejores perfiles que se alinean con tus necesidades.</span></li>
                    <li>
                        <div className="titulos">Potenciamiento</div>
                        <span className="subt">Te brindamos soporte y nos adaptamos a tu proceso de selección interno.</span></li>
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
            <h4>Link<span>IT</span></h4>
        </div>
        <div className="social-media-home">
            <a
            target="_blank"
              className="linkedin"
              href="https://www.linkedin.com/company/linkit-hr/"
              rel="noopener noreferrer"
            >
              <img alt="" src={vector} />
            </a>
            <a
              className="gmail"
              href="/contacto"
            >
              <img alt="" src={vector1} />
            </a>
            <a className="wpp" href="https://wa.me/+5491165287429" target="_blank">
              <img alt="" src={whatsApp} />
            </a>
          </div>
        <div className="info-footer">
            <a href="./home">
                <p className="footer-button-home">INICIO</p>
            </a>
            <a  href="/empresas">
                <p className="footer-button-home">EMPRESAS</p>
            </a>
            <a href="/Candidatos">
                <p className="footer-button-home" >CANDIDATOS</p>
            </a>
            <a href="./faqs">
                <p className="footer-button-home"  >FAQs</p>
            </a>
            <div className="contenedor-idiomas">
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
