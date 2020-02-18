import React from "react";
import './Cards.scss'

const Cards = (props, id) => {
  return (
    <div className="card" key={props.id}>
      <img src={props.url} alt="" />
      <p>{props.name}</p>
    </div>
  )
};

export default Cards;
