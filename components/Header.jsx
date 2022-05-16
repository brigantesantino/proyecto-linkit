import React, {useState} from "react";
import "../componentStyles/header.css";
import { useNavigate } from "react-router-dom";
import USA from "../images/banderaUsa.png"
import ARG from "../images/banderaArg.png"
import menuHambNegro from "../images/menuHamburguesa.svg";
import MenuHamburguesa from "./MenuHamburguesa";

export default function Header() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/contacto`; 
    navigate(path);
  }

  const [menu, setMenu] = useState(false);

  return (
    <div className="header">
      <header className="top-header-component">
        <div className="title">
          <div className="menu-wrapper">
            <p className="logo-component">
              Link<span>IT</span>
            </p>
              <div className="menuHamb" onClick={() => setMenu(true)}>
                    <img src={menuHambNegro} className="menuHamburguesaImagen" alt="" />
                </div>
                {menu && <MenuHamburguesa setMenu={setMenu}/>}
          </div>
          <div className="info-component">
            <a href="/home">
            <p className="button-component">INICIO</p>
            </a>

            <a href="/empresas">
              <p className="button-component">EMPRESAS</p>
            </a>

            <a href="/Candidatos">
              <p className="button-component">CANDIDATOS</p>
            </a>
            <a href="/faqs">
            <p className="button-component">FAQS</p>
            </a>
            <div className="contenedor-idiomas">
              <a href="" className="contenedor-bandera">
                <div className="idioma-component">ENG</div>
              </a>
              <a className="contenedor-bandera" href="/home">
                <div className="idioma-component">ESP</div>
              </a>
            </div>
            <a href="/contacto">
              <button type="submit" className="contact-button-component">
                CONTACTO
              </button></a>
          </div>
        </div>
      </header>
    </div>
  );
}
