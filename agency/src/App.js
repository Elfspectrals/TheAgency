import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hitman from './Hitman';
import Home from './Home';
import Header from './Header'; // make sure this import is correct
import './index.css';
import AboutUs from './About';

const App = () => {
  return (
    <>
      <Header /> {/* Displayed on every route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hitman" element={<Hitman />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
};

export default App;
