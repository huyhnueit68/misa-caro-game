import { combineReducers } from "redux";
import { types, pieces } from "../constants/action.types";

const inital_state = {
  number_cell: 3,
  array_board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  piece_current: pieces.X
};

const main = (state = inital_state, action) => {
  switch (action.type) {
    case types.SET_NUMBER_CELL: {
      return { ...state, number_cell: parseInt(action.number_cell) };
    }
    case types.INIT_ARRAY: {
      return { ...state, array_board: action.array_board };
    }
    case types.SWITCH_PIECE: {
      return { ...state, piece_current: action.data };
    }
    case types.TICK: {
      return {...state, array_board: action.array_new}
    }
    default:
      return state;
  }
};
export default combineReducers({ main });
