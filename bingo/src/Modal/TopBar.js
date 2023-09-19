import React from 'react';
import BackButton from './BackButton';
import './Modal.css';

function TopBar(props) {
    return (
        <div className="top-bar">
            <BackButton
                closeModal={props.closeModal}
            />
            <div className="task-name">
                {props.taskName}
            </div>
            <div
                className="star"
            />

        </div>
    );
}

export default TopBar;
