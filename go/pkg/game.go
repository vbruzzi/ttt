package game

import (
	"log"
	"strings"
)

const (
	playerOne string = "x"
	playerTwo        = "o"
)

type board = [][]string
type Game struct {
	CurrentChar string
	Board       [][]string
}

func (game Game) PrintBoard() {
	for _, row := range game.Board {
		log.Printf(strings.Join(row, " "))
	}
}

func getDefaultBoard() board {
	return [][]string{{"-", "-", "-"}, {"-", "-", "-"}, {"-", "-", "-"}}
}

func GetGame(currentChar string, newBoard board) Game {
	return Game{
		CurrentChar: currentChar,
		Board:       newBoard,
	}
}

func GetDefaultGame() Game {
	return Game{
		CurrentChar: playerOne,
		Board:       getDefaultBoard(),
	}
}
func (game Game) PlayRound() {

}

func getNewChar(game Game) string {
	if game.CurrentChar == playerOne {
		return playerTwo
	}
	return playerOne
}
