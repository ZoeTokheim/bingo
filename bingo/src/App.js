import React, { useState } from 'react';
import './App.css';
import BingoBoard from './Board/BingoBoard';
import Header from './Header/Header';
import tasks from './Tasks';

function App() {
  const [data, setData] = useState(tasks);

  function editComplete(
    taskId,
    complete,
  ) {
    setData(
      data.map((task) =>
        task.id === taskId
          ? { ...task, complete: complete }
          : task
      )
    );
  }

  function isBingo() {
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
  }
  console.log(isBingo());

  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <BingoBoard
          tasks={data}
          editComplete={editComplete} />
      </div>
    </div>
  );
}

export default App;
