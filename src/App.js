import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import CarList from './components/CarList';
import cars from './data/cars';

function App() {
  return (
    <Router> {/* Wrap your App component with BrowserRouter */}
      <div className="App">
        <h1>Car Search Website</h1>
        <CarList cars={cars} />
      </div>
    </Router>
  );
}

export default App;
