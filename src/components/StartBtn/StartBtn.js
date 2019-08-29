import React from 'react';
import './StartBtn.css';

export default function StartBtn({ openModal }) {
  return (
    <div>
      <button onClick={openModal}>Start Game</button>
    </div>
  );
}
