import React from 'react';
import {render} from 'react-dom';
import Etap from './view/Etap.jsx';

class App extends React.Component {
    constructor(){
        super();
        this.etap = pageData["12"];
    }
  render () {
    return <div>
        <p> Hello React!</p>
        <Etap etap={this.etap.data}/>
    </div>;
  }
}

render(<App/>, document.getElementById('app'));
