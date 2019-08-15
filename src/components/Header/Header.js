import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header>
      <h1 className="app-title">Memory Card Game</h1>
      <span className="app-about">
        Find all the matching pairs of cards with a friend. The one who finds
        the most matches is the winner.
      </span>
    </header>
  );
}
