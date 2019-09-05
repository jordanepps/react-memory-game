import React, { useContext, useState, useEffect } from 'react';
import { GameContext } from '../../contexts/DataContext';
import { Flipper, Flipped } from 'react-flip-toolkit';
import shuffle from 'lodash.shuffle';
import './Header.css';

export default function Header() {
  const [title, setTitle] = useState(shuffle('memory'));
  const [game] = useContext(GameContext);
  const { gameStarted } = game;

  const colors = ['#009BC2', '#F95700'];

  function getColor(letter) {
    if (letter === 'm' || letter === 'r') return colors[0];
    else return colors[1];
  }

  useEffect(() => {
    setTimeout(() => {
      setTitle(['m', 'e', 'm', 'o', 'r', 'y']);
    }, 3000);
  });

  function renderAboutMessage() {
    return (
      <p className="app-about">
        Find all of the matching pairs of cards with a friend or face the
        computer. The one who finds the most matches wins!
      </p>
    );
  }

  function renderLetterCards() {
    return title.map((letter, i) => (
      <Flipped key={i} flipId={letter}>
        <span className="letter" style={{ backgroundColor: getColor(letter) }}>
          {letter}
        </span>
      </Flipped>
    ));
  }

  return (
    <header>
      <div className="app-title-container">
        <Flipper flipKey={title}>{renderLetterCards()}</Flipper>
        <h1 className="app-title">Card Game</h1>
      </div>

      {gameStarted ? '' : renderAboutMessage()}
    </header>
  );
}
