import React from "react";

const card = (props) => {
  return (
    <div className="Card">
      <h2>{props.name}</h2>
      <img className="Image" src={props.image} alt="couldn't load" />
      <p>{props.number}</p>
      <p>{props.email}</p>
    </div>
  );
};

export default card;
