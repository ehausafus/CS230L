import logo from './logo.svg';
import './App.css';
import Card from './Card.js';
import NavBar from './Navbar.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>CS 230L</h1>
      <h2>Section - 001</h2>
      <p>WVU ID: 800354906</p>
      <p>Hi I am Elizabeth Hausafus</p>
      <Card />
    </div>
  );
}

export default App;
