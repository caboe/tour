import React from 'react';
import {render} from 'react-dom';
import Etap from './view/stage/Etap.jsx';
import Page from './view/Page.jsx';
import Navigation from './view/Navigation.jsx';
import pages from './model/pages.js'

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            currentPage: 0
        }
        this.state.etap = pages.etap[this.state.currentPage];
        this.next = this.next.bind(this);
    }

    next(){
        let newPage = this.state.currentPage + 1;
        this.setState({
            currentPage: newPage,
            etap: pages.etap[newPage]
        });
    }

    render() {
        return <div>
            <Navigation nextCallback={this.next}/>
            <Page count={this.state.currentPage}/>
            <div onClick={this.next}>Next</div>
        </div>;
    }
}

render(<App/>, document.getElementById('app'));
