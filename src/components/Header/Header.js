import React, { useContext } from 'react';
import './Header.css';

import { GameContext } from '../../contexts/DataContext';

export default function Header() {
  const [game] = useContext(GameContext);
  const { gameStarted } = game;

  function renderAboutMessage() {
    return (
      <span className="app-about">
        Find all of the matching pairs of cards with a friend or face the
        computer. The one who finds the most matches wins!
      </span>
    );
  }

  return (
    <header>
      <h1 className="app-title">Memory Card Game</h1>
      {gameStarted ? '' : renderAboutMessage()}
    </header>
  );
}
