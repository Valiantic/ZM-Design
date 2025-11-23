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
      <div className="w-full min-h-screen">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;  // Don't forget to export!