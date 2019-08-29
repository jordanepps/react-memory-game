import React from 'react';
import './ScoreBoard.css';

export default function ScoreBoard({ players, gameStarted }) {
  function renderScoreBoard() {
    return (
      <div>
        <span>Player 1: {players.one.score}</span>
        <span> </span>
        <span>Player 2: {players.two.score}</span>
      </div>
    );
  }
  return gameStarted ? renderScoreBoard() : <div />;
}
