import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../componentStyles/popup.css";
import { postFormAirtableCandidatosEspecial } from "../functions/postCandidatosAirtable";
import Select from "react-select";
import { valuesSelectComoNosConociste } from "../constants/selects"
import { valuesSelectTecnologias } from "../constants/selects"



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

  const location = useLocation();
  const data = location.state;

  const codigo = data.Codigo;

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
      postFormAirtableCandidatosEspecial(
        codigo,
        input.nombre,
        input.email,
        input.direccion,
        input.linkedIn,
        input.experiencia,
        input.remuneracionPretendida,
        input.arrayConvertidoComoNosConociste,
        input.arrayConvertidoTecnologias,
        input.monedaRemuneracion
      )
      event.preventDefault();
      setTimeout(() => window.location.reload(),1000)
    } else {
      setErrors(errorsObj);
      console.log("hay errores no se hizo el post", errorsObj);
      event.preventDefault()

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
    event.preventDefault()

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
    };
    validate(objetoAVerificar, event);
    event.preventDefault()
    //console.log("validate",validate(objetoAVerificar));
  }

  return (
    <div className="popup">
      <a className="arrow" href="/candidatos">
        x
      </a>

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
          <input type="text" onChange={(e) => setNombre(e.target.value)} />
          <h3>Email</h3>
          {errors.email ? <p className="alertaForm">{errors.email}</p> : null}
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <h3>Dirección</h3>
          {errors.direccion ? (
            <p className="alertaForm">{errors.direccion}</p>
          ) : null}
          <input type="text" onChange={(e) => setDireccion(e.target.value)} />
          <h3>Linkedin*</h3>
          {errors.linkedin ? (
            <p className="alertaForm">{errors.linkedin}</p>
          ) : null}
          <input type="text" onChange={(e) => setLinkedIn(e.target.value)} />
          <h3>Experiencia</h3>
          <select
            name="info"
            className="experience"
            onChange={(e) => setExperiencia(e.target.value)}
          >
            <option value="0"> </option>
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
            className="remuneracion"
            type="text"
            onChange={(e) => setRemuneracionPretendida(e.target.value)}
          />

          <h3>Cómo nos conociste</h3>
         
          <Select className="xd" options={valuesSelectComoNosConociste} isMulti onChange={(opt) => setComoNosConociste(opt)}/>
          
         
          {/* <select
            name="info"
            onChange={(e) => setComoNosConociste(e.target.value)}
          > */}
            {/* <option value="0"></option>
            <option value="Recruiter">Recruiter</option>
            <option value="Conocido">Conocido</option>
            <option value="Google">Google</option>
            <option value="Otros">Otros</option>
          </select> */}
          <h3>Tecnologías</h3>
          <Select
              className="xd"
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
    </div>
  );
}
