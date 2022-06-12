import React from "react";
import linkedin from "../images/linkedin.svg"
import logoMail from "../images/LogoMail.svg"
import logoWs from "../images/LogoWs.svg"
import "../componentStyles/modal.css"

const ModalContacto = ({setModalContacto}) => {
  return (
    <div>
         <div id="modalContacto" className="modales">
            <div className="modal-content-contacto">
                <div>
                    <p style={{marginBottom:"7px", fontWeight:"bold"}}>Contacto</p>
                    <p>Tenés alguna pregunta? Visita nuestras <a href="./faqs">FAQS</a> o contactate con nosotros por redes sociales.</p>
                    <div style={{marginTop:"7px"}}>
                        <img  src={linkedin} alt=""/>
                        <img  src={logoMail} alt=""/>
                        <img  src={logoWs} alt=""/>
                    </div>
                </div>
                <span className="closeContacto" onClick={() => setModalContacto(false)}>&times;</span>
            </div>
        </div>
    </div>  
  )
};

export default ModalContacto;