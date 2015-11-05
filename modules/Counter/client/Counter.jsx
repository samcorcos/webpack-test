import { Component, PropTypes } from 'react';

let counter = 0;

export default class Counter extends Component {
  addToCounter() {
    counter += 1;
  },
  render() {
    return (
      <div>
        <button>Click Me</button>
        <p>You've pressed the button {counter} times.</p>
      </div>
    )
  }
}
