import React from "react";
<<<<<<< HEAD
import {  BrowserRouter as Router } from "react-router-dom";
import "./style.css";

const sections = [
  { text: "Inicio", link: "/home", color: "primary" },
  { text: "Usuario", link: "/user", color: "secondary" },
  { text: "Preguntas", link: "/question", color: "tertiary" },
];

function NavBar() {
  return (
    <Router>
      <nav>
        <ul>
          {sections.map((section) => {
            return (
              <li key={section.text}>
                <a href={section.link} className={section.color}>{section.text}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </Router>
  );
}

export { NavBar };
=======
import './style.css'


function NavBar(){
    return (
          <nav >
              <ul>
                  <li><a href="#" title="Enlace genérico">Incio</a></li>
                  <li><a href="#" title="Enlace genérico">Usuario</a></li>
                  <li><a href="#" title="Enlace genérico">Preguntas</a></li>
              </ul>
          </nav>
    )
}

export {NavBar}
>>>>>>> origin/master
