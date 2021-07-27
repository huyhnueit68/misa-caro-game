import React, { useState } from "react";
import Header from "./commons/Header";
import Footer from "./commons/Footer";
import Row from "./board/Row";
import { CheckedWinner } from "../algorithm/checkWin";
import swal from 'sweetalert';
import { pieces, StateGame, titleGame } from "../@Types/Resources";

/**
 * 
 * @param {object} props 
 * @returns 
 */
export default function Home(props) {
    const { array_board, setArrayBoard, xIsNext, setXIsNext, endGame, setEnd, resetMap } = props;
    const [activeText, setActiveText] = useState('X');
    const [resultGame, setResultGame] = useState(null);
    const [prieceWin, setPrieceWin] = useState([]);

    const resetBoard = () => {
        setActiveText('X');
        setResultGame(null);
        setPrieceWin([])
        resetMap();
    }
    /**
     * Function check winner
     * @param {number} rowNumber 
     * @param {number} colNumber 
     * @param {function} setResultGame
     * CreatedBy:  PQ Huy (26.07.2021)
     */
    const checkWinner = (rowNumber, colNumber, setResultGame) => {
        let checkedLenght = CheckedWinner(array_board, rowNumber, colNumber, xIsNext, setResultGame);
        
        if (checkedLenght.length > 0) {
            checkedLenght.push([rowNumber, colNumber])
            setPrieceWin(checkedLenght)
            // return winner
            return true
        } else {
            setPrieceWin([])
            // not winner
            return false
        }
    }

    /**
     * Handle the player clicking on the checkers
     * @param {*} rowNumber 
     * @param {*} colNumber 
     * CreatedBy: PQ Huy(25.07.2021)
     */
    const handleClick = (rowNumber, colNumber) => {
        if (!endGame) {
            if (array_board[rowNumber][colNumber] == null) {
                // check winner
                let isWinner = checkWinner(rowNumber, colNumber, setResultGame);

                // set value array with 1 element
                let valueInput = xIsNext ? pieces.X : pieces.O;

                // binding array array_board
                setArrayBoard(valueInput, rowNumber, colNumber);

                // set is next change turn for user
                setXIsNext();

                if (isWinner) {
                    // show alert winner
                    swal(valueInput + titleGame.winner);

                    // set end game
                    setEnd();
                    return;
                }

                setActiveText(getActiveText(xIsNext));

                // check is dickens
                let isNotNull = true;

                // check array board is full
                for (let i = 0; i <= array_board.length - 1; i++) {
                    for (let j = 0; j <= array_board[i].length - 1; j++) {
                        if (array_board[i][j] == null) {
                            isNotNull = false;
                            break;
                        }
                    }
                }
                
                if (isNotNull) {
                    // show alert
                    swal(titleGame.dickens);

                    //set result title
                    setResultGame(titleGame.dickens)

                    // set end game
                    setEnd();
                }
            }
        }
    };
    
    return (
        <div className="home-page">
            <div className="home_container">
                {/* header */}
                <Header />
                {/* Content */}
                <div className="content">
                    <div className="content__board-game">
                        <div className="col-md-10">
                            {array_board.map((e, index) => (
                                <div className="board-game__row" key={index}>
                                    <Row
                                        // element map cell
                                        elements={e}

                                        // set row index
                                        rowNumber={index}

                                        // handle click event
                                        onClick={(rowNumber, colNumber) => handleClick(rowNumber, colNumber)}

                                        //set priece win
                                        prieceWin={prieceWin}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="content__info">
                        <p className="title">INFORMATION</p>
                        <p>ACTIVE: <span className="result-text">{activeText}</span></p>
                        <p> {" "} Result :{" "}
                            <span className="result-text">{resultGame}</span>
                        </p>
                        <button onClick={() => resetBoard()} className="m-btn btn-info">
                        Play Again
                        </button>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </div>
        
    );
}

/**
 * 
 * @returns 
 */
const getActiveText = (xIsNext) => {
    let text = !xIsNext ? pieces.X : pieces.O

    return text;
}