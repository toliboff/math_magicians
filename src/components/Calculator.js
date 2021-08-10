/*eslint-disable */
import React, { useState } from 'react';
import calculate from '../logic/calculator.js';
import operate from '../logic/operate.js';

const Calculator = (props) => {
  const [obj, setObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const result = calculate(obj, e.target.name, operate);
    setObj({...obj, ...result});
  }

    const buttonsArray=['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
    return (
      <div className='Calculator'>
        <p className = 'result'>{(obj.total || '') + (obj.operation || '') + (obj.next || '')}</p>
        <div className='buttons'>
          {buttonsArray.map((btn) =><button key={btn} onClick={(e)=>handleClick(e)} name={btn}>{btn}</button>)}
        </div>
        
      </div>
    )
}

export default Calculator;