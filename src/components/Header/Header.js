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
      <div>
        <div className="letter">
          <p>M</p>
        </div>
        <div className="letter">
          <p>E</p>
        </div>
        <div className="letter">
          <p>M</p>
        </div>
        <div className="letter">
          <p>O</p>
        </div>
        <div className="letter">
          <p>R</p>
        </div>
        <div className="letter">
          <p>Y</p>
        </div>
      </div>
      {/* <div>
        <div className="letter">
          <p>C</p>
        </div>
        <div className="letter">
          <p>A</p>
        </div>
        <div className="letter">
          <p>R</p>
        </div>
        <div className="letter">
          <p>D</p>
        </div>
      </div> */}
      <h1 className="app-title">Card Game</h1>
      {gameStarted ? '' : renderAboutMessage()}
    </header>
  );
}
