import React from 'react';
import {render} from 'react-dom';
import EtapData from './EtapData.jsx';

class Etap extends React.Component {
    constructor(data){
        super();
        this.data = data.etap;
    }

  render () {
    return <div>
    <p> Etap!</p>
    <EtapData distance={this.data.distance}/>
    </div>;
  }
}

export default Etap;
