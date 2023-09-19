import React from 'react';
import './Modal.css';

function BackButton(props) {
    return (
        <div onClick={props.closeModal} className="back">
            <i class="fa-solid fa-x fa-xl"></i>
        </div>
    );
}

export default BackButton;