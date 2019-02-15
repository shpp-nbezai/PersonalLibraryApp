import React from 'react';
import { NavLink }from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <div className="navbar-links">
            <NavLink to='/signup' className='button is-dark'>Signup</NavLink>
            <NavLink to='/signin' className='button is-dark'>Login</NavLink>
        </div>
    );
};

export default SignedOutLinks;
