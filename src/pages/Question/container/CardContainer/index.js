import React, { useState } from "react";
import { CardQuestionTitle } from "../../components/Card/CardQuestionTitle";
import { CardQuestionText } from "../../components/Card/CardQuestionText";
import { CardQuestionImage } from "../../components/Card/CardQuestionImg";
import { listQuestions } from "../../services/questionService";
import "./style.css";
import { Pagination } from "../../../../components/Pagination";

const CardContainer = () => {
  const questions = listQuestions();
  const [questionSelected, setQuestionSelected] = useState(questions[0]);

  const setQuestion = (index) => {
    setQuestionSelected(questions[index]);
  };

  const previosQuestion = () => {
    setQuestion(questionSelected.id - 2);
  };

  const navigateQuestion = (page) => {
    setQuestion(page - 1);
  };

  const nextQuestion = () => {
    setQuestion(questionSelected.id);
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
            <Pagination
              previosPage={previosQuestion}
              nextPage={nextQuestion}
              navigatePage={navigateQuestion}
              totalPages={questions.length}
              page={questionSelected.id}
              variant={"tertiary"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { CardContainer };
