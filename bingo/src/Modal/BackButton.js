import React from 'react';
import './Modal.css';

function BackButton(props) {
    return (
        <div onClick={props.closeModal} className="back">
            <i className="fa-solid fa-x fa-xl"></i>
        </div>
    );
}

export default BackButton;