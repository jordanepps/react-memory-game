import React, { useContext, useEffect, useRef } from 'react';
import { spring } from 'react-flip-toolkit';
import { GameContext } from '../../contexts/DataContext';
import './GameBoard.css';
import Card from '../Card/Card';

export default function GameBoard() {
  const [gameData] = useContext(GameContext);
  const { gameStarted } = gameData;
  const containerRef = useRef(null);

  function renderCards(isFlipped) {
    //Will render multiple blank cards for animation testing
    const cardData = [
      'a',
      'a',
      'b',
      'b',
      'c',
      'c',
      'd',
      'd',
      'e',
      'e',
      'f',
      'f',
      'g',
      'g',
      'h',
      'h',
      'i',
      'i'
    ];
    const arr = [];
    cardData.forEach((card, i) => {
      arr.push(<Card key={i} icon={card} />);
    });

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
        delay: i * 250,
        onComplete: () => {
          // add callback logic here if necessary
          console.log('done');
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
