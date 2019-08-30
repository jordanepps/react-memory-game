import React, { useContext } from 'react';
import './ScoreBoard.css';

import { PlayersContext, GameContext } from '../../contexts/DataContext';

export default function ScoreBoard() {
  const [players] = useContext(PlayersContext);
  const [game] = useContext(GameContext);
  const { one, two } = players;
  const { player2isCOM, gameStarted } = game;

  function renderPlayer1Score(currentScore) {
    return <span>Player 1: {currentScore}</span>;
  }

  function renderPlayer2Score(isCOM, currentScore) {
    const player = isCOM ? 'COM' : 'Player 2';
    return (
      <span>
        {player}: {currentScore}
      </span>
    );
  }

  function renderScoreBoard() {
    return (
      <div>
        {renderPlayer1Score(one.score)}
        {renderPlayer2Score(player2isCOM, two.score)}
      </div>
    );
  }
  return gameStarted ? renderScoreBoard() : <div />;
}
