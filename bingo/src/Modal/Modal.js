import React from 'react';
import ReactModal from 'react-modal';
import './Modal.css';
import TopBar from './TopBar'
import Description from './Description'
import Complete from './Complete'

function Modal(props) {

  ReactModal.setAppElement(document.getElementById('root'));

  return (
    <ReactModal
      isOpen={props.isModalOpen}
      onRequestClose={props.closeModal}
      contentLabel="Bingo Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <TopBar
        closeModal={props.closeModal}
        taskName={props.text}
      />
      <div className="modal-content">
        <Description
          icon={props.icon}
          text={props.description} />
        <Complete
          complete={props.complete}
          toggleComplete={props.toggleComplete} />
      </div>
    </ReactModal >
  );
}

export default Modal;
