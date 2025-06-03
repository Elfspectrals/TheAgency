import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hitman from './Hitman';
import Home from './Home';
import './index.css';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/hitman" element={<Hitman />} />
    </Routes>
  );
};

export default App;
