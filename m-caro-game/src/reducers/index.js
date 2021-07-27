import { combineReducers } from "redux";
import { pieces } from '../@Types/Resources'

const inital_state = {
  number_cell: 50,
  array_board: [],
  piece_current: pieces.X
};

const main = (state = inital_state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default combineReducers({ main });
