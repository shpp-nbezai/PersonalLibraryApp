import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = () => {
    return (
        <section className="hero is-dark">
            <div className="hero-body">
                <div className="container level">
                    <h1 className="title level-left">
                        <Link to='/' className="logo level-left">Library Logo</Link>
                    </h1>
                    <div className="level-right buttons">
                        <SignedOutLinks/>
                        <SignedInLinks/>
                        <NavLink to='/' className="button is-link navbar-user-icon">NB</NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
