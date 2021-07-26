import React, {useState} from "react";

const class_css_normal = 'not-focusable btn btn-default btn-piece';
const class_css_x = 'not-focusable btn btn-default btnX btn-piece';
const class_css_o = 'not-focusable btn btn-default btnO btn-piece';
    
/**
 * Component cell display cell
 * @param {object} data
 * @returns button for user select
 * CreatedBy: PQ Huy (25.07.2021)
 */
export default function Cell({ rowNumber, colNumber, data, onClick }) {

    let my_class_css = data == 'O' ? class_css_o : data == 'X' ? class_css_x : class_css_normal;

    return (
        <button className="not-focusable btn btn-default btn-piece"
            className={my_class_css}
            onClick={() => onClick(rowNumber, colNumber)} >
            {data}
        </button>
    );
}