import * as React from 'react';
import './style.css';

export default function Calculator() {
  const [numberOne, setNumberOne] = React.useState('o');
  const [numberTwo, setNumberTwo] = React.useState(0);
  let num1 = 0;
  let num2 = 0;

  return (
    <div className="container">
      <h1>Add with React!</h1>

      <div className="add">
        <input
          type="text"
          onChange={(e) => {
            setNumberOne(e.target.value);
            num1 = parseInt(numberOne);
          }}
        />
        <span>+</span>
        <input
          type="text"
          onChange={(e) => {
            setNumberTwo(e);
          }}
        />
        <span>=</span>
        <h3></h3>
      </div>
    </div>
  );
}
