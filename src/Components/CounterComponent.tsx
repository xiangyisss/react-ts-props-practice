import React, { useEffect, useState } from 'react';

export const Counter = () => {
  const [number, setNumber] = useState(0);
  const inc = () => setNumber((n) => n + 1);
  const dec = () => setNumber((n) => n - 1);
  const times2 = number * 2;
  console.log('number', number);

  useEffect(() => {
    // const interval = setInterval(inc, 1000);
    console.log('Number is changing', number + 1);
  }, []);

  return (
    <div>
      <p>This is counter component</p>
      <button onClick={inc}>+</button>
      <p>{number}</p>
      <p>
        {number}*2 = {times2}
      </p>
      <button onClick={dec}>+</button>
    </div>
  );
};
