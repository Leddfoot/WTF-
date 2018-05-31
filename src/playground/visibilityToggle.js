//NOTE: TO TEST ME COMMENT OUT APP.JS AND PASTE ME IN IN ENTIRETY

import React from 'react';
import ReactDOM from 'react-dom';

class ToggleVisibility extends React.Component {
  constructor(props) {
    super(props);
    this.handleVisibility = this.handleVisibility.bind(this)
    this.state = {
      visible: false,
      name: 'who cares',
      title: 'the book no one will ever read'
    };
  }

  handleVisibility() {
    this.setState((prevState)=> {
              return {
              visible: !prevState.visible
              };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleVisibility}>Toggle Me Whoopee!</button>
        <ol>
          {
            this.state.visible ? <p>{this.state.title}</p> : ''
          }
        </ol>
      </div>

    );
  }
}

ReactDOM.render(<ToggleVisibility />, document.getElementById('app'));
