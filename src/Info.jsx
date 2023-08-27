import React from 'react'

export const Info = ({ jumpTo, move, currentMove, history, description }) => {
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to the start of the game";
    }
  })

  return (
    <li key={move}>
      <button className={move === currentMove ? "history-btn current" : "history-btn"} onClick={() => jumpTo(move)} >{description}</button>
    </li>
  )
}
