import React, { Component } from 'react';
import '../firstView.css'

class NeonText extends Component {
    constructor(props) {
        super(props);
        this.timer = null;
    }

    componentDidMount() {
        this.timer = window.setTimeout(this.props.changeView, 3000);
    }

    componentWillUnmount() {
        window.clearTimeout(this.timer);
    }

    render() {
        return (
            <div className="text-wrapper">
                <p className =  "tokyo">
                     TOKYO
                </p>
                <p className = "night">
                    NIGHT MAP
                </p>
            </div>
        )
    }
}

export default NeonText;
