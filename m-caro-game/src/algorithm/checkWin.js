import { pieces, StateGame } from "../@Types/Resources";
import { useSelector, useDispatch } from 'react-redux'

/**
 * Function check win follow column
 * @param {array} board 
 * @param {number} row 
 * @param {number} col 
 * @param {string} turn_text 
 * @param {function} setResultGame 
 * @returns array result
 * CreatedBy: PQ Huy (26.07.2021)
 */
const checkColumnWin = (board, row, col, turn_text, setResultGame) => {
    try {
        // init piece col and row
        let piece_win = [],
            index = row - 1,
            indexBefore = 0,
            indexAfter = 0;
        
        // check before column
        indexBefore = row;
        if(typeof board[index] !== 'undefined') {
                while (index >= 0 && board[index][col] === turn_text) {
                piece_win.push([index, col]);
                indexBefore = index;
                index--;
            }
        }

        // check after column
        index = row + 1;
        indexAfter = row;
        if (typeof board[index] !== 'undefined') {
            while (index >= 0 && board[index][col] === turn_text) {
                piece_win.push([index, col]);
                indexAfter = index;
                index++;
            }
        }

        //check if front and back are blocked
        if (piece_win.length === 3) {
            if (board[indexBefore - 1][col] === null && board[indexAfter + 1][col] === null) {
                setResultGame(turn_text + StateGame.Winner)
                return piece_win;
            }
        }

        // check length > 4
        if (piece_win.length >= 4) {
            piece_win.push([row, col]);
            setResultGame(turn_text + StateGame.Winner)
            return piece_win;
        }
    } catch (e) {
        console.log(e);
    }
    
    return [];
}

/**
 * Function check win follow row
 * @param {array} board 
 * @param {number} row 
 * @param {number} col 
 * @param {string} turn_text 
 * @param {function} setResultGame 
 * @returns array
 * CreatedBy: PQ Huy (26.07.2021)
 */
const checkRowWin = (board, row, col, turn_text, setResultGame) => {
    try {
        // init piece col and row
        let piece_win = [],
            index = col - 1,
            indexBefore = 0,
            indexAfter = 0;
        
        // check before row
        indexBefore = col;
        if (typeof board[row][index] !== 'undefined') {
            while (index >= 0 && board[row][index] === turn_text) {
                piece_win.push([row, index]);
                indexBefore = index;
                index--;
            }
        }
        

        // check after row
        index = col + 1;
        indexAfter = col;
        if (typeof board[row][index] !== 'undefined') {
            while (index >= 0 && board[row][index] === turn_text) {
                piece_win.push([row, index]);
                indexAfter = index;
                index++;
            }
        }

        //check if front and back are blocked
        if (piece_win.length === 3) {
            if (board[row][indexBefore - 1] === null && board[row][indexAfter + 1] === null) {
                setResultGame(turn_text + StateGame.Winner)
                return piece_win;
            }
        }

        // check length > 4
        if (piece_win.length >= 4) {
            piece_win.push([row, col]);
            setResultGame(turn_text + StateGame.Winner)
            return piece_win;
        }
    } catch (e) {
        console.log(e);
    }
    
    return [];
}

/**
 * Function check win follow dialognal left
 * @param {array} board 
 * @param {number} row 
 * @param {number} col 
 * @param {string} turn_text 
 * @param {function} setResultGame 
 * @returns array
 * CreatedBy: PQ Huy (26.07.2021)
 */
const checkDialognalLeft = (board, row, col, turn_text, setResultGame) => {
    try {
        // init piece col and row
        let piece_win = [],
            row_index = row - 1,
            col_index = col - 1,
            row_indexBefore = 0,
            col_indexBefore = 0,
            row_indexAfter = 0,
            col_indexAfter = 0;
        
        // check win dialognal left before
        row_indexBefore = row;
        col_indexBefore = col;
        if (typeof board[row_index] !== 'undefined') {
            while (row_index >= 0 && col_index >= 0 && board[row_index][col_index] === turn_text) {
                piece_win.push([row_index, col_index]);
                // set index before
                row_indexBefore = row_index;
                col_indexBefore = col_index;
                //set col and row checked
                row_index--;
                col_index--;
            }
        }
        

        // check win dialognal left before
        row_index = row + 1;
        col_index = col + 1;
        row_indexAfter = row;
        col_indexAfter = col;
        if (typeof board[row_index] !== 'undefined') {
            while (row_index >= 0 && col_index >= 0 && board[row_index][col_index] === turn_text) {
                piece_win.push([row_index, col_index]);
                // set index before
                row_indexAfter = row_index;
                col_indexAfter = col_index;
                //set col and row checked
                row_index++;
                col_index++;
            }
        }
        

        //check if front and back are blocked
        if (piece_win.length === 3) {
            if (board[row_indexBefore - 1][col_indexBefore - 1] === null && board[row_indexAfter + 1][col_indexAfter + 1] === null) {
                setResultGame(turn_text + StateGame.Winner)
                return piece_win;
            }
        }

        // check length > 4
        if (piece_win.length >= 4) {
            piece_win.push([row, col]);
            setResultGame(turn_text + StateGame.Winner)
            return piece_win;
        }
    } catch (err) {
        console.log(err);
    }
    return [];
}

/**
 * Function check win follow dialognal right
 * @param {array} board 
 * @param {number} row 
 * @param {number} col 
 * @param {string} turn_text 
 * @param {function} setResultGame 
 * @returns array
 * CreatedBy: PQ Huy (26.07.2021)
 */
const checkDialognalRight = (board, row, col, turn_text, setResultGame) => {
    try {
        // init piece col and row
        let piece_win = [],
            row_index = row - 1,
            col_index = col + 1,
            row_indexBefore = 0,
            col_indexBefore = 0,
            row_indexAfter = 0,
            col_indexAfter = 0;
        
        // check win dialognal left before
        row_indexBefore = row_index;
        col_indexBefore = col_index;
        while (row_index >= 0 && col_index >= 0 && board[row_index][col_index] === turn_text) {
            piece_win.push([row_index, col_index]);
            // set index before
            row_indexBefore = row_index;
            col_indexBefore = col_index;
            //set col and row checked
            row_index--;
            col_index++;
        }

        // check win dialognal left before
        row_index = row + 1;
        col_index = col - 1;
        row_indexAfter = row_index;
        col_indexAfter = col_index;
        while (row_index >= 0 && col_index >= 0 && board[row_index][col_index] === turn_text) {
            piece_win.push([row_index, col_index]);
            // set index before
            row_indexAfter = row_index;
            col_indexAfter = col_index;
            //set col and row checked
            row_index++;
            col_index--;
        }

        //check if front and back are blocked
        if (piece_win.length === 3) {
            if (board[row_indexBefore - 1][col_indexBefore + 1] === null && board[row_indexAfter + 1][col_indexAfter - 1] === null) {
                setResultGame(turn_text + StateGame.Winner)
                return piece_win;
            }
        }

        // check length > 4
        if (piece_win.length >= 4) {
            piece_win.push([row, col]);
            setResultGame(turn_text + StateGame.Winner)
            return piece_win;
        }
    } catch (err) {
        console.log(err);
    }
    
    return [];

}

/**
 * Function check win
 * @param {array} board 
 * @param {number} row 
 * @param {number} col 
 * @param {bool} turn 
 * @param {function} setResultGame 
 * @returns array
 * CreatedBy: PQ Huy (26.07.2021)
 */
export const CheckedWinner = (board, row, col, turn, setResultGame) => {
    try {
        
        // init piece win
        let piece_win = [];

        // change turn to text
        let turn_text = turn ? pieces.X : pieces.O

        /**
         * Check win follow column
         */
        piece_win = checkColumnWin(board, row, col, turn_text, setResultGame)
        if (piece_win.length > 0)
            return piece_win;

        /**
         * Check win follow row
         */
        piece_win = []
        piece_win = checkRowWin(board, row, col, turn_text, setResultGame)
        if (piece_win.length > 0)
            return piece_win;
        
        /**
         * Check win diagonal left
         */
        piece_win = []
        piece_win = checkDialognalLeft(board, row, col, turn_text, setResultGame)
        if (piece_win.length > 0)
            return piece_win;
        
        /**
         * Check win diagonal right
         */
        piece_win = []
        piece_win = checkDialognalRight(board, row, col, turn_text, setResultGame)
        if (piece_win.length > 0)
            return piece_win;
    } catch (e) {
        console.log(e);
    }
    
    return [];
};
