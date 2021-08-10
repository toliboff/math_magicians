/*eslint-disable */
import React, { Component } from 'react';
import calculate from '../logic/calculator.js';
import operate from '../logic/operate.js';
class Calculator extends Component {
  constructor(props){
    super();
    this.state={obj:{
      total: null,
      next: null,
      operation: null,
    },
    result:'',
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    const result = calculate(this.state.obj, e.target.name, operate);
    this.setState({obj: {...this.state.obj, ...result}});
  }

  render() {
    const buttonsArray=['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
    return (
      <div className='Calculator'>
        <p className = 'result'>{(this.state.obj.total || '') + (this.state.obj.operation || '') + (this.state.obj.next || '')}</p>
        <div className='buttons'>
          {buttonsArray.map((btn) =><button key={btn} onClick={(e)=>this.handleClick(e)} name={btn}>{btn}</button>)}
        </div>
        
      </div>
    )
  }
}

export default Calculator;