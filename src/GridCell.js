import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import dropTile from "./actions";

const gridCell = ({ x, y, board, sendTileDrop }) => {
  const handleClick = () => {
    console.log(`Clicked on column ${x}`);
    console.log(`Clicked on row ${y}`);
    sendTileDrop(x);
  };
  let classes = "cell";
  if (board[x][y] !== undefined) {
    if (board[x][y] === "red") {
      classes += " p2 ";
      console.log(classes);
    } else {
      classes += " p1 ";
      //console.log(classes);
    }
  }
  console.log("COLOR", classes);

  return (
    <div className={classes} onClick={() => handleClick()}>
      <p>
        {x},{y}
      </p>
    </div>
  );
};

const stateToProps = (state) => {
  return {
    board: state.board,
  };
};
const dispatchToProps = (dispatch) => {
  return {
    sendTileDrop: (col) => dispatch(dropTile(col)),
  };
};
export default connect(stateToProps, dispatchToProps)(gridCell);
