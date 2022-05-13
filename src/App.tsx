import React, { useState } from 'react';
import './App.css';
// import { Child } from './Components/ChildComponent';
// import { SecondChild } from './Components/SecondChild';
// import { Counter } from './Components/Counter';
import { Toggle } from './Components/ToggleComponent';

function App() {
  return (
    <div className='App'>
      <h1 style={{ color: 'green' }}>Hello world</h1>
      {/* <Child name={'Xiang'} age={20} grade={3} /> */}
      {/* <SecondChild /> */}
      {/* <Counter /> */}
      <Toggle />
    </div>
  );
}

export default App;
