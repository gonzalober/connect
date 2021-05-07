import React from "react";
import "./connect.css";
import { useState, useEffect } from "react";
import Game from "./connect";

const gridCell = ({ gridCell }) => {
  const handleClick = () => {
    console.log(`Clicked on cloumn ${gridCell.x}`);
  };
  return (
    <div onClick={() => handleClick()}>
      <p>
        {gridCell.x},{gridCell.y}
      </p>
    </div>
  );
};

export default gridCell;
