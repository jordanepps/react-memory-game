import React from 'react';
import './ModalContent.css';

export default function ModalContent({ game, setGame, players, setPlayers }) {
  function player2Select(player) {}

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
          onChange={player2Select(false)}
        />
        <label htmlFor="human">Player vs Player</label>
        <input
          type="radio"
          name="player-count"
          value="com"
          id="com"
          onChange={player2Select(true)}
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
