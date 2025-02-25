import React from 'react';
import './App.css';

function App() {
  return (
    <div className="calculator">
      <div className="output">
        <div className="previous-operand">3123</div>
        <div className="current-operand">213</div>
      </div>
      <button className='button2'>AC</button>
      <button className='button'>DEL</button>
      <button className='button'>+</button>
      <button className='button'>1</button>
      <button className='button'>2</button>
      <button className='button'>3</button>
      <button className='button'>*</button>
      <button className='button'>4</button>
      <button className='button'>5</button>
      <button className='button'>6</button>
      <button className='button'>+</button>
      <button className='button'>7</button>
      <button className='button'>8</button>
      <button className='button'>9</button>
      <button className='button'>-</button>
      <button className='button'>.</button>
      <button className='button'>0</button>
      <button className='button2'>=</button>
    </div>
  )
}

export default App;

