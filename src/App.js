import React from "react";
import Footer from "./components/Footer";

import GridRow from "./components/GridRow";
import "./style.css"


class App extends React.Component {

    constructor() {
        super()
        this.state = {
            playerTurn: "X",
            boardState: [
                ["", "", ""],
                ["", "", ""],
                ["", "", ""],
            ]
        }
        this.playerClick = this.playerClick.bind(this)

    }
  // test git in this file......
    gitChange() {
        const git = 'change';
        let newGit = 'change2 & test2';
        //test change 1
    }
    playerClick(i, j) {
        if (this.state.boardState[i][j] === "") {
            const currBoardState = [...this.state.boardState]
            currBoardState[i][j] = this.state.playerTurn

            this.setState({
                boardState: currBoardState,
                playerTurn: this.state.playerTurn === "X" ? "O" : "X"
            })
        }
    }
    checkendGame() {
        let won = true;

        // for row win 

        for (let i = 0; i < 3; i++) {
            won = true
            for (let j = 1; j < 3; j++) {
                if (this.state.boardState[i][j] !== this.state.boardState[i][j - 1]) {
                    won = false;
                    break
                }
            }
            if (won && this.state.boardState[i][0] !== "") {
                return this.alertWin(this.state.boardState[i][0])
            }

        }

        // for col win 

        for (let j = 0; j < 3; j++) {
            won = true
            for (let i = 1; i < 3; i++) {
                if (this.state.boardState[i][j] !== this.state.boardState[i - 1][j]) {
                    won = false;
                    break
                }
            }
            if (won && this.state.boardState[0][j] !== "") {
                return this.alertWin(this.state.boardState[0][j])
            }

        }

        // for diagonal win 

        for (let i = 1; i < 3; i++) {
            if (this.state.boardState[i][i] !== this.state.boardState[i - 1][i - 1]) {
                won = false;
                break
            }
        }
        if (won && this.state.boardState[0][0] !== "") {
            return this.alertWin(this.state.boardState[0][0])
        }


        // for anti-diagonal win 

        for (let i = 1; i < 3; i++) {
            if (this.state.boardState[i][2 - i] !== this.state.boardState[i - 1][2 - i + 1]) {
                won = false;
                break
            }
        }
        if (won && this.state.boardState[0][2] !== "") {
            return setTimeout(this.alertWin(this.state.boardState[0][2]), 0)
        }


        // for draw
        let draw = true
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.state.boardState[i][j] === "") {
                    draw = false;
                    break
                }
            }
            if (draw == false) {
                break
            }
        }

        if (draw) {
            return (this.alertDraw())
        }
    }
    componentDidUpdate() {
        this.checkendGame()
    }

    alertWin(playerWon) {
        if (playerWon === "X") {
            alert("Congratulaions! Player 1 Wins!!!!")
        }
        if (playerWon === "O") {
            alert("Congratulaions! Player 2 Wins!!!!")
        }
        this.setState({
            playerTurn: "X",
            boardState: [
                ["", "", ""],
                ["", "", ""],
                ["", "", ""],
            ]
        })
    }


    alertDraw() {
        alert("Draw")

        this.setState((prevState) => (
            {
                playerTurn: prevState.playerTurn,
                boardState: prevState.boardState
            }
        ))
    }

    render() {
        return (
            <div className="container">
                <h1>TIC-TAC-TOE</h1>
                <div>
                    {this.state.boardState.map((boardRow, rowIdx) => (
                        <GridRow
                            key={rowIdx}
                            row={boardRow}
                            rowIdx={rowIdx}
                            playerClickCB={this.playerClick} />
                    ))}
                </div>
                <div>
                    <Footer
                        turn={this.state.playerTurn} />
                </div>

            </div>
        )
    }
}








export default App