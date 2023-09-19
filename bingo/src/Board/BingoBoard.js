import React, { Fragment } from 'react';
import './BingoBoard.css';
import BingoSquare from './BingoSquare';

function BingoBoard(props) {

  // bingo
  return (
    <Fragment>
      <div className="bingo-board">
        {props.tasks.map((item, index) => (
          <BingoSquare
            key={index}
            text={item.text}
            description={item.description}
            icon={item.icon}
            complete={item.complete}
            id={item.id}
            editComplete={props.editComplete}
          />
        ))}
      </div>
    </Fragment>
  );
}

export default BingoBoard;
