import React from "react";
import "./style.css";

const CardImage = ({ image }) => {
  return (
    <div className="card-image">
      <img src={image} width={180} alt="imagen" />
    </div>
  );
};
export { CardImage };
