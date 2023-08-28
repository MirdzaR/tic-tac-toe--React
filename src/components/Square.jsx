import React from 'react';

export const Square = ({ value, handleClick, colorRed }) => {

  return (
    // set up button
    <button className={colorRed ? 'square red' : 'square' } onClick={handleClick}>
      {value}
    </button>
  )
}
