import React, { useEffect } from "react";
import { CardQuestionTitle } from "../../components/Card/CardQuestionTitle";
import { CardQuestionText } from "../../components/Card/CardQuestionText";
import { CardQuestionImage } from "../../components/Card/CardQuestionImg";
import "./style.css";
import { useState } from "react/cjs/react.development";

const CardContainer = ({ questions }) => {
  const [questionSelected, setQuestionSelected] = useState({
    id: 0,
    text: "",
    title: "",
  });

  useEffect(() => {
    setQuestionSelected(questions[0]);
  }, [questions]);

  const setQuestion = (index) => {
    setQuestionSelected(questions[index]);
  };

  return (
    <section>
      <div className="list-card-question">
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
        <div className="image-question">
          <CardQuestionImage />
        </div>
      </div>
    </section>
  );
};

export { CardContainer };
