import React, { useContext } from 'react';
import { GameContext } from '../../contexts/DataContext';
import './Header.css';
import HeaderLetterCard from '../HeaderLetterCard/HeaderLetterCard';

export default function Header() {
  const [game] = useContext(GameContext);
  const { gameStarted } = game;

  function renderAboutMessage() {
    return (
      <p className="app-about">
        Find all of the matching pairs of cards with a friend or face the
        computer. The one who finds the most matches wins!
      </p>
    );
  }

  function renderLetterCards() {
    const title = 'memory';
    return title
      .split('')
      .map((letter, i) => <HeaderLetterCard letter={letter} key={i} />);
  }

  return (
    <header>
      <div className="app-title-container">
        {renderLetterCards()}
        <h1 className="app-title">Card Game</h1>
      </div>

      {gameStarted ? '' : renderAboutMessage()}
    </header>
  );
}
