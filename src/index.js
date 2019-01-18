import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { rootReduser } from "./store/reducers";

const store = createStore( rootReduser );

ReactDOM.render(
    <Provider store={ store }>
        <App/>
    </Provider>
    , document.getElementById('root')
);

// If you wax`nt your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
