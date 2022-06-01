import React, {useState} from "react";

import MenuHamburguesa from ".././MenuHamburguesa";

//import menuHamb from "../images/menuHamburguesaBlanco.png";

import menuHambNegro from "../../images/menuHamburguesa.svg";
import vectorFondo from "../../images/vectorFondo.svg";
import "../../componentStyles/faqs.css"



export default function FAQs() {

  const [menu, setMenu] = useState(false);
  const [pregunta1, setPregunta1] = useState("estilo");
  const [pregunta2, setPregunta2] = useState("estilo");
  const [pregunta3, setPregunta3] = useState("estilo");
  const [pregunta4, setPregunta4] = useState("estilo");
  const [pregunta5, setPregunta5] = useState("estilo");
  const [pregunta6, setPregunta6] = useState("estilo");
  const [pregunta7, setPregunta7] = useState("estilo");
  const [pregunta8, setPregunta8] = useState("estilo");
  const [pregunta9, setPregunta9] = useState("estilo");
  const [pregunta10, setPregunta10] = useState("estilo");


  const cambiarEstilo = () => {
      pregunta1 === "estilo1" ? setPregunta1("estilo"):setPregunta1("estilo1")
  };

  const cambiarEstilo2 = () => {
    pregunta2 === "estilo2" ? setPregunta2("estilo"):setPregunta2("estilo2")
}; 

const cambiarEstilo3 = () => {
    pregunta3 === "estilo3" ? setPregunta3("estilo"):setPregunta3("estilo3")
}; 

const cambiarEstilo4 = () => {
    pregunta4 === "estilo4" ? setPregunta4("estilo"):setPregunta4("estilo4")
}; 

const cambiarEstilo5 = () => {
    pregunta5 === "estilo5" ? setPregunta5("estilo"):setPregunta5("estilo5")
}; 

const cambiarEstilo6 = () => {
    pregunta6 === "estilo6" ? setPregunta6("estilo"):setPregunta6("estilo6")
}; 

const cambiarEstilo7 = () => {
    pregunta7 === "estilo7" ? setPregunta7("estilo"):setPregunta7("estilo7")
}; 

const cambiarEstilo8 = () => {
    pregunta8 === "estilo8" ? setPregunta8("estilo"):setPregunta8("estilo8")
}; 

const cambiarEstilo9 = () => {
    pregunta9 === "estilo9" ? setPregunta9("estilo"):setPregunta9("estilo9")
}; 

const cambiarEstilo10 = () => {
    pregunta10 === "estilo10" ? setPregunta10("estilo"):setPregunta10("estilo10")
}; 


  return (
    <div className="contenedorFaqs">
      <header className="top-faqs">
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
                        <p className="options">HOME</p>
                    </a>
                    <a className="empresas-button" href="/empresas">
                        <p className="options">BUSINESS</p>
                    </a>                    
                    <a className="empresas-button" href="/Candidatos">
                        <p className="options">CANDIDATES</p>
                    </a>
                    <a href="/FAQs" className="empresas-button">
                        <p className="options">FAQs</p>
                    </a>
                    <div className="contenedor-idiomas-faqs">
                        <a className="contenedor-bandera" href="/home">
                            <div className="idioma-component">ENG |</div>
                        </a>
                        <a className="contenedor-bandera" href="/home">
                            <div className="idioma-component">ESP</div>
                        </a>
                    </div>
                    <a href="/contacto">
                        <button className="contact-button">CONTACT</button>
                    </a>
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
            <h4>DO NOT ENTERTAIN DOUBTS</h4>
        </div>
        <div className="h1" >
            <h1>Frequent questions</h1>    
        </div>
      </div>

        <div className="contenedorPreguntas" onClick={cambiarEstilo}>
            <button className="botonDropdown">
                <p className="preguntaDropdown">What is LinkIT?</p>
                <p className={pregunta1}>LinkIT is your recruitment partner that, regardless of distance, connects companies with the best tech talent throughout the world.</p>
            </button>
        </div>

        <div className="contenedorPreguntas" onClick={cambiarEstilo2}>
            <button className="botonDropdown">
                <p className="preguntaDropdown">What sets LinkIT apart from other HR agencies?</p>
                <p className={pregunta2}>Linkit is not a human resources agency, it is your Partner that will help you reach the talent you need to scale your business. Our differentiating pillars are the cost-quality ratio, personalized service, a continuous selection process, agility in the search process, the use of data to recruit and the guarantee by marking trial periods with talents.</p>
            </button>
        </div>

        <div className="contenedorPreguntas" onClick={cambiarEstilo3}>
            <button className="botonDropdown">
                <p className="preguntaDropdown">Where in the world do you find talent?</p>
                <p className={pregunta3}>LinkIT has no barrier, it searches for talent around the globe regardless of location or nationality, the focus is on talent, experience and the match with the objectives set.</p>
            </button>
        </div>

        <div className="contenedorPreguntas" onClick={cambiarEstilo4}>
            <button className="botonDropdown">
                <p className="preguntaDropdown">Do they ask for payments before finalizing the service?</p>
                <p className={pregunta4}>One of the things that makes LinkIT unique is that it focuses 100% on trust and transparency with its partners, which is why there is no payment until the talent starts working.</p>
            </button>
        </div>

        <div className="contenedorPreguntas" onClick={cambiarEstilo5}>
            <button className="botonDropdown">
                <p className="preguntaDropdown">How to find talent in a market as competitive as the technology market?</p>
                <p className={pregunta5}>Thanks to our great expert and multidisciplinary team, together with the mastery of search tools and internal databases, we managed to cross the barriers of talent and location, going to inquire about candidates in active search as well as those who are not.</p>
            </button>
        </div>

        <div className="contenedorPreguntas" onClick={cambiarEstilo6}>
            <button className="botonDropdown">
                <p className="preguntaDropdown">What kind of roles are the most worked by LinkIT?</p>
                <p className={pregunta6}>LinkIT arrives in a 360º of technical profiles, finding the best product designers, front-end, back-end, full-stack and much more.</p>
            </button>
        </div>

        <div className="contenedorPreguntas" onClick={cambiarEstilo7}>
            <button className="botonDropdown">
                <p className="preguntaDropdown">How long does it take to present the first qualified candidates?</p>
                <p className={pregunta7}>We take no more than 7 to 10 business days to present the first candidates, previously selected and interviewed.</p>
            </button>
        </div>

        <div className="contenedorPreguntas" onClick={cambiarEstilo8}>
            <button className="botonDropdown">
                <p className="preguntaDropdown">Are you only engaged in Tech recruiting?</p>
                <p className={pregunta8}>No, although we specialize in this area, we have a network of partners who are willing to provide the service for other areas, granting the same benefits as us.</p>
            </button>
        </div>

        <div className="contenedorPreguntas" onClick={cambiarEstilo9}>
            <button className="botonDropdown">
                <p className="preguntaDropdown">What contracting modalities are worked?</p>
                <p className={pregunta9}>Thanks to the partners we have with different companies around the world, we can align the legal requirements of the country where the company is located, as well as where the talent is.
The most frequent types of labor relations can be:
 + As a self-employed / freelance modality
 + Through a temporary contract
 + In dependency relationship.</p>
            </button>
        </div>

        <div className="contenedorPreguntas" onClick={cambiarEstilo10}>
            <button className="botonDropdown">
                <p className="preguntaDropdown">If I do not move forward with the process, will future opportunities be taken into account?</p>
                <p className={pregunta10}>Of course! By accepting the terms and conditions you will enter our large database to be able to assign you the project tailored to your needs, aligned with your talents and needs.</p>
            </button>
        </div>


    
    </main>
    <footer className="footer-faqs">
        <div className="footer">
            <h4>Link<span>IT</span></h4>
        </div>
        <div className="info-footer">
            <a href="./home" className="footer-button">
                <p className="options">HOME</p>
            </a>
            <a className="footer-button" href="/empresas">
                <p className="options">BUSINESS</p>
            </a>
            <a className="footer-button" href="/Candidatos">
                <p className="options">CANDIDATES</p>
            </a>
            <a href="./faqs" className="footer-button">
                <p className="options"  >FAQs</p>
            </a>
            <div className="contenedor-idiomas-faqs">
              <a href="/home" className="contenedor-bandera">
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
