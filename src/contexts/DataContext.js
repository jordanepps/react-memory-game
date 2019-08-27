import React, { useState, createContext } from 'react';

const currentPlayers = {
  one: { color: null, score: 0 },
  two: { color: null, score: 0 }
};

const gameInfo = {
  flipsLeft: 2,
  player1Turn: true,
  player2isCOM: false,
  pairsLeft: 9,
  cardsFlipped: []
};

export const PlayersContext = createContext(currentPlayers);
export const GameContext = createContext(gameInfo);

export default function DataContext({ children }) {
  const [players, setPlayers] = useState(currentPlayers);
  const [gameData, setGame] = useState(gameInfo);
  const [player2IsComp, setPlayer2IsComp] = useState(false);

  function setPlayer2(isCOM) {
    setPlayer2IsComp(isCOM);
  }

  // function setPlayerTurn() {}
  // function setPairsLeft() {}
  // function setFlipsLeft() {}
  // function setCardsFlipped() {}

  const game = { setPlayer2 };

  return (
    <PlayersContext.Provider value={[players, setPlayers]}>
      <GameContext.Provider value={[gameData, game]}>
        {children}
      </GameContext.Provider>
    </PlayersContext.Provider>
  );
}
