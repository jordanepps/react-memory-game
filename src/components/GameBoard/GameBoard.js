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
          // add callback logic here if necessary
        }
      });
    });
  }, [gameStarted]);

  // function flipCards() {
  //   // setTimeout(() => {
  //   //   setAllCardsFlipped(false);
  //   // }, 9000);
  // }

  function shuffleCards() {
    setCardData(shuffle(cardData));
  }

  return (
    <div className="game-board" ref={containerRef}>
      <Flipper flipKey={cardData.join('')}>
        {gameStarted
          ? cardData.map((card, i) => (
              <Flipped key={i} flipId={i}>
                <Card key={i} icon={card} allCardsFlipped={allCardsFlipped} />
              </Flipped>
            ))
          : ''}
      </Flipper>

      {/* {flipCards()} */}
      <button onClick={shuffleCards}>Shuffle</button>
    </div>
  );
}
