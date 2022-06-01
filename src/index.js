import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Candidatos from "./components/Candidatos";
import Candidatoseng from "./components/eng/Candidatoseng";
import Empresas from "./components/Empresas";
//import Popup from "./components/Popup";
import FAQs from "./components/FAQs";
import Header from "./components/Header"
import Contacto from "./components/Contacto";
import Index from "./components/Index"

import PopupFijo from "./components/PopupFijo";
import IndexENG from "./components/eng/IndexENG";
import EmpresasENG from "./components/eng/Empresaseng";
import FAQsENG from "./components/eng/FAQsENG";

import MenuHamburguesa from "./components/MenuHamburguesa";



ReactDOM.render(
  <Router>
    <Fragment>
      <Routes>
      <Route exact path="/contacto" element={<Contacto/>}/>
        <Route exact path="/" element={<Index/>}/>
        <Route exact path="/candidatos" element={<Candidatos/>}/>
        <Route exact path="/candidatoseng" element={<Candidatoseng/>}/>
        <Route exact path="/empresas" element={<Empresas/>}/> 
        <Route exact path="/popup/:id" element={<PopupFijo/>}/>
        <Route exact path="/faqs" element={<FAQs/>}/>
        <Route exact path="/faqsENG" element={<FAQsENG/>}/>
        <Route exact path="/header" element={<Header/>}/>
        <Route exact path="/home" element={<Index/>}/>
        <Route exact path="/homeENG" element={<IndexENG/>}/>
        <Route exact path="/modal" element={<MenuHamburguesa/>}/>
        <Route exact path="/empresasENG" element={<EmpresasENG/>}/>


      </Routes>
    </Fragment>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
