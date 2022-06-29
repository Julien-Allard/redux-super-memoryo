import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MemoryGame from './Containers/MemoryGame';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MemoryGame />} />
      </Routes>
    </Router>
  );
}

export default App;
