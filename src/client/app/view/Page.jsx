import React from 'react';
import {render} from 'react-dom';
import Etap from './stage/Etap.jsx';
import pages from '../model/pages.js'

class Page extends React.Component {
  render () {
    if (this.props.count < pages.etap.length)
        return <Etap count={this.props.count}/>
    else
        return <div>Over</div>
  }
}

export default Page;
