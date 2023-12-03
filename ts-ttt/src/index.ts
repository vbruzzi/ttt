import readline from "readline/promises";
import { getDefaultGame } from "./board";

function getReader() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

function parseAnswer(ans: string): [number, number] {
  const data = ans.split(" ");
  // Expects input as 1-based indexes -> "3 1" would be the first cell on the last row ([2][0])
  return [parseInt(data[0]) - 1, parseInt(data[1]) - 1];
}

async function main() {
  const game = getDefaultGame();
  const reader = getReader();
  game.printBoard();
  while (true) {
    const ans = await reader
      .question("Next move (<row> <col>): ")
      .then(parseAnswer)
      .catch(() => [-1, -1] as [number, number]);
    if (game.playRound(ans)) break;
  }
  return;
}

main();
