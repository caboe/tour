import React from 'react';
import {render} from 'react-dom';

class Counter extends React.Component {
  render () {
    return <div>Etappe: {this.props.count}
    </div>;
  }
}

export default Counter;
