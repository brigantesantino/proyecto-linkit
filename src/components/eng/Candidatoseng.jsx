import React, { useEffect, useState } from "react";
import Select from "react-select";
import "../../componentStyles/candidatos.css";
//import { useTranslation } from "react-i18next";
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
//import menuHambNegro from "../../images/menuHamburguesa.svg";
//import MenuHamburguesa from "./../MenuHamburguesa";
//import Header from "./../Header";
import USA from "../../images/banderaUsa.png"
import ARG from "../../images/banderaArg.png"
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import HeaderENG from "./HeaderENG";

import { postFormAirtableCandidatos } from "../../functions/postCandidatosAirtable";
import { valuesExperience, valuesSelectRoles } from "../../constants/selects";
import { valuesSelectComoNosConociste } from "../../constants/selects";
import { valuesSelectTecnologias } from "../../constants/selects";
export default function Candidatoseng() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [experiencia, setExperiencia] = useState("");
  const [monedaRemuneracion, setMonedaRemuneracion] = useState("");
  const [remuneracionPretendida, setRemuneracionPretendida] = useState("");
  const [interesadoEnRoles, setInteresadoEnRoles] = useState([]);
  //const [interesadoEnOtrosRoles, setInteresadoEnOtrosRoles] = useState("");
  const [comoNosConociste, setComoNosConociste] = useState([]);
  const [tecnologias, setTecnologias] = useState("");
  const [condicionesLegales, setCondicionesLegales] = useState("");
  const [ofertas, setOfertas] = useState({});
  const [data, setData] = useState("");
  const [captcha, setCaptcha] = useState("");

  const [googleObject, setGoogleObject] = useState({});
  const [fileName, setFileName] = useState("");

  //const [menu, setMenu] = useState(false);
  const [popup, setPopup] = useState(false);
  const [errors, setErrors] = useState({});

  function validate(input, event) {
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
    if (input.condicionesLegales === "") {
      errorsObj.condicionesLegales = "Debes aceptar las condiciones legales";
      contadorErrores++;
    }
    if (input.tecnologias === "") {
      errorsObj.tecnologias = "Las tecnologias son requeridas";
      contadorErrores++;
    }
    if (input.direccion === "") {
      errorsObj.direccion = "La dirección es requerida";
      contadorErrores++;
    }
    if (input.captcha === "") {
      errorsObj.captcha = "El captcha es requerido";
      contadorErrores++;
    }
    if (contadorErrores === 0) {
      console.log("no hay errores");
      postFormAirtableCandidatos(
        input.nombre,
        input.email,
        input.direccion,
        input.linkedIn,
        input.experiencia.value,
        googleObject,
        input.monedaRemuneracion,
        input.remuneracionPretendida,
        input.arrayConvertidoInteresadoEnRoles,
        input.arrayConvertidoComoNosConociste,
        input.arrayConvertidoTecnologias,
        input.condicionesLegales,
        input.ofertas
      );
      event.preventDefault();
      setTimeout(() => window.location.reload(), 3000);
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
      captcha,
    };
    validate(objetoAVerificar, event);
  }

  function guardarArchivo(e) {
    var file = e.target.files[0]; //the file
    setFileName(file.name);
    var reader = new FileReader(); //this for convert to Base64
    reader.readAsDataURL(e.target.files[0]); //start conversion...
    reader.onload = function (e) {
      //.. once finished..
      var rawLog = reader.result.split(",")[1]; //extract only thee file data part
      var dataSend = {
        dataReq: { data: rawLog, name: file.name, type: file.type },
        fname: "uploadFilesToGoogleDrive",
      }; //preapre info to send to API
      fetch(
        "https://script.google.com/macros/s/AKfycbzt2CUhi-h-rH167FECS9F_MTGT9lAObcT5aseQvg_KxZ5PbAyIF8dmCVUgIoxR4pUVMw/exec", //your AppsScript URL
        { method: "POST", body: JSON.stringify(dataSend) }
      ) //send to Api
        .then((res) => res.json())
        .then((a) => {
          console.log(a); //See response
          console.log(a.id);
          const object = {
            id: a.id,
            filename: file.name,
          };
          setGoogleObject(object);
        })
        .catch((e) => console.log(e)); // Or Error in console
    };
  }

  function onChangeCaptcha(value) {
    setCaptcha(value);
  }
  useEffect(() => {
    try {
      fetch(
        `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_AIRTABLE}/Roles%20disponibles?api_key=${process.env.REACT_APP_APIKEY_AIRTABLE}`
      )
        .then((res) => res.json())
        .then((data) => {
          setOfertas(data.records);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);


  return (
    <div className="candidatos">
      <HeaderENG />
      <div className="background">
            <img alt="" className="img_back1" src={vectorFondo}/>
            <img alt="" className="img_back2" src={vectorFondo}/>
            <img alt="" className="img_back3" src={vectorFondo}/>
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
          <h2 id="contacto">Contact</h2>
        </div>
        <form className="formCandidatos" onSubmit={(e) => handleSubmit(e)}>
          <div className="inputs">
            <h3>Name*</h3>
            {errors.nombre ? (
              <p className="alertaForm">{errors.nombre}</p>
            ) : null}
            <input placeholder="Name"  type="text" onChange={(e) => setNombre(e.target.value)} />

            <h3>Email*</h3>
            {errors.email ? <p className="alertaForm">{errors.email}</p> : null}
            <input placeholder=" Email" type="email" onChange={(e) => setEmail(e.target.value)} />
            <h3>Address*</h3>
            {errors.direccion ? (
              <p className="alertaForm">{errors.direccion}</p>
            ) : null}
            <input placeholder="Address" type="text" onChange={(e) => setDireccion(e.target.value)} />
            <h3>LinkedIn*</h3>
            {errors.linkedin ? (
              <p className="alertaForm">{errors.linkedin}</p>
            ) : null}
            <input placeholder="*Linkedin" type="text" onChange={(e) => setLinkedIn(e.target.value)} />
            <h3>Experience</h3>
            <Select
                  placeholder="Experience"
                  className="selectCandidatos"
                  options={valuesExperience}
                  onChange={(opt) => setExperiencia(opt)}
                />
          </div>
          <div className="details">
            <h3>Upload your CV</h3>
            <div className="file">
              <label form="archive">
                +
                <input type="file" id="archive" onChange={(e) => guardarArchivo(e)}/>
              </label>
            </div>
            {fileName}<br></br>
            <h3>Intended remuneration</h3>
            <div className="value">
              <select
                className="fondo-blanco"
                name="value"
                onChange={(e) => setMonedaRemuneracion(e.target.value)}
              >
                <option value="0">Choose</option>
                <option value="ARS">ARS</option>
                <option value="USD">USD</option>
              </select>
              <input placeholder="Intended remuneration"
                type="text"
                onChange={(e) => setRemuneracionPretendida(e.target.value)}
              />
            </div>
            <h3>Interested in roles</h3>

            <Select placeholder="Choose the role(s)"
              className="selectCandidatos"
              options={valuesSelectRoles}
              isMulti
              onChange={(opt) => setInteresadoEnRoles(opt)}
            />
            <h3>Otros</h3>
          <input 
            className="inp"
            type="textarea"
            placeholder="Others..."
            
          />
            <h3>How did you meet us</h3>
            <Select  placeholder="How did you meet us"
              className="selectCandidatos"
              options={valuesSelectComoNosConociste}
              isMulti
              onChange={(opt) => setComoNosConociste(opt)}
            />

            <h3>Technologies</h3>

            <Select placeholder="Choose the technology(s)"
              className="selectCandidatos"
              options={valuesSelectTecnologias}
              isMulti
              onChange={(opt) => setTecnologias(opt)}
            />
<ReCAPTCHA sitekey="6Lc2oTcgAAAAAPR8ONUY_0RU52exoKd4f45VPtmw" onChange={onChangeCaptcha} />
            {errors.captcha ? <p className="alertaForm">{errors.captcha}</p> : null}
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
          <p className="footer-button">FAQs</p>
          </a>
          <div className="contenedor-idiomas-cand">
              <a href="/homeENG" className="contenedor-bandera">
                <div className="idioma-component">ENG |</div>
                </a>
              <a className="contenedor-bandera" href="/home">
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