import React, { Children } from 'react';

interface PersonalInfo {
  name: string;
  middleName?: string;
  grade: number;
  age: number;
  className?: string;
  style?: object;
}
export const Child = ({ name, ...props }: PersonalInfo) => {
  console.log('This is props', props);
  const { middleName = 'Happy', grade, age, style, className } = props;
  return (
    <div className={className}>
      <p>This is props practice component</p>
      <p style={style}>
        Hello, My name is {name}, middle name is {middleName}, {age} years old,
        Now I'm in grade {grade} .
      </p>
    </div>
  );
};
