import React from "react";
import carafeliz from "../../images/carafeliz.svg";
import "../../componentStyles/modal.css"



const ModalENG = ({setIsOpen}) => {
  return (
    <div>
        <div className="modales">
            <div className="modal-content">
                <img src={carafeliz} alt=""/>
                <p>Team of consultants specialized in the TECH area.</p>
            <span className="close1" onClick={() => setIsOpen(false)}>&times;</span>
            </div>
        </div>
    </div>  
  )
};

export default ModalENG;

