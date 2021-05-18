//someone clicks on a column
const dropTile = (col) => {
  return { type: "DROP_TILE", payload: col };
};

export default dropTile;
