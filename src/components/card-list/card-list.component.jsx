import React from "react";
import { Card } from "../card/card.component";
import { ShraddhaCard } from "../card/shraddha.card.component";

import "./card-list.styles.css";

export const CardList = (props) => {
  const shraddha = {name: "Shraddha", email:"shraddha6pandey@gmail.com"};
  
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster = {monster}></Card>
      ))}
      <ShraddhaCard monster = {shraddha}/>
    </div>
  );
};
