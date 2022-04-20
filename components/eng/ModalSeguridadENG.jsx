import React from "react";
import seguridad from "../../images/seguridad.svg";
import "../../componentStyles/modal.css"



const ModalEficienciaENG = ({setModal3}) => {
  return (
    <div>
        <div className="modales">
            <div className="modal-content">
            <img src={seguridad} alt=""/>
                    <p>Hiring fee and fee after successfully completing the trial period.</p>
            <span className="close1" onClick={() => setModal3(false)}>&times;</span>
            </div>
        </div>
    </div>  
  )
};

export default ModalEficienciaENG;