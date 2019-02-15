import React from 'react';
import { NavLink }from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <div className="navbar-links">
            <NavLink to='/' className="button is-dark">Log Out</NavLink>
        </div>
    );
};

export default SignedInLinks;
