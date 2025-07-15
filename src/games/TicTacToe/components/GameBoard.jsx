import { useEffect, useState } from 'react';
import Square from './Square';
import X from './X';
import O from './O';
import calculateWinner from '../utils/calculateWinner';
import ResetButton from './ResetButton';

export default function GameBoard() {
  const initialSquares = Array(9).fill(null);
  const [showGrid, setShowGrid] = useState(initialSquares);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowGrid(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function handleReset() {
    setSquares(initialSquares);
    setXIsNext(true);
    setShowGrid(false);
    const timeout = setTimeout(() => setShowGrid(true), 1000);
    return () => clearTimeout(timeout);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (squares.every((square) => square)) {
    status = 'Draw!';
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className='text-center flex flex-col items-center'>
      <div className='mb-4 text-2xl font-bold text-white'>{status}</div>
      <div className='relative mx-auto mb-8 grid h-[300px] w-[300px] grid-cols-3'>
        {/* Vertical Lines */}
        <div
          className={`absolute left-1/3 w-2.5 -translate-x-1/2 transform bg-[#0ca193] transition-all duration-500 ease-out ${
            showGrid ? 'h-full scale-y-100' : 'h-0 scale-y-0'
          } origin-top`}
        ></div>
        <div
          className={`absolute left-2/3 w-2.5 -translate-x-1/2 transform bg-[#0ca193] transition-all delay-100 duration-500 ease-out ${
            showGrid ? 'h-full scale-y-100' : 'h-0 scale-y-0'
          } origin-top`}
        ></div>

        {/* Horizontal Lines */}
        <div
          className={`absolute top-1/3 h-2.5 w-full -translate-y-1/2 transform bg-[#0ca193] transition-all delay-200 duration-500 ease-out ${
            showGrid ? 'scale-x-100' : 'scale-x-0'
          } origin-left`}
        ></div>
        <div
          className={`absolute top-2/3 h-2.5 w-full -translate-y-1/2 transform bg-[#0ca193] transition-all delay-300 duration-500 ease-out ${
            showGrid ? 'scale-x-100' : 'scale-x-0'
          } origin-left`}
        ></div>

        {squares.map((square, i) => (
          <Square key={i} value={square} onSquareClick={() => handleClick(i)} />
        ))}
      </div>
      <ResetButton onClick={handleReset} />
    </div>
  );
}
