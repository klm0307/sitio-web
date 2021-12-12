import React from "react";
import { CardQuestionTitle } from "../../components/Card/CardQuestionTitle";
import { CardQuestionText } from "../../components/Card/CardQuestionText";
import { CardQuestionImage } from "../../components/Card/CardQuestionImg";
import "./style.css";

const CardContainer = () => {
  return (
    <section>
      <div className="list-card-question">
        <div className="image-question">
          <CardQuestionImage />
        </div>
        <div className="question">
          <div className="title-question">
            <CardQuestionTitle title={"A"} />
          </div>
          <div className="text-question">
            <CardQuestionText text={"B"} />
          </div>
          <div className="navigate">
            <ul className="navigate-question"></ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CardContainer };
