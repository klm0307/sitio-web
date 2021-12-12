import React from "react";
import { CardContainer } from "../CardContainer";
import { listQuestions } from "../../services/questionService";
import "./style.css";

const questions = listQuestions();

const QuestionContainer = () => {
  return (
    <section>
      <div className="title-container-question">
        <h1>Preguntas</h1>
      </div>
      <CardContainer questions={questions} />
    </section>
  );
};
export { QuestionContainer };
