import React, { useState } from 'react';
import './BingoSquare.css';

function BingoSquare(props) {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = () => {
    setCompleted(!completed);
  };

  const onClickSquare = () => {
    props.setCurrTask(props.text);
    props.setCurrDescription(props.description);
    props.setCurrIcon(props.icon);
    props.openModal();
  };

  return (
    <div
      className={`bingo-square ${completed ? 'completed' : ''}`}
      onClick={onClickSquare}>
      <i className={`${props.icon} fa-3x`}></i>
    </div>
  );
}

export default BingoSquare;
