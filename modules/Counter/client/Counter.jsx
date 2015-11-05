import { Component, PropTypes } from 'react';

export default class Counter extends Component {
  render() {
    return (
      <div>
        <button>Click Me</button>
        <p>You've pressed the button 0 times.</p>
      </div>
    )
  }
}
