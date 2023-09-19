import React from 'react';
import './App.css';
import BingoBoard from './Board/BingoBoard';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <BingoBoard />
      </div>
    </div>
  );
}

export default App;
