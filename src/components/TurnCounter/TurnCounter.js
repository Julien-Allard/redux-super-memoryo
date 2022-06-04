import "./TurnCounter.scss";
import React from "react";
import { useSelector } from "react-redux";

export default function TurnCounter() {
  const turns = useSelector((state) => state.turns.turn);
  const record = localStorage.getItem("bestscore");

  return (
    <div className="turncounter-container">
      <div className="turncounter">
        <p>Turns :</p>
        <p>{turns}</p>
      </div>
      <div className="record">
        <p>Best Score :</p>
        <p>{record}</p>
      </div>
    </div>
  );
}
