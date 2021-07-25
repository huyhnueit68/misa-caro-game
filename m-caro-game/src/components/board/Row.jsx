import React, { Component } from "react";
import Cell from "./Cell";

/**
 * Function render cell to row
 * @param {object} elements
 * @param {object} row
 * @param {function} tickTurns
 * CreatedBy: PQ Huy (25.07.2021)
 */
export default function Row({ elements, row, tickTurns }) {
    
    const renderCells = elements.map((element, index) => (
        <Cell
            data={element}
            row={row}
            col={index}
            tickTurns={(row,col) => tickTurns(row,col)}
        />
    ))

    return renderCells;
}