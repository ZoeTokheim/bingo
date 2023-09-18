import React from 'react';
import ReactModal from 'react-modal';
import './Modal.css';

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
      <button onClick={props.closeModal}>close</button>
      <div>I am a modal</div>
      <form>
        <input />
        <button>tab navigation</button>
        <button>stays</button>
        <button>inside</button>
        <button>the modal</button>
      </form>
    </ReactModal>
  );
}

export default Modal;
