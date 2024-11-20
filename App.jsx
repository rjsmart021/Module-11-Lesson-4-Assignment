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
