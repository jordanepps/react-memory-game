import React from 'react';
import './Card.css';

import CardFront from '../CardFront/CardFront';
import CardBack from '../CardBack/CardBack';

export default function Card() {
  return (
    <div className="card">
      <div className="card-container">
        <CardFront />
        <CardBack />
      </div>
    </div>
  );
}
