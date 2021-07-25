import React from 'react';
import Home from '../components/Home'

function HomeContainer({array_board}) {
    return (
      <Home
        setNumberCell={numberCell => {
          const number_cell = parseInt(numberCell);
          actions.set_number_cell(number_cell);
          actions.init_array(
            Array(number_cell)
              .fill(null)
              .map(() => Array(number_cell).fill(null))
          );
        }}
        array_board={array_board}
      />
    );
}

export default HomeContainer;