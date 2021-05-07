import React from "react";
import "./connect.css";
import { useState, useEffect } from "react";
import Game from "./connect";
import GridCell from "./GridCell";

const connectBoard = () => {
  const cells = [];
  for (let y = 0; y < 6; y++) {
    for (let x = 0; x < 7; x++) {
      cells.push(<GridCell x={x} y={y} />);
    }
  }

  return (
    <div className="App">
      <header className="app-header"></header>
      {cells}
    </div>
  );
};

export default connectBoard;
