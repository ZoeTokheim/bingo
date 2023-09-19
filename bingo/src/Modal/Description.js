import React, { } from 'react';
import './Description.css';

function Description(props) {
    return (
        <div className="description">
            <i className={`${props.icon} icon fa-2x`}></i>
            {props.text}
        </div>

    );
}

export default Description;