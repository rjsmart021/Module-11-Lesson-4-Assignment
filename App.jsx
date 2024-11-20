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
function App() {
    return (
        <>
            <BrowserRouter>
                <div
                    style={{
                        display: "flex",
                        background: "black",
                        padding: "5px 0 5px 5px",
                        fontSize: "20px",
                    }}
                >
                    <div style={{ margin: "10px" }}>
                        <NavLink
                            to="/"
                            style={({ isActive }) => ({
                                color: isActive
                                    ? "greenyellow"
                                    : "white",
                            })}
                        >
                            Home
                        </NavLink>
                    </div>
                    <div style={{ margin: "10px" }}>
                        <NavLink
                            to="/about"
                            style={({ isActive }) => ({
                                color: isActive
                                    ? "greenyellow"
                                    : "white",
                            })}
                        >
                            About
                        </NavLink>
                    </div>
                    <div style={{ margin: "10px" }}>
                        <NavLink
                            to="/contact"
                            style={({ isActive }) => ({
                                color: isActive
                                    ? "greenyellow"
                                    : "white",
                            })}
                        >
                            Contact
                        </NavLink>
                    </div>
                </div>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        exact
                        path="/BrowseCharacters"
                        element={<BrowseCharacters />}
                    />
                    <Route
                        exact
                        path="/Comics"
                        element={<Comics />}
                
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
export default App;
