import { combineReducers } from "redux";

const inital_state = {
  number_cell: 50,
  array_board: [],
  piece_current: 'X'
};

const main = (state = inital_state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default combineReducers({ main });
