class Game {
  constructor() {
    this.board = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];
  }
  addChip(playerId, column) {
    if (playerId !== 1 && playerId !== 2) {
      console.log("player id must be 1 or 2");
      return false;
    }
    if (column < 0 || column > 6) {
      console.log("columns range go between 0 and 6");
      return false;
    }
    let chipAdded = false;
    for (let i = 0; i < 6; i++) {
      if (this.board[column][i] === 0) {
        this.board[column][i] = playerId;
        chipAdded = true;
        break;
      }
    }
    if (!chipAdded) {
      console.log("column is filled");
      return false;
    }
    console.log(this.checkWinner(playerId));
  }
  checkWinner(player) {
    for (let c = 0; c < this.board[0].length - 3; c++) {
      for (let r = 0; r < this.board.length; r++) {
        if (
          this.board[r][c] === player &&
          this.board[r][c + 1] === player &&
          this.board[r][c + 2] === player &&
          this.board[r][c + 3] === player
        ) {
          return `${player} wins across!!!`;
        }
      }
    }

    for (let c = 0; c < this.board[0].length; c++) {
      for (let r = 0; r < this.board.length - 3; r++) {
        if (
          this.board[r][c] === player &&
          this.board[r + 1][c] === player &&
          this.board[r + 2][c] === player &&
          this.board[r + 3][c] === player
        ) {
          return `${player} wins vertically!!!`;
        }
      }
    }

    for (let c = 0; c < this.board[0].length - 3; c++) {
      for (let r = 0; r < this.board.length - 3; r++) {
        if (
          this.board[r][c] === player &&
          this.board[r + 1][c + 1] === player &&
          this.board[r + 2][c + 2] === player &&
          this.board[r + 3][c + 3] === player
        ) {
          return `${player} wins diagonally!!!`;
        }
      }
    }

    for (let c = 0; c < this.board[0].length - 3; c++) {
      for (let r = 3; r < this.board.length; r++) {
        if (
          this.board[r][c] === player &&
          this.board[r - 1][c + 1] === player &&
          this.board[r - 2][c + 2] === player &&
          this.board[r - 3][c + 3] === player
        ) {
          return `${player} wins diagonally!!!`;
        }
      }
    }
    return false;
  }
}

export default Game;
