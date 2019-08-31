import React, { useContext, useEffect, useRef } from 'react';
import { spring } from 'react-flip-toolkit';
import './Card.css';

import CardFront from '../CardFront/CardFront';
import CardBack from '../CardBack/CardBack';
import { GameContext } from '../../contexts/DataContext';

export default function Card() {
  const [gameData] = useContext(GameContext);
  const { gameStarted } = gameData;
  const cardRef = useRef(null);

  // useEffect(() => {
  //   console.log(cardRef);
  // }, [gameStarted]);

  function handleOnMouseEnter(e) {
    // const cardFront = [...cardRef.current];
    // console.log(cardFront);
    console.log(cardRef.current);
    // console.log(cardRef.current.querySelector('.card-front'));
  }
  return (
    <div className="card" ref={cardRef}>
      <div className="card-container">
        <CardFront onHover={handleOnMouseEnter} />
        <CardBack />
      </div>
    </div>
  );
}
