import React from 'react';
import './CardFront.css';

export default function CardFront({ onHover }) {
  return (
    <div className="card-front" onMouseEnter={e => onHover(e)}>
      Front/Blank Side
    </div>
  );
}
