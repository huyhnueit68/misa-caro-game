import React, { useEffect, useState } from "react";
import Header from "./commons/Header";
import Footer from "./commons/Footer";
import Row from "./board/Row";
import {CheckedWinner} from "../algorithm/checkWin";

/**
 * 
 * @param {object} props 
 * @returns 
 */
export default function Home(props) {
    const { array_board, setArrayBoard, xIsNext, setXIsNext, endGame, setEnd, resetMap } = props;

    /**
     * Function check winner
     * @param {number} rowNumber 
     * @param {number} colNumber 
     * CreatedBy:  PQ Huy (26.07.2021)
     */
    const checkWinner = (rowNumber, colNumber) => {
        let checkedLenght = CheckedWinner(array_board, rowNumber, colNumber, xIsNext);

        if (checkedLenght.length > 0) {
            // return x winner
            return true
        } else {
            // not winner
            return false
        }
    }

    const setTexResult = () => {
        let text = '';

        return text;
    }

    /**
     * Handle the player clicking on the checkers
     * @param {*} rowNumber 
     * @param {*} colNumber 
     * CreatedBy: PQ Huy(25.07.2021)
     */
    const handleClick = (rowNumber, colNumber) => {
        if (!endGame) {
            // check winner
            let isWinner = checkWinner(rowNumber, colNumber);

            // set value array with 1 element
            let valueInput = xIsNext ? "X" : "O";

            // binding array array_board
            setArrayBoard(valueInput, rowNumber, colNumber);

            // set is next change turn for user
            setXIsNext();
        debugger

            if (isWinner) {
                setEnd();
                return;
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
                                <div className="board-game__row">
                                    <Row
                                        // element map cell
                                        elements={e}

                                        // set key
                                        key={index}

                                        // set row index
                                        rowNumber={index}

                                        // handle click event
                                        onClick={(rowNumber, colNumber) => handleClick(rowNumber, colNumber)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="content__info">
                        <p className="title">INFORMATION</p>
                        <p>ACTIVE: </p>
                        <p> {" "} Result :{" "}
                            {setTexResult}
                        </p>
                        <button onClick={() => resetMap()} className="m-btn btn-info">
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