import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import GridCell from "./GridCell";

const connectBoard = () => {
  const cells = [];
  //enclose each row into a container
  for (let y = 5; y >= 0; y--) {
    const row = [];
    for (let x = 0; x < 7; x++) {
      row.push(<GridCell key={x} x={x} y={y} />);
      console.log("ROW", row);
    }
    cells.push(
      <div key={y} className="row">
        {row}
      </div>
    );
  }

  return (
    <div className="App">
      <header className="app-header"></header>
      {cells}
    </div>
  );
};

export default connectBoard;
