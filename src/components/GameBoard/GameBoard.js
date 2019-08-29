import React, { useContext } from 'react';
import './GameBoard.css';

import Card from '../Card/Card';
import { GameContext } from '../../contexts/DataContext';

export default function GameBoard() {
  const [gameData] = useContext(GameContext);

  function renderGameBoard() {
    return (
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
  return gameData.gameStarted ? renderGameBoard() : <div />;
}
