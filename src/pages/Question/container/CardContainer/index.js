import React, { useState } from "react";
import { CardQuestionTitle } from "../../components/Card/CardQuestionTitle";
import { CardQuestionText } from "../../components/Card/CardQuestionText";
import { CardQuestionImage } from "../../components/Card/CardQuestionImg";
import { listQuestions } from "../../services/questionService";
import "./style.css";

const CardContainer = () => {
  const questions = listQuestions();
  const [questionSelected, setQuestionSelected] = useState(questions[0]);

  const setQuestion = (index) => {
    setQuestionSelected(questions[index]);
  };

  return (
    <section>
      <div className="list-card-question">
        <div className="image-question">
          <CardQuestionImage />
        </div>
        <div className="question">
          <div className="title-question">
            <CardQuestionTitle title={questionSelected.title} />
          </div>
          <div className="text-question">
            <CardQuestionText text={questionSelected.text} />
          </div>
          <div className="navigate">
            <ul className="navigate-question">
              {questions.map((question, index) => {
                return (
                  <li key={index}>
                    <button
                      className={
                        questionSelected.id === question.id
                          ? "active-question"
                          : ""
                      }
                      onClick={() => setQuestion(index)}
                    ></button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CardContainer };
