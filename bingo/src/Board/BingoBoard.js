import React from 'react';
import './BingoBoard.css';
import BingoSquare from './BingoSquare';

function BingoBoard() {
  // Sample text for each square, you can replace these with your own ideas
  const bingoItems = [
    'Visit a local cafe',
    'Attend a community event',
    'Take a city tour',
    'Join a language exchange',
    'Visit a museum',
    'Try the local cuisine',
    'Explore a park',
    'Attend a live music event',
    'Join a sports club',
    'Attend a cultural festival',
    'Take a dance class',
    'Visit a historical site',
    'Join a photography club',
    'Attend a meetup group',
    'Volunteer in the community',
    'Join a local sports game',
    'Attend a cooking class',
    'Explore a local market',
    'Join a book club',
    'Visit a nearby beach',
    'Join a local sports game',
    'Attend a cooking class',
    'Explore a local market',
    'Join a book club',
    'Visit a nearby beach'

  ];

  return (
    <div className="bingo-board">
        {bingoItems.map((item, index) => (
            <BingoSquare key={index} text={item} />
        ))}
    </div>
  );
}

export default BingoBoard;
