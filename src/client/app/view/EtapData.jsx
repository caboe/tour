import React from 'react';
import {render} from 'react-dom';

class EtapData extends React.Component {
    constructor(data){
        super();
        this.distance = data.distance;
    }

  render () {
    return <div>Strecke: {this.distance}
    </div>;
  }
}

export default EtapData;
