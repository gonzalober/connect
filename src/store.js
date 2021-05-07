import { createStore } from "redux";
const initial = {
  current: "red",
  board: [[], [], [], [], [], [], []],
};

const reducer = (state, action) => {
  if (action.type === "DROP_TILE") {
    console.log("dropping onto col " + action.payload);
  }
  return state;
};

export default createStore(reducer, initial);
