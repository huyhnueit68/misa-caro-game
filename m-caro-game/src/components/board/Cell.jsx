import React from "react";
import { pieces, className } from "../../@Types/Resources";

/**
 * Component cell display cell
 * @param {object} data
 * @returns button for user select
 * CreatedBy: PQ Huy (25.07.2021)
 */
export default function Cell({ row__Number, col__Number, data, on__Action, priece__Win }) {

    let my_class_css = data === pieces.O ? className.CssO : data === pieces.X ? className.CssX : className.Nomaly;
    my_class_css += className.Nomaly

    // set class when have winner
    if (priece__Win != null) {
        for (var i = 0; i < priece__Win.length; i++) {
            if (priece__Win[i][0] === row__Number && priece__Win[i][1] === col__Number)
                my_class_css = my_class_css.concat(className.Win);
        }
    }

    return (
        <button
            className={my_class_css}
            onClick={() => on__Action(row__Number, col__Number)} >
            {data}
        </button>
    );
}