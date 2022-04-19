import React, { useState } from "react";
import "../componentStyles/empresas.css";
import { postFormAirtable } from "../actions/formActions";

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

import vector from "../images/Vector.svg";
import vector1 from "../images/Vector-1.svg";
import whatsApp from "../images/WhatsApp.svg";

import Header from "./Header";
import Empresaseng from "./eng/Empresaseng";
import Empresasesp from "./esp/Empresasesp";

export default function Empresas() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [motivoDeContacto, setMotivoDeContacto] = useState("");
  const [interesadoEnRoles, setInteresadoEnRoles] = useState([""]);
  const [interesadoEnOtrosRoles, setInteresadoEnOtrosRoles] = useState("");
  const [comoNosConociste, setComoNosConociste] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [errors, setErrors] = useState({});
  const [language, setLanguage] = useState("1");

  async function validate(input) {
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
    /* if (input.interesadoEnRoles === "") {
      errorsObj.interesadoEnRoles = "El rol es requerido";
      contadorErrores++;
    }
    if (input.comoNosConociste === "") {
      errorsObj.comoNosConociste = "El como nos conociste es requerido";
      contadorErrores++;
    }
    if (input.mensaje === "") {
      errorsObj.mensaje = "El mensaje es requerido";
      contadorErrores++;
    } */
    if (contadorErrores === 0) {
      console.log("no hay errores");
      postFormAirtable(
        nombre,
        email,
        linkedin,
        motivoDeContacto,
        interesadoEnRoles,
        interesadoEnOtrosRoles,
        comoNosConociste,
        mensaje
      );
    } else {
      console.log("hay errores");
    }
    setErrors(errorsObj);
  }

  async function handleSubmit(event) {
    const objetoAVerificar = {
      nombre,
      email,
      linkedin,
      motivoDeContacto,
      interesadoEnRoles,
      comoNosConociste,
      mensaje,
    };
    validate(objetoAVerificar);
    event.preventDefault();
  }
  
  function appendInteresadoEnRoles(event) {
    if (interesadoEnRoles[0] === "") {
      interesadoEnRoles[0] = event;
    } else {
      setInteresadoEnRoles([...interesadoEnRoles, event]);
    }
  }

  return (<>
    <Header setLanguage={setLanguage}/>

    {(language === '1') && <Empresaseng
      setNombre={setNombre}
      setEmail={setEmail}
      setLinkedin={setLinkedin}
      setMotivoDeContacto={setMotivoDeContacto}
      appendInteresadoEnRoles={appendInteresadoEnRoles}
      setInteresadoEnOtrosRoles={setInteresadoEnOtrosRoles}
      setComoNosConociste={setComoNosConociste}
      setMensaje={setMensaje}
      handleSubmit={handleSubmit}
    />}
    {(language === '2') && <Empresasesp
      setNombre={setNombre}
      setEmail={setEmail}
      setLinkedin={setLinkedin}
      setMotivoDeContacto={setMotivoDeContacto}
      appendInteresadoEnRoles={appendInteresadoEnRoles}
      setInteresadoEnOtrosRoles={setInteresadoEnOtrosRoles}
      setComoNosConociste={setComoNosConociste}
      setMensaje={setMensaje}
      handleSubmit={handleSubmit}
    />}

    </>
  );
}
