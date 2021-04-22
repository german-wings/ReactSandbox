import React from "react";
import "./BirthdayComponent.css";

export const BirthdayComponent = ({ name, birthday_date, image_source }) => {
  console.log(image_source);
  return (
    <div className="item_container">
      <h1>{name}</h1>
      <h3>{birthday_date}</h3>
      <img src={image_source}></img>
    </div>
  );
};
