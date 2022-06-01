import React, {useState} from "react";
import MenuHamburguesa from "./MenuHamburguesa";

//import menuHamb from "../images/menuHamburguesaBlanco.png";
import menuHambNegro from "../images/menuHamburguesa.svg";
import vectorFondo from "../images/vectorFondo.svg";
import "../componentStyles/faqs.css"



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
                    <div className="contenedor-idiomas-faqs">
                        <a className="contenedor-bandera" href="/home">
                            <div className="idioma-component">ENG |</div>
                        </a>
                        <a className="contenedor-bandera" href="/home">
                            <div className="idioma-component">ESP</div>
                        </a>
                    </div>
                    <a href="/contacto">
                        <button className="contact-button">CONTACTO</button>
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
            <h4>NO TE QUEDES CON DUDAS</h4>
        </div>
        <div className="h1" >
            <h1>Preguntas Frecuentes</h1>    
        </div>
      </div>

        <div className="contenedorPreguntas" onClick={cambiarEstilo}>
            <button className="botonDropdown">
                <p className="preguntaDropdown">¿Qué es LinkIT?</p>
                <p className={pregunta1}>LinkIT es tu recruitment partner que, sin importar las distancias, conecta a las empresas con el mejor talento tech a lo largo del mundo.</p>
            </button>
        </div>

        <div className="contenedorPreguntas" onClick={cambiarEstilo2}>
            <button className="botonDropdown">
                <p className="preguntaDropdown">¿Qué diferencia a LinkIT de otras agencias de recursos humanos?</p>
                <p className={pregunta2}>Linkit no es una agencia de recursos humanos, es tu Partner que te ayudará en alcanzar al talento que necesitas para escalar en tu negocio. Nuestros pilares diferenciadores son la relación costo calidad, el servicio personalizado, un proceso de selección continua, agilidad en el proceso de búsqueda, la utilización de datos para reclutar y la garantía marcando periodos de prueba con los talentos.</p>
            </button>
        </div>

        <div className="contenedorPreguntas" onClick={cambiarEstilo3}>
            <button className="botonDropdown">
                <p className="preguntaDropdown">¿De qué parte del mundo encuentran talento?</p>
                <p className={pregunta3}>LinkIT no tiene barrera, busca talento en todo el globo sin importar la ubicación ni la nacionalidad, el foco está en el talento, la experiencia y el match con los objetivos marcados.</p>
            </button>
        </div>

        <div className="contenedorPreguntas" onClick={cambiarEstilo4}>
            <button className="botonDropdown">
                <p className="preguntaDropdown">¿Piden pagos antes de concretar el servicio?</p>
                <p className={pregunta4}>Una de las cosas que hace único a LinkIT es que se centra 100% en la confianza y la transparencia con sus partners, es por esto por lo que no hay ningún pago hasta que el talento comience a trabajar.</p>
            </button>
        </div>

        <div className="contenedorPreguntas" onClick={cambiarEstilo5}>
            <button className="botonDropdown">
                <p className="preguntaDropdown">¿Cómo encontrar talento en un mercado tan competitivo como el de la tecnología?</p>
                <p className={pregunta5}>Gracias a nuestro gran equipo experto y multidisciplinario, junto con el dominio en herramientas de búsqueda y bolsas de datos internas, logramos cruzar las barreras del talento y de ubicación yendo a indagar sobre a candidatos en búsqueda activa así como también a aquellos que no lo estén.</p>
            </button>
        </div>

        <div className="contenedorPreguntas" onClick={cambiarEstilo6}>
            <button className="botonDropdown">
                <p className="preguntaDropdown">¿Qué tipo de roles son los más trabajados por LinkIT?</p>
                <p className={pregunta6}>LinkIT llega en un 360º de perfiles técnicos, encontrando los mejores diseñadores de producto, front-end, back-end, full-stack y mucho más.</p>
            </button>
        </div>

        <div className="contenedorPreguntas" onClick={cambiarEstilo7}>
            <button className="botonDropdown">
                <p className="preguntaDropdown">¿En cuánto tiempo presentan los primeros candidatos cualificados?</p>
                <p className={pregunta7}>Tardamos no más de 7 a 10 días hábiles en presentar los primeros candidatos, previamente seleccionados y entrevistados.</p>
            </button>
        </div>

        <div className="contenedorPreguntas" onClick={cambiarEstilo8}>
            <button className="botonDropdown">
                <p className="preguntaDropdown">¿Sólo se dedican a reclutamiento Tech?</p>
                <p className={pregunta8}>No, si bien nos especializamos en este área, tenemos una red de partners que están dispuestos a brindar el servicio para otras áreas otorgando los mismos beneficios que nosotros.</p>
            </button>
        </div>

        <div className="contenedorPreguntas" onClick={cambiarEstilo9}>
            <button className="botonDropdown">
                <p className="preguntaDropdown">¿Qué modalidades de contratación se trabajan?</p>
                <p className={pregunta9}>Gracias a los partners que tenemos con distintas empresas del mundo, podemos alinear los requisitos legales del país donde radique la empresa, así como donde esté el talento.
Los tipos de relaciones laborales más frecuentes pueden ser:
 + Como trabajador autónomo/ modalidad freelance
 + Mediante un contrato temporal
 + En relación de dependencia</p>
            </button>
        </div>

        <div className="contenedorPreguntas" onClick={cambiarEstilo10}>
            <button className="botonDropdown">
                <p className="preguntaDropdown">En caso de no avanzar con el proceso, ¿me tendrán en cuenta futuras oportunidades?</p>
                <p className={pregunta10}>Por supuesto! Aceptando los términos y condiciones entrarás en nuestra gran base de datos para poder asignarte el proyecto a tu medida, alineado con tus talentos y necesidades.</p>
            </button>
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
