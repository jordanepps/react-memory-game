import React from 'react';
import './Header.css';

export default function Header({ gameStarted }) {
  return (
    <header>
      <h1 className="app-title">Memory Card Game</h1>
      <span className="app-about">
        {gameStarted
          ? ''
          : 'Find all the matching pairs of cards with a friend. The one who finds the most matches is the winner.'}
      </span>
    </header>
  );
}
