import React from "react";
import { pieces, className } from "../../@Types/Resources";

/**
 * Component cell display cell
 * @param {object} data
 * @returns button for user select
 * CreatedBy: PQ Huy (25.07.2021)
 */
export default function Cell({ rowNumber, colNumber, data, onClick, prieceWin }) {

    let my_class_css = data === pieces.O ? className.CssO : data === pieces.X ? className.CssX : className.Nomaly;
    my_class_css += className.Nomaly

    // set class when have winner
    if (prieceWin != null) {
        for (var i = 0; i < prieceWin.length; i++) {
            if (prieceWin[i][0] === rowNumber && prieceWin[i][1] === colNumber)
                my_class_css = my_class_css.concat(className.Win);
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