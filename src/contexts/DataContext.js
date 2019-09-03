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
  cardsFlipped: [],
  gameStarted: false
};

export const PlayersContext = createContext(currentPlayers);
export const GameContext = createContext(gameInfo);

export default function DataContext({ children }) {
  const [players, setPlayers] = useState(currentPlayers);
  const [gameData, setGame] = useState(gameInfo);

  function setPlayer2(isCOM) {
    const data = gameData;
    data.player2isCOM = isCOM;
    setGame(data);
  }

  function setPlayerColors(color) {
    const player = currentPlayers;
    if (color === 'red') {
      player.one.color = 'red';
      player.two.color = 'blue';
    } else {
      player.one.color = 'blue';
      player.two.color = 'red';
    }
    setPlayers(player);
  }

  function startGame() {
    const data = gameData;
    data.gameStarted = true;
    setGame(data);
    console.log('Game started');
  }

  // function flipAllCards() {
  //   const data = gameData;
  //   console.log(data.allCardsFlipped);
  //   data.allCardsFlipped = false;
  //   setGame(data);
  //   console.log(gameData.allCardsFlipped);
  // }

  // function setPlayerTurn() {}
  // function setPairsLeft() {}
  // function setFlipsLeft() {}
  // function setCardsFlipped() {}

  const game = { setPlayer2, setPlayerColors, startGame };

  return (
    <PlayersContext.Provider value={[players, setPlayers]}>
      <GameContext.Provider value={[gameData, game]}>
        {children}
      </GameContext.Provider>
    </PlayersContext.Provider>
  );
}
