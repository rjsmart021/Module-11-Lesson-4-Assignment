import './App.css'
import Header from './components/header';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
    <Header ></Header>
    <div className="main-content">
      <About ></About>
      <Contact ></Contact>
    </div>
  </div>
  )
}

export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
