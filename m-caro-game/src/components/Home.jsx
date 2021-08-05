import React, { useState } from "react";
import Header from "./commons/Header";
import Footer from "./commons/Footer";
import Row from "./board/Row";
import { CheckedWinner } from "../algorithm/checkWin";
import swal from 'sweetalert';
import { pieces, titleGame } from "../@Types/Resources";

/**
 * 
 * @param {object} props 
 * @returns 
 */
export default function Home(props) {
    const { array_board, change__ArrayBoard, nextTurn, on__NextTurn, endGame, handle__EndGame, reset__Map } = props;
    const [activeText, setActiveText] = useState('X');
    const [resultGame, setResultGame] = useState(null);
    const [prieceWin, setPrieceWin] = useState([]);

    const resetBoard = () => {
        setActiveText('X');
        setResultGame(null);
        setPrieceWin([])
        reset__Map();
    }
    /**
     * Function check winner
     * @param {number} rowNumber 
     * @param {number} colNumber 
     * @param {function} setResultGame
     * CreatedBy:  PQ Huy (26.07.2021)
     */
    const checkWinner = (rowNumber, colNumber, setResultGame) => {
        let checkedLenght = CheckedWinner(array_board, rowNumber, colNumber, nextTurn, setResultGame);
        
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
    const handle__Action = (rowNumber, colNumber) => {
        if (!endGame) {
            if (array_board[rowNumber][colNumber] == null) {
                // check winner
                let isWinner = checkWinner(rowNumber, colNumber, setResultGame);

                // set value array with 1 element
                let valueInput = nextTurn ? pieces.X : pieces.O;

                // binding array array_board
                change__ArrayBoard(valueInput, rowNumber, colNumber);

                // set is next change turn for user
                on__NextTurn();

                if (isWinner) {
                    // show alert winner
                    swal(valueInput + titleGame.winner);

                    // set end game
                    handle__EndGame();
                    return;
                }

                setActiveText(getActiveText(nextTurn));

                // check is dickens
                let isNotNull = true;

                // check array board is full
                for (let i = 0; i <= array_board.length - 1; i++) {
                    for (let j = 0; j <= array_board[i].length - 1; j++) {
                        if (array_board[i][j] == null) {
                            if (i != rowNumber || j != colNumber) {
                                isNotNull = false;
                                break;
                            }
                        }
                    }
                }
                
                if (isNotNull) {
                    // show alert
                    swal(titleGame.dickens);

                    //set result title
                    setResultGame(titleGame.dickens)

                    // set end game
                    handle__EndGame();
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
                                        row__Number={index}

                                        // handle click event
                                        on__Action={handle__Action}

                                        //set priece win
                                        priece__Win={prieceWin}
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
const getActiveText = (nextTurn) => {
    let text = !nextTurn ? pieces.X : pieces.O

    return text;
}