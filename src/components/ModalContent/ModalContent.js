import React from 'react';
import './ModalContent.css';

export default function ModalContent({ gameData, game, players, setPlayers }) {
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

  function handleSubmit(e) {
    e.preventDefault();
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
        />
        <label htmlFor="human">Player vs Player</label>
        <input
          type="radio"
          name="player-count"
          value="com"
          id="com"
          onChange={e => player2Select(e)}
        />
        <label htmlFor="com">Player vs COM</label>
      </fieldset>

      <fieldset id="player-color">
        <h2>Player 1, choose a color</h2>
        <input type="radio" name="player-color" value="red" id="red" />
        <label htmlFor="red">Red</label>
        <input type="radio" name="player-color" value="blue" id="blue" />
        <label htmlFor="blue">Blue</label>
      </fieldset>
      <div>
        <button type="submit">Start</button>
      </div>
    </form>
  );
}
