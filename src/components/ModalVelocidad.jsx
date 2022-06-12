import React from "react";
import velocidad from "../images/velocidad.svg";
import "../componentStyles/modal.css"

const ModalVelocidad = ({setModal4}) => {
  return (
    <div>
        <div className="modales">
            <div className="modal-content">
            <img src={velocidad} alt=""/>
            <p>2 Semanas desde el cierre del perfil necesitado.</p>
            <span className="close1" onClick={() => setModal4(false)}>&times;</span>
            </div>
        </div>
    </div>  
  )
};

export default ModalVelocidad;