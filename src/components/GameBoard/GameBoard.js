import React, { useState, useContext, useEffect, useRef } from 'react';
import { spring, Flipper, Flipped } from 'react-flip-toolkit';
import shuffle from 'lodash.shuffle';
import { GameContext } from '../../contexts/DataContext';
import './GameBoard.css';
import Card from '../Card/Card';

export default function GameBoard() {
  const [gameData] = useContext(GameContext);
  const { gameStarted } = gameData;
  const [allCardsFlipped, setAllCardsFlipped] = useState(true);
  const [cardData, setCardData] = useState([
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
  ]);
  const containerRef = useRef(null);

  useEffect(() => {
    let cardsToRender = cardData.length;
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
        delay: i * 200,
        onComplete: () => {
          cardsToRender--;
          if (cardsToRender === 0) setAllCardsFlipped(false);
        }
      });
    });
  }, [gameStarted]);

  function shuffleCards() {
    setCardData(shuffle(cardData));
  }

  function renderCards() {
    return cardData.map((card, i) => (
      <Flipped key={i} flipId={i}>
        <Card
          key={i}
          icon={card}
          allCardsFlipped={allCardsFlipped}
          flipId={i}
        />
      </Flipped>
    ));
  }

  return (
    <div className="game-board" ref={containerRef}>
      <Flipper flipKey={cardData.join('')}>
        {gameStarted ? renderCards() : ''}
      </Flipper>
      <button onClick={shuffleCards}>Shuffle</button>
    </div>
  );
}
