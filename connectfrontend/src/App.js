import React from "react";
import "./connect.css";
import { useState, useEffect } from "react";
import Game from "./connect";

const connectBoard = () => {
  const newgame = new Game();
  return (
    <div className="container">
      <Row style={{ height: "20px", marginBottom: "40px", marginLeft: "20px" }}>
        {this.arrows()}
      </Row>
      <Board {...this.state} handleReset={this.handleReset} />
    </div>
  );
};

export default connectBoard;
