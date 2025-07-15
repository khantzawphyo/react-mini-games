import { useState } from 'react';

const HelpButton = () => {
  const [showHelp, setShowHelp] = useState(false);

  const instructions = [
    'The game is played on a 3x3 grid',
    'Players alternate placing X and O marks',
    'First to get 3 in a row wins',
    'Game ends in a draw if the board fills up',
    'Reset button starts a fresh game anytime',
  ];

  return (
    <div className='fixed right-6 bottom-6'>
      <button
        onClick={() => setShowHelp(!showHelp)}
        className='relative flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold text-gray-700 shadow-md hover:scale-105'
        aria-label='Game instructions'
      >
        ?
      </button>

      {showHelp && (
        <div className='absolute right-0 bottom-full mb-3 w-64 rounded-lg bg-white p-3 text-gray-700 shadow-lg'>
          <h4 className='mb-2 font-bold'>How to play:</h4>
          <ul className='list-disc space-y-1 pl-5 text-sm'>
            {instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
          <div className='absolute right-3 -bottom-1.5 h-3 w-3 rotate-45 bg-white'></div>
        </div>
      )}
    </div>
  );
};

export default HelpButton;
