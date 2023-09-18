import React from 'react';
import ReactModal from 'react-modal';
import './Modal.css';

function Modal(props) {
  return (
    <ReactModal
      isOpen={props.isOpen}
      backdrop="static"
      ariaHideApp={false}
      onRequestClose={props.onClose}
    >
        <h2>Description</h2>
        <p>{props.description}</p>
        <label>
          Completed?
          <input
            type="checkbox"
            checked={props.completed}
            onChange={props.onCompletedChange}
          />
        </label>
        <button className="close" onClick={props.onClose}>Close</button>
    </ReactModal>
  );
}

export default Modal;
