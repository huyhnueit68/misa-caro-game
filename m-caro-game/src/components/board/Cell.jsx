import React, { Component } from "react";

/**
 * Component cell display cell
 * @param {object} data
 * @returns button for user select
 * CreatedBy: PQ Huy (25.07.2021)
 */
export default function Cell({ data }) {
    
    return (
        <button>
            {data}
        </button>
    );
}