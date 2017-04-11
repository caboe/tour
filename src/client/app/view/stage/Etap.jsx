import React from 'react';
import {render} from 'react-dom';
import Counter from './Counter.jsx';
import Data from './Data.jsx';
import pages from '../../model/pages.js'

class Etap extends React.Component {
  render () {
    return <div>
            <Counter count={this.props.count}/>
            <Data etap={pages.etap[this.props.count]}/>
        </div>
  }
}

export default Etap;
