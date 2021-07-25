import React, { Component } from "react";
import { pieces } from "../../constants/action";

/**
 * Component cell display cell
 * @param {object} data
 * @param {object} row 
 * @param {object} col 
 * @param {function} tickTurns 
 * @returns button for user select
 * CreatedBy: PQ Huy (25.07.2021)
 */
export default function Cell({ data, row, col, tickTurns }) {
    
    return (
        <button onClick={() => {
            if (data === null)
                tickTurns(row, col);
        }}>
            {data}
        </button>
    );
}