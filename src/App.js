import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import BookMain from './component/BookMain';
import connect from "react-redux/es/connect/connect";

class App extends Component {

    render() {
        return (
            <div className="flex-container">
                <Header/>
                <BookMain/>
            </div>
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
