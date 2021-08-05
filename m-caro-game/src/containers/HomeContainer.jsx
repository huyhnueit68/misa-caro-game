import React, { useState, useEffect } from 'react';
import { isNext } from '../@Types/Enumeration'
import { useSelector, useDispatch } from 'react-redux'
import '../assets/css/header.css'
import '../assets/css/content.css'
import '../assets/css/footer.css'
import Home from '../components/Home'
import { SET_ARRAY_BOARD, SET_NEXT_TURN, SET_END_GAME } from '../reducers/index'
import FormStart from '../components/commons/FormStart';

function HomeContainer() {

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

  const sizeBoard = useSelector(state => state.index.number_cell)
  const nextTurn = useSelector(state => state.index.nextTurn);
  const endGame = useSelector(state => state.index.end_game);
  const startGame = useSelector(state => state.index.start_game);
  const array_board = useSelector(state => state.index.array_board);
  const dispatch = useDispatch();

  /**
   * Function reset map
   * CreatedBy: PQ Huy (26.07.2021)
   */
  const reset__Map = () => {
    // reset array board
    dispatch(SET_ARRAY_BOARD(initArrayBoard(sizeBoard)))

    // reset turn user
    dispatch(SET_NEXT_TURN(isNext.isX))

    // set end game
    dispatch(SET_END_GAME(isNext.newGame))
  }

  /**
   * Function set end game
   * CreatedBy:  PQ Huy (26.07.2021)
   */
  const handle__EndGame = () => {
    dispatch(SET_END_GAME(isNext.endGame))
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
    const cloneArray = JSON.parse(JSON.stringify(array_board));

    // set value for element
    cloneArray[row][col] = value;
    
    // update state
    dispatch(SET_ARRAY_BOARD(cloneArray))
  }

  /**
   * Function change state is next turn user
   * CreatedBy: PQ Huy (25.07.2021)
   */
  const change__Turn = () => {
    dispatch(SET_NEXT_TURN(!nextTurn))
  }

  return (
    <>
      {
        !startGame ? <FormStart/> : ''
      }
      <Home
        array_board={array_board}
        change__ArrayBoard={(value, row, coll) => change__Board(value, row, coll)}
        nextTurn={nextTurn}
        on__NextTurn={change__Turn}
        endGame={endGame}
        handle__EndGame={handle__EndGame}
        reset__Map={reset__Map}
      />
    </>
    
    );
}

export default HomeContainer;