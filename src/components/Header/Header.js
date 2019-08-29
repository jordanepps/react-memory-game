import React, { useContext } from 'react';
import './Header.css';

import { GameContext } from '../../contexts/DataContext';

export default function Header() {
  const [game] = useContext(GameContext);

  function renderAboutMessage() {
    return (
      <span className="app-about">
        Find all the matching pairs of cards with a friend. The one who finds
        the most matches is the winner.
      </span>
    );
  }

  return (
    <header>
      <h1 className="app-title">Memory Card Game</h1>
      {game.gameStarted ? '' : renderAboutMessage()}
    </header>
  );
}
