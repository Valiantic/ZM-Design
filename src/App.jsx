import { useState } from 'react';
import './index.css';
import React from 'react';
import Navbar from './components/NavbarBlock/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';

function App() {
  return (
    <Router>
      {/* Include Navbar here if you want it on all pages */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;  // Don't forget to export!