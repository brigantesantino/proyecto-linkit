import React, { useState } from "react";
import "../../componentStyles/empresas.css";
import { postFormAirtable } from "../../functions/postEmpresasAirtable";
import { valuesSelectRoles } from "../../constants/selects";
import { valuesSelectComoNosConociste } from "../../constants/selects";
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
import vectorFondo from "../../images/vectorFondo.svg";
import vector from "../../images/Vector.svg";
import vector1 from "../../images/Vector-1.svg";
import whatsApp from "../../images/WhatsApp.svg";
import ReCAPTCHA from "react-google-recaptcha";
import HeaderENG from "./HeaderENG";
import Select from "react-select";

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
  const [captcha, setCaptcha] = useState("");

  async function validate(
    input,
    event,
    arrayConvertidoInteresadoEnRoles,
    arrayConvertidoComoNosConociste
  ) {
    let errorsObj = {};
    let contadorErrores = 0;
    if (input.nombre === "") {
      errorsObj.nombre = "Name is required";
      contadorErrores++;
    }
    if (input.email === "") {
      errorsObj.email = "Email is required";
      contadorErrores++;
    }
    if (input.linkedin === "") {
      errorsObj.linkedin = "Linkedin is required";
      contadorErrores++;
    }
    if (input.motivoDeContacto === "") {
      errorsObj.motivoDeContacto = "The reason for contact is required";
      contadorErrores++;
    }
    if (input.captcha === "") {
      errorsObj.captcha = "El captcha es requerido";
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
        arrayConvertidoComoNosConociste,
        mensaje
      );
      event.preventDefault();
      setTimeout(() => window.location.reload(), 3000);
    } else {
      event.preventDefault();
      console.log("hay errores");
    }
    setErrors(errorsObj);
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

  async function handleSubmit(event) {
    const arrayConvertidoInteresadoEnRoles = convertirArray(interesadoEnRoles);
    const arrayConvertidoComoNosConociste = convertirArray(comoNosConociste);
    const objetoAVerificar = {
      nombre,
      email,
      linkedin,
      motivoDeContacto,
      arrayConvertidoInteresadoEnRoles,
      arrayConvertidoComoNosConociste,
      mensaje,
    };
    validate(
      objetoAVerificar,
      event,
      arrayConvertidoInteresadoEnRoles,
      arrayConvertidoComoNosConociste
    );
  }

  function onChangeCaptcha(value) {
    setCaptcha(value);
  }

  return (
    <>
      <div className="empresas">
        <HeaderENG />
        <div className="background">
          <img alt="" className="img_back1" src={vectorFondo} />
          <img alt="" className="img_back2" src={vectorFondo} />
          <img alt="" className="img_back3" src={vectorFondo} />
        </div>

        <main>
          <div className="h1">
            <h1 className="question">
              Are you looking for tech talent for your company?
            </h1>
          </div>
          <h2 id="rubros">Available roles</h2>
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
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="inputs">
              <div>
                <h3>Name*</h3>{" "}
                {errors.nombre ? (
                  <p className="alertaForm">{errors.nombre}</p>
                ) : null}
                <input
                  placeholder="Name"
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <h3>Email*</h3>{" "}
              {errors.email ? (
                <p className="alertaForm">{errors.email}</p>
              ) : null}
              <input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <h3>LinkedIn*</h3>{" "}
              {errors.linkedin ? (
                <p className="alertaForm">{errors.linkedin}</p>
              ) : null}
              <input
                placeholder="*Linkedin"
                type="text"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
              />
              <h3>Contact reason*</h3>{" "}
              {errors.motivoDeContacto ? (
                <p className="alertaForm">{errors.motivoDeContacto}</p>
              ) : null}
              <input
                placeholder="Why did you contact us?"
                type="text"
                value={motivoDeContacto}
                onChange={(e) => setMotivoDeContacto(e.target.value)}
              />
            </div>
            <div className="details">
              <h3>Interested in roles</h3>
              <div className="checkboxes xd">
                <Select
                  placeholder="Choose the role(s)"
                  className="xd"
                  options={valuesSelectRoles}
                  isMulti
                  onChange={(opt) => setInteresadoEnRoles(opt)}
                />
              </div>
              <input
                className="inp"
                type="textarea"
                placeholder="Others..."
                onChange={(e) => setInteresadoEnOtrosRoles(e.target.value)}
              />
              <h3>How did you meet us</h3>
              <Select
                placeholder="Choose how you met us"
                className="xd"
                isMulti
                options={valuesSelectComoNosConociste}
                onChange={(opt) => setComoNosConociste(opt)}
              />
              <h3 className="mensaje">Message</h3>
              <textarea
                name="message"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              ></textarea>
              <ReCAPTCHA
                sitekey="6Lc2oTcgAAAAAPR8ONUY_0RU52exoKd4f45VPtmw"
                onChange={onChangeCaptcha}
              />
              {errors.captcha ? (
                <p className="alertaForm">{errors.captcha}</p>
              ) : null}
              <div className="condition">
                <div className="acept-conditions">
                  <input type="checkbox" className="terms" />
                  <h3>Accept legal conditions</h3>
                </div>
                <button className="send-button" type="submit">
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
              <a className="gmail" href="/contacto">
                <img alt="" src={vector1} />
              </a>
              <a className="wpp" href="https://wa.me/+5491165287429">
                <img alt="" src={whatsApp} />
              </a>
            </div>
          </div>
          <div className="info-candidatos">
            <a href="/homeENG">
              <p className="footer-button">Home</p>
            </a>
            <a className="empresas-button" href="/empresasENG">
              <p className="footer-button">Business</p>
            </a>
            <a href="/CandidatosENG">
              <p className="footer-button">Candidates</p>
            </a>
            <a href="/faqsENG">
              <p className="footer-button">FAQs</p>
            </a>
            <div className="contenedor-idiomas-emp">
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
    </>
  );
}
