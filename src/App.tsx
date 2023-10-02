import React from 'react';
import './App.css';
import { Router, Routes, Route } from 'react-router-dom';
import Pokemon from './pages/Pokemon';
import Items from './pages/Items';
import Pokemons from './pages/Pokemons';

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Routes>
          <Route path="/" element={<Pokemon />} />
          <Route path="/items" element={<Items/>} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/pokemons/:name" element={<Pokemon />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
