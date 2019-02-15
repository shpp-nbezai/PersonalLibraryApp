import React from 'react';
import { NavLink }from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <div className="navbar-links">
            <NavLink to='/' className='button is-info'>Signup</NavLink>
            <NavLink to='/' className='button is-info'>Login</NavLink>
        </div>
    );
};

export default SignedOutLinks;
