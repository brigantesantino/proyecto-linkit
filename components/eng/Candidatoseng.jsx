import React, { useEffect, useState } from "react";
import "../../componentStyles/candidatos.css";
import { useTranslation } from "react-i18next";
import image17 from "../../images/image 17.svg";
import image18 from "../../images/image 18.png";
import image20 from "../../images/image 20.svg";
import image8 from "../../images/image 8.svg";
import image9 from "../../images/image 9.svg";
import image10 from "../../images/image 10.svg";
import image12 from "../../images/image 12.svg";
import image13 from "../../images/image 13.svg";
import image14 from "../../images/image 14.svg";
import image15 from "../../images/image 15.png";
import image21 from "../../images/image 21.png";
import vectorFondo from "../../images/vectorFondo.svg"
import vector from "../../images/Vector.svg";
import vector1 from "../../images/Vector-1.svg";
import whatsApp from "../../images/WhatsApp.svg";
import menuHambNegro from "../../images/menuHamburguesa.svg";
import MenuHamburguesa from "./../MenuHamburguesa";
import Header from "./../Header";
import USA from "../../images/banderaUsa.png"
import ARG from "../../images/banderaArg.png"

import { postFormAirtableCandidatos } from "../../actions/candidatosActions";
import HeaderENG from "./HeaderENG";

export default function Candidatoseng() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [experiencia, setExperiencia] = useState("");
  /*   const [cv, setCv] = useState(""); */
  const [monedaRemuneracion, setMonedaRemuneracion] = useState("");
  const [remuneracionPretendida, setRemuneracionPretendida] = useState("");
  const [interesadoEnRoles, setInteresadoEnRoles] = useState("");
  const [comoNosConociste, setComoNosConociste] = useState("");
  const [tecnologias, setTecnologias] = useState("");
  const [condicionesLegales, setCondicionesLegales] = useState("");
  const [ofertas, setOfertas] = useState({});

  const [menu, setMenu] = useState(false);

  const [errors, setErrors] = useState({});

  function validate(input) {
    console.log("input", input);
    let errorsObj = {};
    let contadorErrores = 0;
    if (input.nombre === "") {
      errorsObj.nombre = "El nombre es requerido";
      contadorErrores++;
    }
    if (input.email === "") {
      errorsObj.email = "El email es requerido";
      contadorErrores++;
    }
    if (input.linkedIn === "") {
      errorsObj.linkedin = "El linkedin es requerido";
      contadorErrores++;
    }
    if (input.experiencia === "") {
      errorsObj.experiencia = "La experiencia es requerida";
      contadorErrores++;
    }
    if (input.condicionesLegales === "") {
      errorsObj.condicionesLegales = "Debes aceptar las condiciones legales";
      contadorErrores++;
    }
    if (input.tecnologias === "") {
      errorsObj.tecnologias = "Las tecnologias son requeridas";
      contadorErrores++;
    }
    if (input.direccion === "") {
      errorsObj.direccion = "La direccion es requerida";
      contadorErrores++;
    }
    if (contadorErrores === 0) {
      console.log("no hay errores");
      postFormAirtableCandidatos(
        input.nombre,
        input.email,
        input.direccion,
        input.linkedIn,
        input.experiencia,
        input.monedaRemuneracion,
        input.remuneracionPretendida,
        input.interesadoEnRoles,
        input.comoNosConociste,
        input.tecnologias,
        input.condicionesLegales,
        input.ofertas
      );
    } else {
      setErrors(errorsObj);
      console.log("hay errores no se hizo el post", errorsObj);
    }
  }

  function handleSubmit(event) {
    console.log("handleSubmit");
    const objetoAVerificar = {
      nombre,
      email,
      direccion,
      linkedIn,
      experiencia,
      condicionesLegales,
      tecnologias,
      comoNosConociste,
      interesadoEnRoles,
      remuneracionPretendida,
      monedaRemuneracion,
    };
    validate(objetoAVerificar);
    event.preventDefault();
  }
  useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/appwkq4vBeLzCktu2/Roles%20disponibles?api_key=${process.env.REACT_APP_APIKEY_AIRTABLE}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOfertas(data.records);
        //console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //console.log(ofertas)

  return (
    <div className="candidatos">
      <HeaderENG />
      <div className="background">
            <img className="img_back1" src={vectorFondo}/>
            <img className="img_back2" src={vectorFondo}/>
            <img className="img_back3" src={vectorFondo}/>
        </div>
      <nav id="sideNav">
        <ul className="side-menu">
          <li>
            <a href="/homeENG">HOME</a>
          </li>
          <li>
            |<a href="/empresasENG">BUSINESS</a>
          </li>
          <li>
            <a href="/CandidatosENG">CANDIDATES</a>
          </li>
          <li>
            <a href="/FAQsENG">FAQs</a>
          </li>
        </ul>
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
      </nav>
      <main>
        <h4 className="puestos">OPEN ROLES</h4>
        
        <div className="h1">
          <h1 className="question">
          Are you looking for a change in your professional path?
          </h1>
        </div>
        <h2 id="offers">Available offers</h2>
        <div className="buttons buttons-desktop scrollbox">
          <div className="candidate-buttons">
            {ofertas.length > 0 ? (
              ofertas.map((oferta) => (
                <a
                  className="link-pupup"
                  href="/popup"
                  key={oferta.fields.Codigo}
                >
                  <button>
                    <h2 className="designer">
                      {oferta.fields.Nombre}
                      <span className="google">{oferta.fields.Codigo}</span>
                    </h2>
                    <h3 className="adress">
                      Ubication: {oferta.fields.Ubicacion}
                      <span className="date">
                      Creation date: {oferta.fields.FechaDeCreacion}
                      </span>
                    </h3>
                    <h3 className="date-mobile">
                    Creation date: {oferta.fields.fechaDeCreacion}
                    </h3>
                  </button>
                </a>
              ))
            ) : (
              <h1>Wait...</h1>
            )}
          </div>
        </div>
        <h2 id="technologies">In these technologies</h2>
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
          <h2 id="contacto">Contacto</h2>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="inputs">
            <h3>Name*</h3>
            {errors.nombre ? (
              <p className="alertaForm">{errors.nombre}</p>
            ) : null}
            <input type="text" onChange={(e) => setNombre(e.target.value)} />

            <h3>Email*</h3>
            {errors.email ? <p className="alertaForm">{errors.email}</p> : null}
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
            <h3>Address*</h3>
            {errors.direccion ? (
              <p className="alertaForm">{errors.direccion}</p>
            ) : null}
            <input type="text" onChange={(e) => setDireccion(e.target.value)} />
            <h3>LinkedIn*</h3>
            {errors.linkedin ? (
              <p className="alertaForm">{errors.linkedin}</p>
            ) : null}
            <input type="text" onChange={(e) => setLinkedIn(e.target.value)} />
            <h3>Experience</h3>
            <select
            className="fondo-blanco"
              name="info"
              className="experience"
              onChange={(e) => setExperiencia(e.target.value)}
            >
              <option value="0"> </option>
              <option value="0-1"> 0-1 year </option>
              <option value="1-2"> 1-2 years </option>
              <option value="2-3"> 2-3 years </option>
              <option value="3+">3 or more years </option>
            </select>
          </div>
          <div className="details">
            <h3>Upload your CV</h3>
            <div className="file">
              <label form="archive">
                +
                <input type="file" id="archive" />
              </label>
            </div>
            <h3>Intended remuneration</h3>
            <div className="value">
              <select
              className="fondo-blanco"
                name="value"
                onChange={(e) => setMonedaRemuneracion(e.target.value)}
              >
                <option value="0">Select</option>
                <option value="ARS">ARS</option>
                <option value="USD">USD</option>
              </select>
              <input type="text" onChange={(e) => setRemuneracionPretendida(e.target.value)}/>
            </div>
            <h3>I'm interested in the roles of</h3>
            <select className="fondo-blanco"
              name="info"
              onChange={(e) => setInteresadoEnRoles(e.target.value)}
            >
              <option value="0"></option>
              <option value="Rol1">Rol1</option>
              <option value="Rol2">Rol2</option>
              <option value="Rol3">Rol3</option>
              <option value="Rol4">Rol4</option>
            </select>
            <h3>How did you meet us</h3>
            <select
              className="fondo-blanco"
              name="info"
              onChange={(e) => setComoNosConociste(e.target.value)}
            >
              <option value="0"></option>
              <option value="Recruiter">Recruiter</option>
              <option value="Conocido">Social media</option>
              <option value="Google">Google</option>
              <option value="Otros">Other</option>
            </select>
            <h3>Technologies</h3>
            <select
            className="fondo-blanco"  
              name="info"
              onChange={(e) => setTecnologias(e.target.value)}
            >
              <option value="0"></option>
              <option value="Node">Node</option>
              <option value="React">React</option>
              <option value="Python">Python</option>
              <option value="C#">C#</option>
            </select>
            <div className="condition">
              <div className="acept-conditions">
                <input
                
                  type="checkbox"
                  className="terms"
                  onClick={(e) => setCondicionesLegales(e.target.value)}
                />
                <h3>Accept legal conditions</h3>
                
              </div>
              {errors.condicionesLegales ? (
                  <p className="alertaForm">{errors.condicionesLegales}</p>
                ) : null}
              <button type="submit" className="send-button">
                Send
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
              target="_blank"
              className="linkedin"
              href="https://www.linkedin.com/company/linkit-hr/"
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
        <div className="info-candidatos">
          <a href="/homeENG">
          <p className="footer-button">HOME</p>
          </a>
          <a className="empresas-button" href="/empresasENG">
            <p className="footer-button">BUSINESS</p>
          </a>
          <a href="/CandidatosENG">
          <p className="footer-button">CANDIDATES</p>
          </a>
          <a href="/faqsENG">
          <p className="footer-button">FAQS</p>
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
        <div className="rights-candidatos">
          <p>© 2022 LinkIT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}