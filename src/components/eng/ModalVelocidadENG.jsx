import React from "react";
import velocidad from "../../images/velocidad.svg";
import "../../componentStyles/modal.css"

const ModalVelocidadENG = ({setModal4}) => {
  return (
    <div>
        <div className="modales">
            <div className="modal-content">
            <img src={velocidad} alt=""/>
            <p>Two weeks from the closing of the needed profile.</p>
            <span className="close1" onClick={() => setModal4(false)}>&times;</span>
            </div>
        </div>
    </div>  
  )
};

export default ModalVelocidadENG;