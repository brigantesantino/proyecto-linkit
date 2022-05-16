import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Select from "react-select";

import "../componentStyles/candidatos.css";
import { useTranslation } from "react-i18next";
import image17 from "../images/image 17.svg";
import image18 from "../images/image 18.png";
import image20 from "../images/image 20.svg";
import image8 from "../images/image 8.svg";
import image9 from "../images/image 9.svg";
import image10 from "../images/image 10.svg";
import image12 from "../images/image 12.svg";
import image13 from "../images/image 13.svg";
import image14 from "../images/image 14.svg";
import image15 from "../images/image 15.png";
import image21 from "../images/image 21.png";
import vectorFondo from "../images/vectorFondo.svg";
import vector from "../images/Vector.svg";
import vector1 from "../images/Vector-1.svg";
import whatsApp from "../images/WhatsApp.svg";
import menuHambNegro from "../images/menuHamburguesa.svg";
import MenuHamburguesa from "./MenuHamburguesa";
import Header from "./Header";
import USA from "../images/banderaUsa.png";
import ARG from "../images/banderaArg.png";

import { postFormAirtableCandidatos } from "../functions/postCandidatosAirtable";

import Popup from "./Popup";

import { valuesSelectRoles } from "../constants/selects";
import { valuesSelectComoNosConociste } from "../constants/selects";
import { valuesSelectTecnologias } from "../constants/selects";

export default function Candidatos() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [experiencia, setExperiencia] = useState("");
  const [monedaRemuneracion, setMonedaRemuneracion] = useState("");
  const [remuneracionPretendida, setRemuneracionPretendida] = useState("");
  const [interesadoEnRoles, setInteresadoEnRoles] = useState([]);
  const [interesadoEnOtrosRoles, setInteresadoEnOtrosRoles] = useState("");
  const [comoNosConociste, setComoNosConociste] = useState([]);
  const [tecnologias, setTecnologias] = useState("");
  const [condicionesLegales, setCondicionesLegales] = useState("");
  const [ofertas, setOfertas] = useState({});
  const [data, setData] = useState("");

  const [menu, setMenu] = useState(false);
  const [popup, setPopup] = useState(false);
  const [errors, setErrors] = useState({});

  function validate(input, event) {
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
        input.arrayConvertidoInteresadoEnRoles,
        input.arrayConvertidoComoNosConociste,
        input.arrayConvertidoTecnologias,
        input.condicionesLegales,
        input.ofertas
      );
      event.preventDefault();
      setTimeout(() => window.location.reload(),1000)
    } else {
      setErrors(errorsObj);
      console.log("hay errores no se hizo el post", errorsObj);
      event.preventDefault();
    }
  }

  function convertirArray(array) {
    let arrayConvertido = [];
    try {
      array.forEach((element) => {
        arrayConvertido.push(element.value);
      });
      console.log("arr", arrayConvertido);
      return arrayConvertido;
    } catch (error) {
      console.log("error", error);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("handleSubmit");
    const arrayConvertidoInteresadoEnRoles = convertirArray(interesadoEnRoles);
    const arrayConvertidoComoNosConociste = convertirArray(comoNosConociste);
    const arrayConvertidoTecnologias = convertirArray(tecnologias);
    const objetoAVerificar = {
      nombre,
      email,
      direccion,
      linkedIn,
      experiencia,
      condicionesLegales,
      arrayConvertidoTecnologias,
      arrayConvertidoComoNosConociste,
      arrayConvertidoInteresadoEnRoles,
      remuneracionPretendida,
      monedaRemuneracion,
    };
    validate(objetoAVerificar, event);
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

  return (
    <div className="candidatos">
      <Header />
      <div className="background">
        <img className="img_back1" src={vectorFondo} />
        <img className="img_back2" src={vectorFondo} />
        <img className="img_back3" src={vectorFondo} />
      </div>
      <nav id="sideNav">
        <ul className="side-menu">
          <li>
            <a href="index.html">INICIO</a>
          </li>
          <li>
            |<a href="empresas.html">EMPRESAS</a>
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
            {ofertas.length > 0 ? (
              ofertas.map((oferta) => (
                <a className="link-pupup" key={oferta.fields.Codigo}>
                  <Link
                    to={`/popup/${oferta.fields.Codigo}`}
                    state={oferta.fields}
                  >
                    <p onClick={() => setData(oferta.fields)}>
                      <button>
                        <h2 className="designer">
                          {oferta.fields.Nombre}
                          <span className="google">{oferta.fields.Codigo}</span>
                        </h2>
                        <h3 className="adress">
                          Ubicación: {oferta.fields.Ubicacion}
                          <span className="date">
                            Fecha de creacion:{oferta.fields.FechaDeCreacion}
                          </span>
                        </h3>
                        <h3 className="date-mobile">
                          Fecha de creacion:{oferta.fields.fechaDeCreacion}
                        </h3>
                      </button>
                    </p>
                  </Link>
                </a>
              ))
            ) : (
              <h1>Cargando ofertas...</h1>
            )}
          </div>
          {popup && <Popup data={data} />}
        </div>
        <h2 id="technologies">En estas tecnologías</h2>
        <div className="images">
          <div className="images-wrapper">
            <span className="carrusel">
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
            </span>
            <span className="carrusel">
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
            </span>
          </div>
        </div>
        <div>
          <h2 id="contacto">Contacto</h2>
        </div>
        <form className="formCandidatos" onSubmit={(e) => handleSubmit(e)}>
          <div className="inputs">
            <h3>Nombre*</h3>
            {errors.nombre ? (
              <p className="alertaForm">{errors.nombre}</p>
            ) : null}
            <input placeholder=" Nombre"  type="text" onChange={(e) => setNombre(e.target.value)} />

            <h3>Email*</h3>
            {errors.email ? <p className="alertaForm">{errors.email}</p> : null}
            <input placeholder=" Email" type="email" onChange={(e) => setEmail(e.target.value)} />
            <h3>Dirección*</h3>
            {errors.direccion ? (
              <p className="alertaForm">{errors.direccion}</p>
            ) : null}
            <input placeholder=" Direccion" type="text" onChange={(e) => setDireccion(e.target.value)} />
            <h3>LinkedIn*</h3>
            {errors.linkedin ? (
              <p className="alertaForm">{errors.linkedin}</p>
            ) : null}
            <input placeholder="*Linkedin" type="text" onChange={(e) => setLinkedIn(e.target.value)} />
            <h3>Experiencia</h3>
            <select 
              className="experience"
              name="info"
              onChange={(e) => setExperiencia(e.target.value)}
            >
              <option value="0">Experiencia </option>
              <option value="0-1"> 0-1 año </option>
              <option value="1-2"> 1-2 años </option>
              <option value="2-3"> 2-3 años </option>
              <option value="3+">3 o mas años </option>
            </select>
          </div>
          <div className="details">
            <h3>Carga tu CV</h3>
            <div className="file">
              <label form="archive">
                +
                <input type="file" id="archive" />
              </label>
            </div>
            <h3>Remuneracion pretendida</h3>
            <div className="value">
              <select
                className="fondo-blanco"
                name="value"
                onChange={(e) => setMonedaRemuneracion(e.target.value)}
              >
                <option value="0">Elegir</option>
                <option value="ARS">ARS</option>
                <option value="USD">USD</option>
              </select>
              <input placeholder="Remuneracion pretendida"
                type="text"
                onChange={(e) => setRemuneracionPretendida(e.target.value)}
              />
            </div>
            <h3>Interesado en roles</h3>

            <Select placeholder="Elige lo/s rol/es"
              className="selectCandidatos"
              options={valuesSelectRoles}
              isMulti
              onChange={(opt) => setInteresadoEnRoles(opt)}
            />
            <h3>Otros</h3>
          <input 
            className="inp"
            type="textarea"
            placeholder="Otros..."
            
          />
            <h3>Cómo nos conociste</h3>
            <Select  placeholder="Cómo nos conociste"
              className="selectCandidatos"
              options={valuesSelectComoNosConociste}
              isMulti
              onChange={(opt) => setComoNosConociste(opt)}
            />

            <h3>Tecnologías</h3>

            <Select placeholder="Elige la/s tecnologia/s"
              className="selectCandidatos"
              options={valuesSelectTecnologias}
              isMulti
              onChange={(opt) => setTecnologias(opt)}
            />

            <div className="condition">
              <div className="acept-conditions">
                <input
                  type="checkbox"
                  className="terms"
                  onClick={(e) => setCondicionesLegales(e.target.value)}
                />
                <h3>Aceptar condiciones legales</h3>
              </div>
              {errors.condicionesLegales ? (
                <p className="alertaForm">{errors.condicionesLegales}</p>
              ) : null}
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
          <a href="/home">
            <p className="footer-button">INICIO</p>
          </a>
          <a className="empresas-button" href="/empresas">
            <p className="footer-button">EMPRESAS</p>
          </a>
          <a href="/Candidatos">
            <p className="footer-button">CANDIDATOS</p>
          </a>
          <a href="/faqs">
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
