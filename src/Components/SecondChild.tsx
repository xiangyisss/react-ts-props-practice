import React, { useState } from 'react';

export const SecondChild = () => {
  const Myfunction = (x: number, y: number, z: number, b: number) => {
    console.log(x + y + z + b);
  };
  const args = [2, 3] as const;
  Myfunction(1, ...args, 4);

  return (
    <div>
      <p>This is second child component.</p>
    </div>
  );
};
