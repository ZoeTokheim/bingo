import React, { Fragment } from 'react';
import './BingoSquare.css';
import Modal from '../Modal/Modal';

function BingoSquare(props) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  function toggleComplete() {
    props.editComplete(props.id, !props.complete);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  const onClickSquare = () => {
    openModal();
  };

  return (
    <Fragment>
      <Modal
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        text={props.text}
        description={props.description}
        icon={props.icon}
        complete={props.complete}
        toggleComplete={toggleComplete}
      />
      <div
        className={`bingo-square ${props.complete ? 'completed' : ''}`}
        onClick={onClickSquare} >
        <i className={`${props.icon} fa-3x`}></i>
      </div >
    </Fragment>
  );
}

export default BingoSquare;
