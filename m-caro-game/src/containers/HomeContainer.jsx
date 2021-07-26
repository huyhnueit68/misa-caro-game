import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import '../css/header.css'
import '../css/content.css'
import '../css/footer.css'
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

  const [array_board, setArrayBoard] = useState(initArrayBoard(50))
  const [xIsNext, setXIsNext] = useState(true)
  const [endGame, setEndGame] = useState(false);

  /**
   * Function reset map
   * CreatedBy: PQ Huy (26.07.2021)
   */
  const resetMap = () => {
    // reset array board
    setArrayBoard(initArrayBoard(50))

    // reset turn user
    setXIsNext(true)

    // set end game
    setEndGame(false)
  }

  /**
   * Function set end game
   * CreatedBy:  PQ Huy (26.07.2021)
   */
  const setEnd = () => {
    setEndGame(true)
  }

  /**
   * Function set value array board
   * @param {string} value
   * @param {number} row 
   * @param {number} col 
   * CreatedBy:  PQ Huy (26.07.2021)
   */
  const changeArrayBoard = (value, row, col) => {
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
  const changeXIsNext = () => {
    setXIsNext(!xIsNext);
  }

  return (
    <Home
      array_board={array_board}
      setArrayBoard={(value, row, coll) => changeArrayBoard(value, row, coll)}
      xIsNext={xIsNext}
      setXIsNext={changeXIsNext}
      endGame={endGame}
      setEnd={setEnd}
      resetMap={resetMap}
    />
    );
}

export default HomeContainer;