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

    const newBoard = state.board.slice(); //copy of the board
    newBoard[action.payload] = col; //update column with new tile
    return {
      current: state.current === "red" ? "black" : "red",
      board: newBoard,
    };
  }
  return state;
};

export default createStore(reducer, initial);
