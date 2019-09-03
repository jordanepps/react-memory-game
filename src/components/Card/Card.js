import React, { useRef, useState } from 'react';
import './Card.css';

import CardFront from '../CardFront/CardFront';
import CardBack from '../CardBack/CardBack';

export default function Card() {
  const [cardFlipped, setCardFlipped] = useState(false);
  const cardRef = useRef(null);

  function handleFlip() {
    console.log('card clicked');
    // console.log(cardRef.current);
    // console.log(cardFlipped);
    setCardFlipped(true);
  }
  /*
CARD BACK IS REVEALED IMMEDIATELY AFTER CLICK AND BEFORE FLIP
FIND A FIX FOR THIS BUG
*/
  return (
    <div className="card" ref={cardRef}>
      <div className={cardFlipped ? 'card-container show' : 'card-container'}>
        <CardFront handleFlip={handleFlip} />
        <CardBack />
      </div>
    </div>
  );
}
