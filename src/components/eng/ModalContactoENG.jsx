import React from "react";
import linkedin from "../../images/linkedin.svg"
import logoMail from "../../images/LogoMail.svg"
import logoWs from "../../images/LogoWs.svg"
import "../../componentStyles/modal.css"



const ModalContactoENG = ({setModalContacto}) => {
  return (
    <div>
         <div id="modalContacto" className="modales">
            <div className="modal-content-contacto">
                <div>
                    <p style={{marginBottom:"7px", fontWeight:"bold"}}>Contacto</p>
                    <p>Do you have any questions? Visit our <a href="./faqs">FAQS</a> or contact us through social networks.</p>
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

export default ModalContactoENG;