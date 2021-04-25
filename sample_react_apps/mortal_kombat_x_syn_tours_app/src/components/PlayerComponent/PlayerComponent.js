import React, { useState } from "react";
import "./PlayerComponent.css";

const PlayerComponent = ({
  name,
  origin,
  ability,
  about,
  xp,
  image,
  handle,
  unique_key,
}) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="container">
      <img src={image} alt={name}></img>
      <h1>{name}</h1>
      <h2>Origin : {origin}</h2>
      <h2>Ability : {ability}</h2>
      <h2>About {name}</h2>
      <p>
        {readMore ? `${about} ` : `${about.substring(0, 50)}... `}
        <button
          className="readMoreBtn"
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          {readMore ? "show less" : `Read More about ${name}`}
        </button>
      </p>
      <h1 className="displayXP">{xp}</h1>
      <button
        className="buyBtn"
        id={unique_key}
        onClick={(event) => {
          handle((previousState) => {
            console.log(event.target.id);
            return previousState.filter(
              (player) => player.unique_key !== event.target.id
            );
          });
        }}
      >
        Buy
      </button>
    </div>
  );
};

export default PlayerComponent;
