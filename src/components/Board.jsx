import React from 'react'
import { Square } from './Square'

export const Board = ({ xStep, squares, onPlay}) => {
  // set winning line
  const winningLine = calculateWinner(squares);

  // set game status based on winner or next move
  let gameStatus;
  if (winningLine) {
    gameStatus = "Winner: " + squares[winningLine[0]];
  } else if (!squares.includes(null)){
    gameStatus = "It's a Draw";
  }
  else {
    gameStatus = "Next Player: " + (xStep ? "X" : "O");
  };

  // handle button clicked
  function handleClick(i) {
    // do nothing if square is taken or the game is over
    if(squares[i] || winningLine){
      return;
    }

    const nextSquares = squares.slice(); // get squares[0]
    // set button to x or o
    if(xStep) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }

    // handlePlay from Game.jsx
    onPlay(nextSquares);
  }

  // calculate winner
  function calculateWinner(squares) {
    // set all winning possibilities
    const lines =[
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    // loop for checking the winner
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      // checking if there is a winner
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        // return winning values
        return lines[i];
      }
    }
    return null;
  }

  // color winning line
  function colorRed(id, winningLine) {
    return (winningLine && winningLine.includes(id)) ? true : false
  }

  return (
    <>
      <h3> {gameStatus} </h3>
      <div className='container'>
          {/* TODO switch from hardcoded */}
          <Square value={squares[0]} handleClick={() => handleClick(0)} colorRed={colorRed(0, winningLine)} />
          <Square value={squares[1]} handleClick={() => handleClick(1)} colorRed={colorRed(1, winningLine)} />
          <Square value={squares[2]} handleClick={() => handleClick(2)} colorRed={colorRed(2, winningLine)} />
          <Square value={squares[3]} handleClick={() => handleClick(3)} colorRed={colorRed(3, winningLine)} />
          <Square value={squares[4]} handleClick={() => handleClick(4)} colorRed={colorRed(4, winningLine)} />
          <Square value={squares[5]} handleClick={() => handleClick(5)} colorRed={colorRed(5, winningLine)} />
          <Square value={squares[6]} handleClick={() => handleClick(6)} colorRed={colorRed(6, winningLine)} />
          <Square value={squares[7]} handleClick={() => handleClick(7)} colorRed={colorRed(7, winningLine)} />
          <Square value={squares[8]} handleClick={() => handleClick(8)} colorRed={colorRed(8, winningLine)} />
      </div>
    </>
  )
}
