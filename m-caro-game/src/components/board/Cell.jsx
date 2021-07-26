import React from "react";

const class_css_normal = 'not-focusable btn btn-default btn-piece';
const class_css_x = 'not-focusable btn btn-default btnX btn-piece';
const class_css_o = 'not-focusable btn btn-default btnO btn-piece';
    
/**
 * Component cell display cell
 * @param {object} data
 * @returns button for user select
 * CreatedBy: PQ Huy (25.07.2021)
 */
export default function Cell({ rowNumber, colNumber, data, onClick, prieceWin }) {

    let my_class_css = data === 'O' ? class_css_o : data === 'X' ? class_css_x : class_css_normal;
    my_class_css += ' not-focusable btn btn-default btn-piece'

    // set class when have winner
    if (prieceWin != null) {
        for (var i = 0; i < prieceWin.length; i++) {
            if (prieceWin[i][0] === rowNumber && prieceWin[i][1] === colNumber)
                my_class_css = my_class_css.concat(" btn-win");
        }
    }

    return (
        <button
            className={my_class_css}
            onClick={() => onClick(rowNumber, colNumber)} >
            {data}
        </button>
    );
}