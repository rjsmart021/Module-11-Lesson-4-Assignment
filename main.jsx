import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
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
