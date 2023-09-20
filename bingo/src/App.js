import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import BingoBoard from './Board/BingoBoard';
import Header from './Header/Header';
import tasks from './Tasks';
import Confetti from 'react-confetti';

function App() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem('tasks')) || tasks
  );
  const [isBingoAchieved, setIsBingoAchieved] = useState(false);

  function editComplete(taskId, complete) {
    setData(
      data.map((task) =>
        task.id === taskId
          ? { ...task, complete: complete }
          : task
      )
    );
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(data));
  }, [data]);

  const isBingo = useCallback(() => {
    // Create a 5x5 grid to keep track of completed tasks.
    const grid = Array(5).fill().map(() => Array(5).fill(false));

    // Mark completed tasks on the grid.
    for (const task of data) {
      if (task.complete) {
        const id = task.id;
        const row = Math.floor((id - 1) / 5);
        const col = (id - 1) % 5;
        grid[row][col] = true;
      }
    }

    // Check for a bingo in rows, columns, and diagonals.
    for (let i = 0; i < 5; i++) {
      // Check rows
      if (grid[i].every(cell => cell === true)) {
        return true;
      }

      // Check columns
      if (grid.every(row => row[i] === true)) {
        return true;
      }
    }

    // Check diagonals
    if (grid[0][0] && grid[1][1] && grid[2][2] && grid[3][3] && grid[4][4]) {
      return true;
    }

    if (grid[0][4] && grid[1][3] && grid[2][2] && grid[3][1] && grid[4][0]) {
      return true;
    }

    // If no bingo is found, return false.
    return false;
  }, [data]);

  useEffect(() => {
    // Check for bingo logic
    const bingoAchieved = isBingo();
    setIsBingoAchieved(bingoAchieved);

    // Automatically hide the confetti after 5 seconds if bingo is achieved
    if (bingoAchieved) {
      const timeoutId = setTimeout(() => {
        setIsBingoAchieved(false);
      }, 5000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [data, isBingo]);

  return (
    <div className="App">
      <Header />
      {isBingoAchieved && (
        <Confetti
          numberOfPieces={200}
          recycle={false}
        />
      )}
      <div className="app-content">
        <BingoBoard
          tasks={data}
          editComplete={editComplete}
        />
      </div>
    </div>
  );
}

export default App;
