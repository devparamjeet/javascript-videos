import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (e) => {
    setInput(input + e.target.value);
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const clearInput = () => {
    setInput('');
  };

  return (
    <div>
      <input type="text" value={input} />
      <br />
      <button onClick={handleClick} value="1">
        1
      </button>
      <button onClick={handleClick} value="2">
        2
      </button>
      <button onClick={handleClick} value="3">
        3
      </button>
      <button onClick={handleClick} value="+">
        +
      </button>
      <br />
      <button onClick={handleClick} value="4">
        4
      </button>
      <button onClick={handleClick} value="5">
        5
      </button>
      <button onClick={handleClick} value="6">
        6
      </button>
      <button onClick={handleClick} value="-">
        -
      </button>
      <br />
      <button onClick={handleClick} value="7">
        7
      </button>
      <button onClick={handleClick} value="8">
        8
      </button>
      <button onClick={handleClick} value="9">
        9
      </button>
      <button onClick={handleClick} value="*">
        *
      </button>
      <br />
      <button onClick={handleClick} value=".">
        .
      </button>
      <button onClick={handleClick} value="0">
        0
      </button>
      <button onClick={calculateResult}>=</button>
      <button onClick={handleClick} value="/">
        /
      </button>
      <br />
      <button onClick={clearInput}>Clear</button>
    </div>
  );
}

export default Calculator;
