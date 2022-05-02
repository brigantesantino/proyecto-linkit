import React, { useState } from "react";
import "../componentStyles/empresas.css";
import { postFormAirtable } from "../actions/formActions";

import menuHambNegro from "../images/menuHamburguesa.svg";
import MenuHamburguesa from "./MenuHamburguesa";
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
import vectorFondo from "../images/vectorFondo.svg"
import vector from "../images/Vector.svg";
import vector1 from "../images/Vector-1.svg";
import whatsApp from "../images/WhatsApp.svg";
import USA from "../images/banderaUsa.png"
import ARG from "../images/banderaArg.png"
import Header from "./Header";

import Select from "react-select";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    width:"100%"
  })}
  
export default function Empresas() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [motivoDeContacto, setMotivoDeContacto] = useState("");
  const [interesadoEnRoles, setInteresadoEnRoles] = useState([]);
  const [interesadoEnOtrosRoles, setInteresadoEnOtrosRoles] = useState("");
  const [comoNosConociste, setComoNosConociste] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [errors, setErrors] = useState({});

  async function validate(input, event, arrayConvertidoInteresadoEnRoles) {
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
    if (input.linkedin === "") {
      errorsObj.linkedin = "El linkedin es requerido";
      contadorErrores++;
    }
    if (input.motivoDeContacto === "") {
      errorsObj.motivoDeContacto = "El motivo de contacto es requerido";
      contadorErrores++;
    }
    if (contadorErrores === 0) {
      console.log("no hay errores");
      postFormAirtable(
        nombre,
        email,
        linkedin,
        motivoDeContacto,
        arrayConvertidoInteresadoEnRoles,
        interesadoEnOtrosRoles,
        comoNosConociste,
        mensaje
      )
      window.location.reload(false);
    } else {
      event.preventDefault();
      console.log("hay errores");
    }
    setErrors(errorsObj);
  }

  function convertirArray(array) {
    let arrayConvertido = [];
    array.forEach(element => {
      arrayConvertido.push(element.value);
    });
    //console.log('arr', arrayConvertido)
    return arrayConvertido;
  }

  async function handleSubmit(event) {
    const arrayConvertidoInteresadoEnRoles = convertirArray(interesadoEnRoles);
    const objetoAVerificar = {
      nombre,
      email,
      linkedin,
      motivoDeContacto,
      arrayConvertidoInteresadoEnRoles,
      comoNosConociste,
      mensaje,
    };
    validate(objetoAVerificar, event, arrayConvertidoInteresadoEnRoles);
  }
  
  
  console.log("int",interesadoEnRoles)
  console.log("tipeof", typeof interesadoEnRoles)




  const valuesSelect = [
    { label: 'Software Developer', value: 'Software Developer' },
    { label: 'QA', value: 'QA' },
    { label: 'UX/UI Designer', value: 'UX/UI Designer' },
    { label: 'Proyect Manager', value: 'Proyect Manager' },
    { label: 'Team Lead', value: 'Team Lead' },
    { label: 'Big Data', value: 'Big Data' },
    { label: 'Machine Learning', value: 'Machine Learning' },
    { label: 'Web 3.0', value: 'Web 3.0' },
    { label: 'Blockchain', value: 'Blockchain' }
  ];


  return (<>
    <div className="empresas">
    <Header/>
    <div className="background">
            <img className="img_back1" src={vectorFondo}/>
            <img className="img_back2" src={vectorFondo}/>
            <img className="img_back3" src={vectorFondo}/>
        </div>
    
    <main>
      <h4 className="search">BUSQUEDA</h4>
      <div className="h1">
        <h1 className="question">
          ¿Estás buscando talento tech para tu empresa?
        </h1>
      </div>
      <h2 id="rubros">Roles disponibles</h2>
      <div className="buttons-desktop">
        <div className="buttons">
          <button className="puestos-gradiente">
            <p>Software Developers</p>
          </button>
          <button className="puestos-gradiente">
            <p>QA (automation & manual)</p>
          </button>
          <button className="puestos-gradiente">
            <p>UX/UI Designers</p>
          </button>
          <button className="puestos-gradiente">
            <p>Proyect Managers</p>
          </button>
        </div>
        <div className="buttons2">
          <button className="puestos-gradiente">
            <p>Team Lead</p>
          </button>
          <button className="puestos-gradiente">
            <p>Big Data</p>
          </button>
          <button className="puestos-gradiente">
            <p>Web 3.0</p>
          </button>
        </div>
        <div className="buttons3">
          <button className="puestos-gradiente">
            <p>Machine learning</p>
          </button>
          <button className="puestos-gradiente">
            <p>Blockchain</p>
          </button>
        </div>
      </div>

      <div className="button-wrapper">
        <div className="scrollbox">
          <div className="buttons-mobile">
            <button>
              <p>Software Developers</p>
            </button>
            <button>
              <p>QA (automation & manual)</p>
            </button>
            <button>
              <p>UX/UI Designers</p>
            </button>
            <button>
              <p>IT Proyect managers</p>
            </button>

            <button>
              <p>Team Leaders</p>
            </button>
            <button>
              <p>Big Data</p>
            </button>
            <button>
              <p>Web 3.0</p>
            </button>

            <button>
              <p>Machine learning</p>
            </button>
            <button>
              <p>Blockchain</p>
            </button>
          </div>
        </div>
      </div>

      <h2 id="technologies">En estas tecnologías</h2>

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
          <h3>Nombre*</h3>{" "}
          {errors.nombre ? (
            <p className="alertaForm">{errors.nombre}</p>
          ) : null}
          <input placeholder="Nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <h3>Email*</h3>{" "}
          {errors.email ? <p className="alertaForm">{errors.email}</p> : null}
          <input placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3>LinkedIn*</h3>{" "}
          {errors.linkedin ? (
            <p className="alertaForm">{errors.linkedin}</p>
          ) : null}
          <input placeholder="*Linkedin"
            type="text"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
          <h3>Motivo de contacto*</h3>{" "}
          {errors.motivoDeContacto ? (
            <p className="alertaForm">{errors.motivoDeContacto}</p>
          ) : null}
          <input placeholder="¿Por qué nos contactaste?"
            type="text"
            value={motivoDeContacto}
            onChange={(e) => setMotivoDeContacto(e.target.value)}
          />
        </div>
        <div className="details">
          <h3>Interesado en roles</h3>
          <div className="checkboxes xd">
          <Select placeholder="Elige el/los roles" className="xd" options={valuesSelect} isMulti onChange={(opt) => setInteresadoEnRoles(opt)} />
          </div>
          <input 
            className="inp"
            type="textarea"
            placeholder="Otros..."
            onChange={(e) => setInteresadoEnOtrosRoles(e.target.value)}
          />
          <h3>Cómo nos conociste</h3>
          <select placeholder="hola"
          className="background-blanco"
            name="info"
            onChange={(e) => setComoNosConociste(e.target.value)}
          >
            <option value="opcion1"></option>
            <option value="opcion2">Recruiter</option>
            <option value="opcion3">Conocido</option>
            <option value="opcion4">Google</option>
            <option value="opcion5">Otros</option>
          </select>
          <h3 className="mensaje">Mensaje</h3>
          <textarea 
            name="message"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          ></textarea>
          <div className="condition">
            <div className="acept-conditions">
              <input type="checkbox" className="terms" />
              <h3>Aceptar condiciones legales</h3>
            </div>
            <button className="send-button" type="submit">
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

    </>
  );
}
