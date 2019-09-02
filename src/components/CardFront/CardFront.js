import React from 'react';
import './CardFront.css';

export default function CardFront({ handleFlip }) {
  return (
    <div className="card-front" onClick={handleFlip}>
      Front/Blank Side
    </div>
  );
}
