import React from "react";
import "./App.css";
import { connect } from "react-redux";

import { useState, useEffect } from "react";
import dropTile from "./actions";

const gridCell = ({ x, y, sendTileDrop }) => {
  const handleClick = () => {
    console.log(`Clicked on column ${x}`);
    sendTileDrop(x);
  };
  return (
    <div className="cell" onClick={() => handleClick()}>
      <p>
        {x},{y}
      </p>
    </div>
  );
};

const stateToProps = (state) => {
  return {};
};
const dispatchToProps = (dispatch) => {
  return {
    sendTileDrop: (col) => dispatch(dropTile(col)),
  };
};
export default connect(stateToProps, dispatchToProps)(gridCell);
