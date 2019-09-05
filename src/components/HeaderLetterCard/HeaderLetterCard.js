import React from 'react';
import './HeaderLetterCard.css';

export default function HeaderLetterCard({ letter }) {
  return (
    <div className="letter">
      <p>{letter}</p>
    </div>
  );
}
