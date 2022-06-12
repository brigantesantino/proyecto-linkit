import React from "react";
import carafeliz from "../images/carafeliz.svg";
import "../componentStyles/modal.css"

const Modal = ({setIsOpen}) => {
  return (
    <div>
        <div className="modales">
            <div className="modal-content">
                <img src={carafeliz} alt=""/>
                <p>Equipo de consultores especializados en el área TECH.</p>
            <span className="close1" onClick={() => setIsOpen(false)}>&times;</span>
            </div>
        </div>
    </div>  
  )
};

export default Modal;

