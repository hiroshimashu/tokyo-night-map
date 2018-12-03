import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import 'semantic-ui-css/semantic.min.css';

const store = createStore(() => [], {}, applyMiddleware());

ReactDOM.render(
    <Provider store = { store }><Main /></Provider>, 
    document.getElementById('root')
);
