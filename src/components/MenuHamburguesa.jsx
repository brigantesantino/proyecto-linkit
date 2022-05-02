
import React from "react";

import "../componentStyles/menuHamburguesa.css"



const MenuHamburguesa = ({setMenu}) => {
  return (
    <div className="contenedorHamburguesa">
        <div>
            <span className="closeMenu" onClick={() => setMenu(false)}>&times;</span>
            <ul className="listaHamburguesa">
                <li><a href="/home">Inicio</a></li>
                <li><a href="/empresas">Empresas</a></li>
                <li><a href="/Candidatos">Candidatos</a></li>
                <li><a href="/faqs">FAQs</a></li>
            </ul>
        </div>
    </div>  
  )
};

export default MenuHamburguesa;