package main

import game "github.com/vbruzzi/ttt/pkg"

func main() {
	curGame := game.GetDefaultGame()
	curGame.PrintBoard()
}
