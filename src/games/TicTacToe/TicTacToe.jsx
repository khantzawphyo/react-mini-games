import GameBoard from './components/GameBoard';
import HelpButton from './components/HelpButton';

export default function TicTacToe() {
  return (
    <main className='relative flex min-h-screen flex-col items-center justify-center bg-[#14bcad] p-4 text-white selection:bg-gray-700 selection:text-white'>
      <GameBoard />
      <HelpButton />
      <div className='absolute bottom-10 text-xs text-white/90'>
        Made with ❤️ by{' '}
        <a
          href='https://github.com/khantzawphyo'
          target='_blank'
          rel='noopener noreferrer'
          className='text-white underline'
        >
          Khant Zaw Phyo
        </a>
      </div>
    </main>
  );
}
