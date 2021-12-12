import React from "react";
import { CardContainer } from "../CardContainer";

import "./style.css";

const QuestionContainer = () => {
  return (
    <section>
      <div className="title-container-question">
        <h1>Preguntas</h1>
      </div>
      <CardContainer />
    </section>
  );
};
export { QuestionContainer };
