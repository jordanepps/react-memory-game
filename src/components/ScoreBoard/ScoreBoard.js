import React, { useContext } from 'react';
import './ScoreBoard.css';

import { PlayersContext, GameContext } from '../../contexts/DataContext';

export default function ScoreBoard() {
  const [players] = useContext(PlayersContext);
  const [game] = useContext(GameContext);

  function renderScoreBoard() {
    return (
      <div>
        <span>Player 1: {players.one.score}</span>
        <span> </span>
        <span>
          {game.player2isCOM ? 'COM' : 'Player 2'}: {players.two.score}
        </span>
      </div>
    );
  }
  return game.gameStarted ? renderScoreBoard() : <div />;
}
