import React, { useState } from 'react';
import './App.css';
import { Child } from './Components/ChildComponent';

function App() {
  return (
    <div className='App'>
      <h1 style={{ color: 'blue' }}>Hello world</h1>
      <Child name={'Xiang'} age={20} grade={3} />
    </div>
  );
}

export default App;
