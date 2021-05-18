import React from "react";
import "./App.css";
import store from "./store";
import { useState, useEffect } from "react";
import Game from "./connect";

const gridCell = ({ x, y }) => {
  const handleClick = () => {
    console.log(`Clicked on column ${gridCell.x}`);
  };
  return (
    <div className="cell" onClick={() => handleClick()}>
      <p>
        {x},{y}
      </p>
    </div>
  );
};

export default gridCell;
