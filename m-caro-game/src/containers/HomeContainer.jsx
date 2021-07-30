import React, { useState } from 'react';
import {numberInfo, isNext} from '../@Types/Enumeration'
// import { useSelector, useDispatch } from 'react-redux'
import '../assets/css/header.css'
import '../assets/css/content.css'
import '../assets/css/footer.css'
import Home from '../components/Home'

function HomeContainer() {
  
  // const number_cell = useSelector(state => state.number_cell)
  // const array_board = useSelector(state => state.array_board)
  // const piece_current = useSelector(state => state.piece_current)
  // const dispatch = useDispatch();

  /**
   * Function init array board
   * @param {number} numberCell 
   * @returns
   * CreatedBy:  PQ Huy (25.07.2021)
   */
  const initArrayBoard = (numberCell) => {
    const number_cell = parseInt(numberCell);
    return Array(number_cell).fill(null).map(() => Array(number_cell).fill(null))
  };

  const [array_board, setArrayBoard] = useState(initArrayBoard(numberInfo.SizeBoard))
  const [nextTurn, setTurn] = useState(isNext.isX)
  const [endGame, setEndGame] = useState(isNext.newGame);

  /**
   * Function reset map
   * CreatedBy: PQ Huy (26.07.2021)
   */
  const reset__Map = () => {
    // reset array board
    setArrayBoard(initArrayBoard(numberInfo.SizeBoard))

    // reset turn user
    setTurn(isNext.isX)

    // set end game
    setEndGame(isNext.newGame)
  }

  /**
   * Function set end game
   * CreatedBy:  PQ Huy (26.07.2021)
   */
  const handle__EndGame = () => {
    setEndGame(isNext.endGame)
  }

  /**
   * Function set value array board
   * @param {string} value
   * @param {number} row 
   * @param {number} col 
   * CreatedBy:  PQ Huy (26.07.2021)
   */
  const change__Board = (value, row, col) => {
    // clone array board
    const cloneArray = [...array_board];

    // set value for element
    cloneArray[row][col] = value;
    
    // update state
    setArrayBoard(cloneArray);
  }

  /**
   * Function change state is next turn user
   * CreatedBy: PQ Huy (25.07.2021)
   */
  const change__Turn = () => {
    setTurn(!nextTurn);
  }

  return (
    <Home
      array_board={array_board}
      change__ArrayBoard={(value, row, coll) => change__Board(value, row, coll)}
      nextTurn={nextTurn}
      on__NextTurn={change__Turn}
      endGame={endGame}
      handle__EndGame={handle__EndGame}
      reset__Map={reset__Map}
    />
    );
}

export default HomeContainer;