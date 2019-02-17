import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from "./store/reducers/booksReducer";

import firebase from 'firebase';

const store = createStore( rootReducer );

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBLOO7RXOL50ZuzOgITs0q7S0DHnfImVhw",
    authDomain: "my-personal-library-app.firebaseapp.com",
    databaseURL: "https://my-personal-library-app.firebaseio.com",
    storageBucket: "my-personal-library-app.appspot.com",
};

firebase.initializeApp(config);

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
