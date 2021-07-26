import React, { Component } from "react";
import Cell from "./Cell";

/**
 * Function render cell to row
 * @param {object} elements
 * @param {object} row
 * @param {function} tickTurns
 * CreatedBy: PQ Huy (25.07.2021)
 */
export default function Row({ elements, rowNumber, onClick }) {
    
    const renderCells = elements.map((element, index) => (
        <Cell
            // set key
            key={index}

            rowNumber={rowNumber}

            //set col number 
            colNumber={index}
            
            // set value for component square button
            data={element}

            // set on click and pass index number for component app
            onClick={onClick}
        />
    ))

    return renderCells;
}