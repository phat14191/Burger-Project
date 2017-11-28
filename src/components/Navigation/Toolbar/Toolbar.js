import React from 'react';
import Logo from '../../Logo/Logo'

import classes from './Toolbar.css';

export default function toolbar(props) {
    return (
        <div>
            <header className={classes.Toolbar}>
                <div>MENU</div>
                <Logo />
                <nav>
                    ...
                </nav>
            </header>
        </div>
    )
}