import React from "react";
import Cell from "./Cell";

/**
 * Function render cell to row
 * @param {object} elements
 * @param {object} row
 * @param {function} tickTurns
 * CreatedBy: PQ Huy (25.07.2021)
 */
export default function Row({ elements, row__Number, on__Action, priece__Win }) {
    
    const renderCells = elements.map((element, index) => (
        <Cell
            // set key
            key={index}

            row__Number={row__Number}

            //set col number 
            col__Number={index}
            
            // set value for component square button
            data={element}

            // set on click and pass index number for component app
            on__Action={on__Action}

            //prieceWin
            priece__Win={priece__Win}
        />
    ))

    return renderCells;
}