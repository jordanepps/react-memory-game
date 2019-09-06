import React, { useRef, useState } from 'react';
import { Flipped } from 'react-flip-toolkit';
import ReactCardFlip from 'react-card-flip';

import './Card.css';

import CardFront from '../CardFront/CardFront';
import CardBack from '../CardBack/CardBack';

export default function Card({ icon, allCardsFlipped, flipId }) {
  const [cardFlipped, setCardFlipped] = useState(false);
  const cardRef = useRef(null);

  function handleFlip() {
    console.log('card clicked');
    setCardFlipped(!cardFlipped);
  }

  return (
    <Flipped inverseFlipId={flipId}>
      <div className="card" ref={cardRef}>
        <Flipped inverseFlipId={flipId}>
          <div className="card-container">
            <ReactCardFlip isFlipped={allCardsFlipped || cardFlipped}>
              <CardFront handleFlip={handleFlip} key="front" />
              <CardBack key="back" icon={icon} />
            </ReactCardFlip>
          </div>
        </Flipped>
      </div>
    </Flipped>
  );
}
