import React, { useState } from 'react';
import calculate from '../logic/calculator';
import operate from '../logic/operate';

const Calculator = () => {
  const [obj, setObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    try {
      const result = calculate(obj, e.target.name, operate);
      setObj({ ...obj, ...result });
    } catch (error) {
      setObj({ ...obj });
    }
  };

  const buttonsArray = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
  return (
    <div className="Calculator">
      <p className="result">{(obj.total || '') + (obj.operation || '') + (obj.next || '')}</p>
      <div className="buttons">
        {buttonsArray.map((btn) => <button type="button" key={btn} onClick={(e) => handleClick(e)} name={btn}>{btn}</button>)}
      </div>

    </div>
  );
};

export default Calculator;
