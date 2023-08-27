import React from 'react';

export const Square = ({ value, handleClick }) => {
  return (
    <button className='square' onClick={handleClick}>
      {value}
    </button>
  )
}
