import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (

    <header>
        <ul>
            <li>
                <a href="/">Home</a>

            </li>
            <li>
                <a href="/classes">Classes</a>
            </li>
            <li>
                <a href="/schedule">Schedule</a>
            </li>
            <li>
                <a href="/account">Account</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>

            <li>
                <a href="/tutorial">Tutorial</a>
            </li>
        </ul>
    </header>
);

export default Header;