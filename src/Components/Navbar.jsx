import React from 'react';
import logo from '../assets/collab-logo.png'
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <div>
                <img src={logo} alt="" />
            </div>

            <div>
                <Link></Link>
            </div>
        </div>
    );
};

export default Navbar;