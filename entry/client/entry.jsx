import Counter from 'Counter/client/Counter';
import { ReactDOM } from 'react-dom';

Meteor.startup(function() {
  ReactDOM.render({
    <Counter />,
    document.getElementById('root')
  })
})
