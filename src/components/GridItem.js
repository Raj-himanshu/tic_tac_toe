import React from "react";

class GridItem extends React.Component {
    constructor() {
        super()
        this.clickFn = this.clickFn.bind(this)
    }

    clickFn() {
        this.props.playerCLickCB(this.props.rowIdx, this.props.colIdx)    //we can also use arrow function here as it will no need to bind the function to constructor because "this" in arrow fun is always refer to window
    }
    render() {
        return (


            <div className="gridItem" onClick={this.clickFn}>
                {this.props.value}
            </div>

        )
    }
}
export default GridItem