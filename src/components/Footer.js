import React from "react";

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    getTurn(playerTurn) {
        if (playerTurn === "X") {
            return "Player 1's Turn"
        }
        if (playerTurn === "O") {
            return "Player 2's Turn"
        }
    }
    render() {
        return (
            <div className="turn">
                {this.getTurn(this.props.turn)}
            </div>
        )
    }
}

export default Footer