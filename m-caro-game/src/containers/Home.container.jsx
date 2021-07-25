import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Home from "../components/Home";
import { pieces } from "../constants/action";
import { isWin } from "../algorithm/main";

export default function HomeContainer({ actions, array_board, piece_current, number_cell }) {
    // set state
    const [is_win, setIsWin] = useState(-1)
    const [pieces_win, setPiecesWin] = useState(null)
    const [count, setCount] = useState(0)

    /**
     * Function tickTurns set turn user
     * @param {*} row 
     * @param {*} col 
     * CreatedBy: PQ Huy (25.07.2021)
     */
    const tickTurns = (row, col) => {
        if (is_win == 1) return;

        // count number of tick 
        let count_tmp = count + 1;
        setCount(count_tmp);

        // update board 
        let array_new = [...array_board];
        array_new[row][col] = piece_current;
        actions.tickTurns(array_new);

        // check win 
        const pieces_win = isWin(array_new, row, col, piece_current);

        if (pieces_win.length > 0) {
            setIsWin(1)
            setPiecesWin(pieces_win)
        } else if (count_tmp ==  number_cell * number_cell) {
            setIsWin(0)
        } else {
            // switch player
            actions.switch_piece(piece_current == pieces.X ? pieces.O : pieces.X);
        }
    }

    return (
        <HomeContainer
            array_board={array_board}
            tickTurns={(row, col) => tickTurns(row, col)}
            piece_current={piece_current}
            is_win={is_win}
            pieces_win={pieces_win}
        />
    )
}