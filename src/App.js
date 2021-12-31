import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
      </Routes>
    </div>
  );
}

export default App;
