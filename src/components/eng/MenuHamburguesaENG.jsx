import React from "react";
import "../../componentStyles/menuHamburguesa.css"

const MenuHamburguesaENG = ({setMenu}) => {
  return (
    <div className="contenedorHamburguesa">
        <div>
            <span className="closeMenu" onClick={() => setMenu(false)}>&times;</span>
            <ul className="listaHamburguesa">
                <li><a href="/home">Home</a></li>
                <li><a href="/empresas">Business</a></li>
                <li><a href="/Candidatos">Candidates</a></li>
                <li><a href="/faqs">FAQs</a></li>
            </ul>
        </div>
    </div>  
  )
};

export default MenuHamburguesaENG;