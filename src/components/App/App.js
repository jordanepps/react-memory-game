import React, { useState } from 'react';
import Modal from 'react-modal';
import './App.css';

import Header from '../Header/Header';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import StartBtn from '../StartBtn/StartBtn';
import ModalContent from '../ModalContent/ModalContent';
import GameBoard from '../GameBoard/GameBoard';

Modal.setAppElement('#root');

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
      <StartBtn openModal={openModal} />
      <GameBoard />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Test Modal"
        closeTimeoutMS={2000}
      >
        <ModalContent closeModal={closeModal} />
      </Modal>
    </div>
  );
}
