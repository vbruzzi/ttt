type Board = string[][];

export class Game {
  constructor(private board: Board, private currentChar: "x" | "o" = "x") {}

  printBoard() {
    for (const row of this.board) {
      console.log(row.join(" "));
    }
  }

  playRound(indexes: [number, number]): boolean {
    if (indexes[0] > 2 || indexes[1] > 2) {
      throw new Error("invalid index");
    }
    if (this.board[indexes[0]][indexes[1]] !== "-") {
      throw new Error("position already used");
    }

    this.board[indexes[0]][indexes[1]] = this.currentChar;

    if (this.gameOver()) {
      console.log("Winner!");
      return true;
    } else {
      this.printBoard();
      this.updateChar();
      return false;
    }
  }

  private gameOver(): boolean {
    return (
      this.board.some((row) =>
        row.every((char) => char === this.currentChar)
      ) ||
      [0, 1, 2].some((col) =>
        this.board.every((row) => row[col] === this.currentChar)
      ) ||
      this.board.every((row, index) => row[index] === this.currentChar) ||
      this.board.every((row, index) => row[2 - index] === this.currentChar)
    );
  }

  private updateChar() {
    const cur = this.currentChar === "x" ? "o" : "x";
    this.currentChar = cur;
  }
}

function getDefaultBoardLayout(): Board {
  return [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
  ];
}

export function getDefaultGame(): Game {
  return new Game(getDefaultBoardLayout());
}
