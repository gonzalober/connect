import { createStore } from "redux";

const initial = {
  current: "red",
  board: [[], [], [], [], [], [], []],
};

const reducer = (state, action) => {
  if (action.type === "DROP_TILE") {
    console.log("dropping onto col " + action.payload);
    const tile = state.current;
    const col = state.board[action.payload].concat(tile); //my new column

    const board = state.board.slice();
    board[action.payload] = col; //update column with new tile
    return {
      current: state.current === "red" ? "black" : "red",
      board: board,
    };
  }
  return state;
};

export default createStore(reducer, initial);
