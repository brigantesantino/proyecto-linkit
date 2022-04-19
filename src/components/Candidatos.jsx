import React, { useEffect, useState } from "react";
import "../componentStyles/candidatos.css";

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

export default function Candidatos() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [experiencia, setExperiencia] = useState("");
  const [cv, setCv] = useState("");
  const [monedaRemuneracion, setMonedaRemuneracion] = useState("");
  const [remuneracionPretendida, setRemuneracionPretendida] = useState("");
  const [interesadoEnRoles, setInteresadoEnRoles] = useState("");
  const [comoNosConociste, setComoNosConociste] = useState("");
  const [tecnologias, setTecnologias] = useState("");
  
  const [ofertas, setOfertas] = useState({});

  async function handleSubmit(event) {
    console.log('handleSubmit');
  }

  useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/appwkq4vBeLzCktu2/Roles%20disponibles?api_key=${process.env.REACT_APP_APIKEY_AIRTABLE}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOfertas(data.records);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(ofertas)


  return (
    <div className="candidatos">
      <Header />
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
            {ofertas.length > 0 ? (ofertas.map((oferta) => (
              <a className="link-pupup" href="/popup" key={oferta.codigo}>
                <button>
                  <h2 className="designer">
                    {oferta.fields.Nombre}
                    <span className="google">{oferta.fields.SobreElCliente}</span>
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
              </a>
             ))) : (
              <h1>Cargando ofertas...</h1>
            )}
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
          </div>
        </div>
        <div>
          <h2 id="contacto">Contacto</h2>
        </div>
        <form onSubmit={(e)=> handleSubmit(e)}>
          <div className="inputs">
            <h3>Nombre</h3>
            <input type="text" onChange={(e)=> setNombre(e.target.value)} />
            <h3>Email</h3>
            <input type="email" onChange={(e)=> setEmail(e.target.value)}/>
            <h3>Dirección</h3>
            <input type="text" onChange={(e)=> setAdress(e.target.value)}/>
            <h3>LinkedIn*</h3>
            <input type="text" onChange={(e)=> setLinkedIn(e.target.value)}/>
            <h3>Experiencia</h3>
            <select name="info" className="experience" onChange={(e) => setExperiencia(e.target.value)}>
            <option value="0"></option>            
              <option value="opcion1">Entre 1 y 5 años</option>
              <option value="opcion2">Entre 5 y 10 años</option>
              <option value="opcion3">Más de 10 años</option>
              
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
              <select name="value" onChange={(e) => setMonedaRemuneracion(e.target.value)}>
                <option value="0">Elegir</option>
                <option value="ARS">ARS</option>
                <option value="USD">USD</option>
              </select>
              <input type="number" onChange={(e) => setRemuneracionPretendida(e.target.value)}/>
            </div>
            <h3>Interesado en roles</h3>
            <select name="info" onChange={(e) => setInteresadoEnRoles(e.target.value)}>
              <option value="0"></option>
              <option value="opcion1">xxxxxx</option>
              <option value="opcion2">xxxxxx</option>
              <option value="opcion3">xxxxxx</option>
              <option value="opcion4">xxxxxx</option>
            </select>
            <h3>Cómo nos conociste</h3>
            <select name="info" onChange={(e) => setComoNosConociste(e.target.value)}>
              <option value="0"></option>
              <option value="1">xxxxxx</option>
              <option value="2">xxxxxx</option>
              <option value="3">xxxxxx</option>
              <option value="4">xxxxxx</option>
            </select>
            <h3>Tecnologías</h3>
            <select name="info" onChange={(e) => setTecnologias(e.target.value)}>
              <option value="0"></option>
              <option value="1">xxxxxx</option>
              <option value="2">xxxxxx</option>
              <option value="3">xxxxxx</option>
              <option value="4">xxxxxx</option>
            </select>
            <div className="condition">
              <div className="acept-conditions">
                <input type="checkbox" className="terms" />
                <h3>Aceptar condiciones legales</h3>
              </div>
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
              className="linkedin"
              href="https://r.search.yahoo.com/_ylt=AwrCmnoYc0NiNFIAUBDX9wt.;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1648616345/RO=10/RU=https%3a%2f%2far.linkedin.com%2f/RK=2/RS=NOL2bRj1EEkj6dfnPKWAHekJg74-"
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
        <div className="info">
          <p className="home-button">INICIO</p>
          <a className="empresas-button" href="/empresas.html">
            <p className="business">EMPRESAS</p>
          </a>
          <p className="candidates">CANDIDATOS</p>
          <p className="faqs">FAQS</p>
          <div className="select">
            <a href="/eng/Candidates.html">
              <select name="language" id="">
                IDIOMA
                <option value="1">ESPAÑOL</option>
                <option value="2">INGLÉS</option>
              </select>
            </a>
          </div>
        </div>
        <div className="rights">
          <p>© 2022 LinkIT. All rights reserved.</p>
          <div className="linea">
            <p>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
          </div>
          <p>Developed by IT-TECHGROUP</p>
        </div>
      </footer>
    </div>
  );
}
