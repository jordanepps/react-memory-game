import React from 'react';
import './ModalContent.css';

export default function ModalContent({
  gameData,
  game,
  players,
  setPlayers,
  closeModal
}) {
  function player2Select(e) {
    let playerIsCOM;
    if (e.target) {
      if (e.target.value === 'human') {
        playerIsCOM = false;
      } else {
        playerIsCOM = true;
      }
    }
    game.setPlayer2(playerIsCOM);
  }

  function playerColorSelect(e) {
    game.setPlayerColors(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    closeModal();
    game.startGame();
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset id="player-count">
        <h2>Select the amount of players</h2>
        <input
          type="radio"
          name="player-count"
          value="human"
          id="human"
          onChange={e => player2Select(e)}
          required
        />
        <label htmlFor="human">Player vs Player</label>
        <input
          type="radio"
          name="player-count"
          value="com"
          id="com"
          onChange={e => player2Select(e)}
          required
        />
        <label htmlFor="com">Player vs COM</label>
      </fieldset>

      <fieldset id="player-color">
        <h2>Player 1, choose a color</h2>
        <input
          type="radio"
          name="player-color"
          value="red"
          id="red"
          onChange={e => playerColorSelect(e)}
          required
        />
        <label htmlFor="red">Red</label>
        <input
          type="radio"
          name="player-color"
          value="blue"
          id="blue"
          onChange={e => playerColorSelect(e)}
          required
        />
        <label htmlFor="blue">Blue</label>
      </fieldset>
      <div>
        <button type="submit">Start</button>
      </div>
    </form>
  );
}
