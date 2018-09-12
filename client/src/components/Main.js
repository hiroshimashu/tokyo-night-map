import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import App from '../components/app';
import DataForm from '../components/DataForm';


// Need to add access control to dataform in the future
class Main extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className =  "container">
                        <Route exact path = "/" component = { App } />
                        <Route exact path = "/dataform" component = { DataForm } />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default Main;