import React from "react";
import './Cards.scss'

const Cards = (props, id) => {
  return (
    <div className="card" key={id}>
      <img src={props.Icon} alt="" />
      <p>{props.Name}</p>
    </div>
  )
};

export default Cards;
