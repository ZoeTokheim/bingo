import React from 'react';
import './Complete.css';

function Complete(props) {
    return (
        <div>
            {props.complete ?
                <div className="completion-bar">
                    <i className="check fa-regular fa-square-check fa-2x" onClick={props.toggleComplete}></i>
                    <p className="completion-text">complete!! :D</p>
                </div>

                :
                <div className="completion-bar">
                    <i className="check fa-regular fa-square fa-2x" onClick={props.toggleComplete}></i>
                    <p className="completion-text">not complete :(</p>
                </div>


            }
        </div >

    );
}

export default Complete;