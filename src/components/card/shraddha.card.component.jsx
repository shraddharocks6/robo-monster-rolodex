import React from "react";
import "./card.styles.css";
import "./shraddha.card.styles.css";
import shraddhaPic from "./shraddha-pic.png";

export const ShraddhaCard = (props) => (
  <div className="card-container">
    <img alt="Shraddha" src={shraddhaPic} className="shraddha-pic"/>
    <h3>{props.monster.name}</h3>
    <p>{props.monster.email}</p>
  </div>
);
