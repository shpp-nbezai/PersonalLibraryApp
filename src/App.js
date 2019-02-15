import React, { Component } from 'react';
import './App.css';
import Navbar from './component/layout/Navbar';
import BookMain from './component/BookMain';
import connect from "react-redux/es/connect/connect";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './component/auth/SignIn';
import SignUp from './component/auth/SignUp';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="flex-container">
                    <Navbar/>
                    <Switch>
                        <Route exact path='/' component={ BookMain }/>
                        <Route path='/signin' component={ SignIn }/>
                        <Route path='/signup' component={ SignUp }/>
                    </Switch>
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
