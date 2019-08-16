import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './App.css';

import Header from '../Header/Header';
import ScoreBoard from '../ScoreBoard/ScoreBoard';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

export default function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [player1Color, setPlayer1Color] = useState(null);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="App">
      <Header />
      <ScoreBoard />
      <button onClick={openModal}>Start Game/New Game</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Test Modal"
        closeTimeoutMS={2000}
      >
        test modal
      </Modal>
    </div>
  );
}
