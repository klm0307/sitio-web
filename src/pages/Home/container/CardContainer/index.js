import React from "react";
import { CardTitle } from "../../components/Card/CardTitle";
import { CardImage } from "../../components/Card/CardImage";
import { CardText } from "../../components/Card/CardText";
import "./style.css";

const CardContainer = ({ item }) => {
  return (
    <>
      <div
        className={`card-container ${item.variant + "-background-gradient"}`}
      >
        <div className="title">
          <CardTitle title={item.title} />
        </div>
        <div className="image">
          <CardImage image={item.image} />
        </div>
        <div className="text">
          <CardText text={item.text} />
        </div>
      </div>
    </>
  );
};

export { CardContainer };
