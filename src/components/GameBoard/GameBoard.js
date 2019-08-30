import React, { useContext, useEffect, useRef } from 'react';
import { spring } from 'react-flip-toolkit';
import './GameBoard.css';

import Card from '../Card/Card';
import { GameContext } from '../../contexts/DataContext';

export default function GameBoard() {
  const [gameData] = useContext(GameContext);
  const { gameStarted } = gameData;
  const containerRef = useRef(null);

  function renderCards() {
    //Will render multiple blank cards for animation testing
    const arr = [];
    for (let i = 0; i <= 11; i++) {
      arr.push(<Card key={i} />);
    }
    return arr;
  }

  useEffect(() => {
    const cards = [...containerRef.current.querySelectorAll('.card')];
    cards.forEach((el, i) => {
      spring({
        config: 'wobbly',
        values: {
          translateY: [-15, 0],
          opacity: [0, 1]
        },
        onUpdate: ({ translateY, opacity }) => {
          el.style.opacity = opacity;
          el.style.transform = `translateY(${translateY}px)`;
        },
        delay: i * 30,
        onComplete: () => {
          // add callback logic here if necessary
        }
      });
    });
  }, [gameStarted]);

  return (
    <div className="game-board" ref={containerRef}>
      {gameStarted ? renderCards() : ''}
    </div>
  );
}
