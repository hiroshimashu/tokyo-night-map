import React, { Component } from 'react';
import Map from '../components/Map';
import FirstView from '../components/FirstView';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 0
        }
    }

    changeView = () => {
        this.setState({
                view: 1
        });
    }

    renderView() {
        if(this.state.view === 0) {
            return (
                <FirstView changeView = {this.changeView} />
            )
        } else {
            return (
                <Map />
            )
        }
    }

    render() {
        return (
            <div style ={{ width: window.innerWidth, height: window.innerHeight, color:"#201e1e"}}>
                 { this.renderView() }
            </div>
        );
    }
}

export default App;