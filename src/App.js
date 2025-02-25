import Output from './components/Output';
import CalculatorGrid from './components/CalculatorGrid';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="calculator">
      <Output />
      <CalculatorGrid />
    </div>
  )
}

export default App;

