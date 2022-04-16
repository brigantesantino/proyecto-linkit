import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";

//import components
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Candidatos from "./components/Candidatos";
import Empresas from "./components/Empresas";
import Popup from "./components/Popup";
import FAQs from "./components/FAQs";
import Header from "./components/Header"
//Empresas HECHO
//Popup HECHO
//Candidatos 

ReactDOM.render(
  <Router>
    <Fragment>
      <Routes>
        <Route exact path="/" element={<Candidatos/>}/>
        <Route exact path="/candidatos" element={<Candidatos/>}/>
        <Route exact path="/empresas" element={<Empresas/>}/> 
        <Route exact path="/popup" element={<Popup/>}/>
        <Route exact path="/faqs" element={<FAQs/>}/>
        <Route exact path="/header" element={<Header/>}/>
      </Routes>
    </Fragment>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
