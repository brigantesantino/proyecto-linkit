import React from "react";
import eficiencia from "../images/eficiencia.svg";
import "../componentStyles/modal.css"



const ModalEficiencia = ({setModal2}) => {
  return (
    <div>
        <div className="modales">
            <div className="modal-content">
            <img src={eficiencia} alt=""/>
                    <p>Feedback recurrente con el cliente desde el inicio del proceso.</p>
            <span className="close1" onClick={() => setModal2(false)}>&times;</span>
            </div>
        </div>
    </div>  
  )
};

export default ModalEficiencia;
