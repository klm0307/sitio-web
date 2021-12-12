import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const sections = [
  { text: "Inicio", component: "/", color: "primary" },
  { text: "Usuario", component: "/user", color: "secondary" },
  { text: "Preguntas", component: "/question", color: "tertiary" },
];

function NavBar() {
  return (
    <nav>
      <ul className="list-restyled">
        {sections.map((section) => {
          return (
            <li key={section.text}>
              <NavLink
                to={section.component}
                className={({ isActive }) =>
                  isActive ? section.color + " active" : section.color
                }
              >
                {section.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export { NavBar };
