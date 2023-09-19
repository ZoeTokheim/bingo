import React, { Fragment } from 'react';
import './BingoBoard.css';
import BingoSquare from './BingoSquare';
import Modal from '../Modal/Modal';
import tasks from '../Tasks';

function BingoBoard() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [currTask, setCurrTask] = React.useState("");
  const [currDescription, setCurrDescription] = React.useState("");
  const [currIcon, setCurrIcon] = React.useState("");

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  // bingo
  return (
    <Fragment>
      <Modal
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        text={currTask}
        description={currDescription}
        icon={currIcon}
      />
      <div className="bingo-board">
        {tasks.map((item, index) => (
          <BingoSquare
            key={index}
            text={item.text}
            description={item.description}
            icon={item.icon}
            setCurrTask={setCurrTask}
            setCurrDescription={setCurrDescription}
            setCurrIcon={setCurrIcon}
            openModal={openModal}
          />
        ))}
      </div>
    </Fragment>
  );
}

export default BingoBoard;
