import React, { useState } from 'react';
import './BingoSquare.css';
import Modal from '../Modal/Modal';

function BingoSquare(props) {
  const [completed, setCompleted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleCompleted = () => {
    setCompleted(!completed);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`bingo-square ${completed ? 'completed' : ''}`} onClick={openModal}>
      {props.text}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        description={props.text}
        completed={completed}
        onCompletedChange={toggleCompleted}
      />
    </div>
  );
}

export default BingoSquare;
