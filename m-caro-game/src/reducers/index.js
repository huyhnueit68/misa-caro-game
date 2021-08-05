import { combineReducers } from "redux";
import { pieces } from '../@Types/Resources'
import { createSlice } from '@reduxjs/toolkit'
import { numberInfo, isNext } from '../@Types/Enumeration'

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

const initialState = {
  number_cell: 0,
  array_board: initArrayBoard(0),
  nextTurn: isNext.isX,
  piece_current: pieces.X,
  end_game: isNext.newGame,
  start_game: false,
};

/**
 * 
 */
const indexSlide = createSlice({
  name: 'index',
  initialState: initialState,
  reducers: {
    SET_NUMBER_SELL(state, action) {
      state.number_cell = action.payload;
      return state;
    },
    SET_ARRAY_BOARD(state, action) {
      state.array_board = action.payload;
      return state;
    },
    SET_NEXT_TURN(state, action) {
      state.nextTurn = action.payload;
      return state;
    },
    SET_PIECE_CUR(state, action) {
      state.piece_current = action.payload;
      return state;
    },
    SET_END_GAME(state, action) {
      state.end_game = action.payload;
      return state;
    },
    SET_START_GAME(state, action) {
      state.start_game = action.payload;
      return state;
    },
  },
});

export const { actions, reducer } = indexSlide;
export const { SET_NUMBER_SELL, SET_ARRAY_BOARD, SET_NEXT_TURN, SET_PIECE_CUR, SET_END_GAME, SET_START_GAME } = actions;
export default reducer;


