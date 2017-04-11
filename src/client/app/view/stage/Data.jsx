import React from 'react';
import {render} from 'react-dom';

class Data extends React.Component {
  render () {
    return <div>Strecke: {this.props.etap.distance}
    </div>;
  }
}

export default Data;
