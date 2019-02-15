import React, { Component } from 'react';

class SignUp extends Component{
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    render() {
        return (
            <form onSubmit={ this.handleSubmit } className="container column is-4 is-centered">
                <h4 className="title is-3 has-text-centered has-text-grey-dark">Sign Up</h4>
                <div className="field">
                    <p className="control has-icons-left has-icons-right">
                        <input
                            className="input"
                            type="email"
                            placeholder="Email"
                            id="email"
                            onChange={ this.handleChange }
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                        </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control has-icons-left">
                        <input
                            className="input"
                            type="password"
                            placeholder="Password"
                            id="password"
                            onChange={ this.handleChange }
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control has-icons-left">
                        <input
                            className="input"
                            type="text"
                            placeholder="first name"
                            id="firstName"
                            onChange={ this.handleChange }
                        />
                    </p>
                </div>
                <div className="field">
                    <p className="control has-icons-left">
                        <input
                            className="input"
                            type="text"
                            placeholder="second name"
                            id="secondName"
                            onChange={ this.handleChange }
                        />
                    </p>
                </div>
                <div className="field">
                    <p className="control">
                        <button className="button is-dark is-fullwidth">
                            Login
                        </button>
                    </p>
                </div>
            </form>
        )
    }
}

export default SignUp;