import React from "react";
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
