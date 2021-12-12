import React from "react";
import "./style.css";

const CardQuestionText = ({ text }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: text }}
      className="card-question-text"
    ></div>
  );
};
export { CardQuestionText };
