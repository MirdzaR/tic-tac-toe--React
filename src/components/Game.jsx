import React, { useState } from 'react'
import { Board } from './Board'

export const Game = () => {
  // set const
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const xStep = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const moves = history.map((squares, move) => {
    // set info descriptions
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to the start of the game";
    }

    return (
      <li key={move}>
        {/* Show history as text if current field */}
        {(move === currentMove) ? <p className="history-p">{description}</p> : <button className="history-btn" onClick={() => jumpTo(move)} >{description}</button>}
      </li>
    );
  });

  // change moves
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  // update history and current move in game
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length -1)
  }

  return (
    <div className='game'>
      {/* game part */}
      <div className='game-board'>
        <Board xStep={xStep} squares={currentSquares} onPlay={handlePlay} />
      </div>
      {/* history/game info part */}
      <div className='game-info'>
        <ol>
          {moves}
        </ol>
      </div>
    </div>
  )
}
