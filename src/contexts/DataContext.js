import React, { useState } from 'react';

const currentPlayers = {
  one: { color: null, score: 0 },
  two: { color: null, score: 0 }
};

const gameData = {
  flipsLeft: 2,
  player1Turn: true,
  player2isCOM: false,
  pairsLeft: 9,
  cardsFlipped: []
};

export const PlayersContext = React.createContext(currentPlayers);
export const GameContext = React.createContext(gameData);

export default function DataContext({ children }) {
  const [players, setPlayers] = useState(currentPlayers);
  const [game, setGame] = useState(gameData);

  return (
    <PlayersContext.Provider value={[players, setPlayers]}>
      <GameContext.Provider value={[game, setGame]}>
        {children}
      </GameContext.Provider>
    </PlayersContext.Provider>
  );
}
