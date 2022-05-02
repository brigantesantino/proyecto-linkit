import React from "react";
import seguridad from "../images/seguridad.svg";
import "../componentStyles/modal.css"



const ModalEficiencia = ({setModal3}) => {
  return (
    <div>
        <div className="modales">
            <div className="modal-content">
            <img src={seguridad} alt=""/>
                    <p>Fee de contratación y fee luego de terminar exitosamente el período de prueba.</p>
            <span className="close1" onClick={() => setModal3(false)}>&times;</span>
            </div>
        </div>
    </div>  
  )
};

export default ModalEficiencia;