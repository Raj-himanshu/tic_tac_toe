import React from "react";

import GridItem from "./GridItem";
class GridRow extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let Gridarray = [<GridItem />, <GridItem />, <GridItem />]
        return (
            <div className="row_flex">
                {this.props.row.map((boardCell, colIdx) => (
                    <GridItem
                        key={colIdx}
                        value={boardCell}
                        colIdx={colIdx}
                        rowIdx={this.props.rowIdx}
                        playerCLickCB={this.props.playerClickCB} />
                ))}
            </div>
        )
    }
}
export default GridRow