import React, { useState } from 'react';
import Modal from 'react-modal';
import './App.css';

import Header from '../Header/Header';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import ModalContent from '../ModalContent/ModalContent';
import GameBoard from '../GameBoard/GameBoard';

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

Modal.setAppElement('#root');

export default function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
        <ModalContent closeModal={closeModal} />
      </Modal>
      <GameBoard />
    </div>
  );
}
