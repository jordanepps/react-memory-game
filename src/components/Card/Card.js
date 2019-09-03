import React, { useRef, useState, useContext } from 'react';
import ReactCardFlip from 'react-card-flip';
import { GameContext } from '../../contexts/DataContext';
import './Card.css';

import CardFront from '../CardFront/CardFront';
import CardBack from '../CardBack/CardBack';

export default function Card({ icon, allCardsFlipped }) {
  // const [gameData] = useContext(GameContext);
  const [cardFlipped, setCardFlipped] = useState(false);
  const cardRef = useRef(null);

  function handleFlip() {
    console.log('card clicked');
    setCardFlipped(!cardFlipped);
  }

  return (
    <div className="card" ref={cardRef}>
      <div className="card-container">
        <ReactCardFlip isFlipped={allCardsFlipped || cardFlipped}>
          {/* <ReactCardFlip isFlipped={allCardsFlipped}> */}
          <CardFront handleFlip={handleFlip} key="front" />
          <CardBack key="back" icon={icon} />
        </ReactCardFlip>
      </div>
    </div>
  );
}
