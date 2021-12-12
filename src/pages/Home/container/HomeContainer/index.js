import React from "react";
import { listItems } from "../../services/homeService";
import { CardContainer } from "../CardContainer";
import "./style.css";

const HomeContainer = () => {
  const items = listItems();

  return (
    <section>
      <div className="title-container">
        <h1>Autobiografia</h1>
      </div>
      <div className="list-card">
        {items.map((item, index) => {
          return <CardContainer key={index} item={item} />;
        })}
      </div>
    </section>
  );
};
export { HomeContainer };
