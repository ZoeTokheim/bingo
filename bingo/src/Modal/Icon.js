import React from 'react';
import './Icon.css';

function Icon(props) {
    return (
        <div className="task-icon">
            <i class="icon fa-solid fa-icons fa-2x"></i>
            <i className={`${props.icon} fa-2x`}></i>
        </div>

    );
}

export default Icon;