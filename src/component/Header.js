import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header has-background-light is-marginless">
                <div className="container level">
                    <div className="level-left">
                        <h1>Logo</h1>
                    </div>
                    <div className="level-right">
                        <div className="user">
                            <p>user@email.com</p>
                        </div>
                        <div className="auth">
                            <button className="button is-link">Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
