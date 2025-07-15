import { RefreshCcw } from 'lucide-react';

export default function ResetButton({ onClick }) {
  return (
    <button
      className='flex items-center justify-center rounded-lg gap-2 bg-gray-700 px-4 py-2 text-white transition-colors hover:bg-gray-600'
      onClick={onClick}
    >
      <RefreshCcw size={16}/>
      Reset Game
    </button>
  );
}
