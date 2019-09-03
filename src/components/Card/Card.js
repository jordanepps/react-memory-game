import React, { useRef, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './Card.css';

import CardFront from '../CardFront/CardFront';
import CardBack from '../CardBack/CardBack';

export default function Card({ icon }) {
  const [cardFlipped, setCardFlipped] = useState(true);
  const cardRef = useRef(null);

  function handleFlip() {
    console.log('card clicked');
    setCardFlipped(!cardFlipped);
  }

  return (
    <div className="card" ref={cardRef}>
      <div className="card-container">
        <ReactCardFlip isFlipped={cardFlipped}>
          <CardFront handleFlip={handleFlip} key="front" />
          <CardBack key="back" icon={icon} />
        </ReactCardFlip>
      </div>
    </div>
  );
}
