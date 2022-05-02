import React from "react";
import eficiencia from "../../images/eficiencia.svg";
import "../../componentStyles/modal.css"



const ModalEficienciaENG = ({setModal2}) => {
  return (
    <div>
        <div className="modales">
            <div className="modal-content">
            <img src={eficiencia} alt=""/>
                    <p>Recurring feedback with the client from the beginning of the process.</p>
            <span className="close1" onClick={() => setModal2(false)}>&times;</span>
            </div>
        </div>
    </div>  
  )
};

export default ModalEficienciaENG;
