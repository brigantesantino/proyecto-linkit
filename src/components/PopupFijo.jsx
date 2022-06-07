import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../componentStyles/popup.css";
import { postFormAirtableCandidatosEspecial } from "../functions/postCandidatosAirtable";
import Select from "react-select";
import { valuesSelectComoNosConociste } from "../constants/selects";
import { valuesSelectTecnologias } from "../constants/selects";
import { valuesExperience } from "../constants/selects";

import ReCAPTCHA from "react-google-recaptcha";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from "react-loader-spinner";
import { Checkmark } from "react-checkmark";

export default function PopupFijo(props) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [experiencia, setExperiencia] = useState("");
  /*   const [cv, setCv] = useState(""); */
  const [remuneracionPretendida, setRemuneracionPretendida] = useState("");
  const [comoNosConociste, setComoNosConociste] = useState([]);
  const [tecnologias, setTecnologias] = useState([]);
  const [condicionesLegales, setCondicionesLegales] = useState("");
  const [monedaRemuneracion, setMonedaRemuneracion] = useState("");
  const [errors, setErrors] = useState({});
  const [fileName, setFileName] = useState("");
  const [googleObject, setGoogleObject] = useState({});

  const [captcha, setCaptcha] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [greenTick, setGreenTick] = useState(false);

  const location = useLocation();
  const data = location.state;

  const codigo = data.Codigo;

  function guardarArchivo(e) {
    setIsLoading(true);
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
          setIsLoading(false);
          setGreenTick(true);
        })
        .catch((e) => console.log(e)); // Or Error in console
    };
  }

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
    if (input.captcha === "") {
      errorsObj.captcha = "El captcha es requerido";
      contadorErrores++;
    }
    if (contadorErrores === 0) {
      console.log("no hay errores");
      postFormAirtableCandidatosEspecial(
        codigo,
        input.nombre,
        input.email,
        input.direccion,
        input.linkedIn,
        input.experiencia.value,
        googleObject,
        input.remuneracionPretendida,
        input.arrayConvertidoComoNosConociste,
        input.arrayConvertidoTecnologias,
        input.monedaRemuneracion
      );
      event.preventDefault();
      setTimeout(() => window.location.reload(), 30000);
    } else {
      setErrors(errorsObj);
      console.log("hay errores no se hizo el post", errorsObj);
      event.preventDefault();
    }
  }

  function convertirArray(array) {
    let arrayConvertido = [];
    array.forEach((element) => {
      arrayConvertido.push(element.value);
    });
    console.log("arr", arrayConvertido);
    return arrayConvertido;
  }

  function handleSubmit(event) {
    console.log("handleSubmit");
    event.preventDefault();

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
      remuneracionPretendida,
      monedaRemuneracion,
      captcha,
    };
    validate(objetoAVerificar, event);
    event.preventDefault();
    //console.log("validate",validate(objetoAVerificar));
  }

  function onChangeCaptcha(value) {
    setCaptcha(value);
  }
  return (
    <div className="popup">
      <div className="header-popup">
        <a className="arrow" href="/candidatos">
          🠔
        </a>
        <a href="/home">
          <button class="cta">
            <span>Volver al Home</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </a>
      </div>
      <h2 className="designer">{data.Nombre}</h2>

      <h3 className="color1">Description</h3>
      <div>
        <p className="text">{data.Descripcion}</p>

        <p className="text">
          Does this feel like you? Then go ahead and hit apply!
        </p>
        <h3 className="location color1">
          Location:{" "}
          <p className="negro">
            {data.ModalidadDeTrabajo}, {data.Ubicacion}
          </p>
        </h3>
        <h3 className="engagement color1">
          Engagement:{" "}
          <span className="date">Full-time role (40 hours per week)</span>
        </h3>
        <div></div>
        <div>
          <h3 className="color1">About the client:</h3>
          <p>{data.SobreElCliente}</p>
        </div>
        <div>
          <h3 className="color1">Day-to-Day Responsibilities:</h3>
          <p>{data.Responsabilidades}</p>
        </div>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="inputs">
          <h3>Nombre</h3>
          {errors.nombre ? <p className="alertaForm">{errors.nombre}</p> : null}
          <input
            placeholder="Nombre"
            type="text"
            onChange={(e) => setNombre(e.target.value)}
          />
          <h3>Email</h3>
          {errors.email ? <p className="alertaForm">{errors.email}</p> : null}
          <input
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3>Dirección</h3>
          {errors.direccion ? (
            <p className="alertaForm">{errors.direccion}</p>
          ) : null}
          <input
            placeholder="Direccion"
            type="text"
            onChange={(e) => setDireccion(e.target.value)}
          />
          <h3>Linkedin*</h3>
          {errors.linkedin ? (
            <p className="alertaForm">{errors.linkedin}</p>
          ) : null}
          <input
            placeholder="*Linkedin"
            type="text"
            onChange={(e) => setLinkedIn(e.target.value)}
          />
          <h3>Experiencia</h3>
          <Select
            placeholder="Experiencia"
            className="selectCandidatos"
            options={valuesExperience}
            onChange={(opt) => setExperiencia(opt)}
          />
        </div>
        <div className="details">
          <h3>Carga tu CV</h3>
          <div className="file">
            <label form="archive">
              +
              <input
                type="file"
                id="archive"
                onChange={(e) => guardarArchivo(e)}
              />
            </label>
            {isLoading ? (
              <div style={{ paddingLeft: 20 }}>
                <ThreeDots
                  height="50"
                  width="50"
                  ariaLabel="loading"
                  color="blue"
                />
              </div>
            ) : null}
            {greenTick ? (
              <div style={{ paddingLeft: 20 }}>
                <Checkmark size="medium" />
              </div>
            ) : null}
          </div>
          {fileName}
          <br></br>

          <h3>Moneda</h3>
          <select
            className="fondo-blanco"
            name="value"
            onChange={(e) => setMonedaRemuneracion(e.target.value)}
          >
            <option value="0">Elegir</option>
            <option value="ARS">ARS</option>
            <option value="USD">USD</option>
          </select>
          <h3>Remuneracion Pretendida</h3>
          <input
            placeholder="Remuneracion pretendida"
            className="remuneracion"
            type="text"
            onChange={(e) => setRemuneracionPretendida(e.target.value)}
          />

          <h3>Cómo nos conociste</h3>

          <Select
            className="xd"
            options={valuesSelectComoNosConociste}
            isMulti
            onChange={(opt) => setComoNosConociste(opt)}
          />

          <h3>Tecnologías</h3>
          <Select
            className="xd"
            options={valuesSelectTecnologias}
            isMulti
            onChange={(opt) => setTecnologias(opt)}
          />

          <div className="condition">
            <ReCAPTCHA
              sitekey="6Lc2oTcgAAAAAPR8ONUY_0RU52exoKd4f45VPtmw"
              onChange={onChangeCaptcha}
            />
            {errors.captcha ? (
              <p className="alertaForm">{errors.captcha}</p>
            ) : null}
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
    </div>
  );
}
