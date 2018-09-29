import React from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

import './Menu.css';

export const Menu = (props) => {
    return (
        <header>
            <ul id="menu_container">
                <li><Link to={`/home`}>Home</Link></li>
                <li><Link to={`/topics`}>Topics</Link></li>
                <li><img src={logo} className="App-logo" alt="logo" /></li>
            </ul>
        </header>   
    )
}
