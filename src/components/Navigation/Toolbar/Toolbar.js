import React from 'react';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';

import classes from './Toolbar.css';

export default function toolbar(props) {
    return (
        <div>
            <header className={classes.Toolbar}>
                <div>MENU</div>
                <Logo />
                <nav>
                    <NavigationItems />
                </nav>
            </header>
        </div>
    )
}