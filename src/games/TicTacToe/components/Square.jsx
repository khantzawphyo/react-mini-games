import O from './O';
import X from './X';

export default function Square({ value, onSquareClick }) {
  return (
    <button
      className='flex aspect-square items-center justify-center'
      onClick={onSquareClick}
    >
      {value === 'X' ? <X /> : value === 'O' ? <O /> : null}
    </button>
  );
}
