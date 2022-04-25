import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../componentStyles/popup.css";
import { postFormAirtableCandidatos } from "../actions/candidatosActions";

export default function Popup() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [experiencia, setExperiencia] = useState("");
  /*   const [cv, setCv] = useState(""); */
  const [remuneracionPretendida, setRemuneracionPretendida] = useState("");
  const [comoNosConociste, setComoNosConociste] = useState("");
  const [tecnologias, setTecnologias] = useState("");
  const [condicionesLegales, setCondicionesLegales] = useState("");

  const [errors, setErrors] = useState({});

  const { state } = useLocation();
  console.log('state',state);

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
      remuneracionPretendida,
    };
    validate(objetoAVerificar);
    event.preventDefault();
  }

  return (
    <div className="popup">
      <a className="arrow" href="/candidatos">
        🠔
      </a>
      <h2 className="designer">
        UX Designer <span className="google">en Google</span>
      </h2>
      <div className="adress">
        <h2 className="adress">
          Ubicación: <span className="date">Buenos Aires,Argentina</span>
        </h2>
      </div>

      <h3>Description</h3>
      <div>
        <p>
          Hey there! We're looking for an Account Manager that has experience
          with managing clients, digital marketing strategies, and managing
          complex projects. Someone organized, detail-oriented, great at working
          with and communicating with clients, and skilled at prioritizing tasks
          and project deliverable
        </p>

        <p>Does this feel like you? Then go ahead and hit apply!</p>
        <h3 className="location">
          Location:{" "}
          <span className="remote">100% Remote, reporting to Los Angeles</span>
        </h3>
        <h3 className="engagement">
          Engagement:{" "}
          <span className="date">Full-time role (40 hours per week)</span>
        </h3>
        <div>
          <h3>About us:</h3>
          <p>Athyna is a remote recruitment agency.</p>
          <p>
            We exist to reimagine the workplace, by ethically sourcing highly
            skilled employees from a global pool of talent and giving businesses
            the tools they need to become successful, reinvest their time and
            bring value to their communities.
          </p>

          <p>
            We are also proudly carbon neutral and members of 1% for the Planet,
            pledging 1% of our annual sales to fight for environmental causes.
            We’re also keen on social impact - we truly care about everyone on
            our team, and we want to make the world a better place for all of
            us.
          </p>
        </div>
        <div>
          <h3>About the client:</h3>
          <p>
            Our client is a rapidly growing Los Angeles based Digital Marketing
            Agency seeking hungry and ambitious candidates. They pride
            themselves on their work ethic, dedication to their clients, and
            curiosity. They offer their services to small and medium-sized
            businesses in the home services industry. Their team is growing
            quickly and there is room for growth!
          </p>
        </div>
        <div>
          <h3>Day-to-Day Responsibilities:</h3>
          <p>
            In this position, you are responsible for maintaining happy,
            well-informed, clients. You are also responsible for:
          </p>

          
            <h4>Creating Client Marketing Strategies</h4>
            <h4>Managing Client Projects through the CRM</h4>
            <h4>Maintaining all Communications with the Client</h4>
            <h4>Make sure Client Receives all Deliverables each month</h4>
            <h4>Requirements</h4>
            <h4>
              You are a people person and the people who work with you
              appreciate your talents and look to you for guidance
            </h4>
            <h4>
              You are hard-working and thrive when faced with new challenges
            </h4>
            <h4>
              Creativity and outside the box thinking is your second nature
            </h4>
            <h4>
              You’ve worked remotely or with clients in other countries and are
              comfortable being your own manager
            </h4>
          
        </div>
      </div>
      <button type="submit" className="apply">
        Apply
      </button>
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
          <h3>Remuneracion pretendida</h3>
          <select
            name="info"
            onChange={(e) => setRemuneracionPretendida(e.target.value)}
          >
            <option value="0"></option>
            <option value="400-600">400-600</option>
            <option value="600-800">600-800</option>
            <option value="800-1000">800-1000</option>
            <option value="1000 + ">800-1000</option>
          </select>
          <h3>Cómo nos conociste</h3>
          <select
            name="info"
            onChange={(e) => setComoNosConociste(e.target.value)}
          >
            <option value="0"></option>
            <option value="Recruiter">Recruiter</option>
            <option value="Conocido">Conocido</option>
            <option value="Google">Google</option>
            <option value="Otros">Otros</option>
          </select>
          <h3>Tecnologías</h3>
          <select name="info" onChange={(e) => setTecnologias(e.target.value)}>
            <option value="0"></option>
            <option value="Node">Node</option>
            <option value="React">React</option>
            <option value="Python">Python</option>
            <option value="C#">C#</option>
          </select>

          <div className="condition">
            <div className="acept-conditions">
              <input type="checkbox" className="terms" onClick={(e) => setCondicionesLegales(e.target.value)}/>
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