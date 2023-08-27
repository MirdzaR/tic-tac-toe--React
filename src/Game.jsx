import React, { useState } from 'react'
import { Board } from './Board'

export const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const xStep = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to the start of the game";
    }

    return (
      <li key={move}>
        <button className={move === currentMove ? "history-btn current" : "history-btn"} onClick={() => jumpTo(move)} >{description}</button>
      </li>
    );
  });

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length -1)
  }

  return (
    <div className='game'>
      <div className='game-board'>
        <Board xStep={xStep} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className='game-info'>
        <ol>
          {moves}
        </ol>
      </div>
    </div>
  )
}
