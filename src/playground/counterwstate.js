//NOTE: TO TEST ME COMMENT OUT APP.JS AND PASTE ME IN IN ENTIRETY

import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  constructor(props) {
    super (props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubtract = this.handleSubtract.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 55
    }
  }

  handleAdd() {
    this.setState((prevState)=> {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleSubtract() {
    this.setState((prevState)=> {
      return {
        count: prevState.count - 1
      };
    });
  }

  handleReset() {
    this.setState(()=> {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAdd}>+1   </button>
        <button onClick={this.handleSubtract}>-1    </button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));



//*******************************************************************************






//
