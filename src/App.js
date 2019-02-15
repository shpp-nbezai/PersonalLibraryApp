import React, { Component } from 'react';
import './App.css';
import Navbar from './component/layout/Navbar';
import BookMain from './component/BookMain';
import connect from "react-redux/es/connect/connect";
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="flex-container">
                    <Navbar/>
                    <BookMain/>
                </div>
            </BrowserRouter>
        );
    }
}

const putStateToProps = ( state ) => {
    return {
    }
};

const putActionsToProps = ( dispatch ) => {
    return {
    }
};

export default connect( putStateToProps, putActionsToProps )( App );
