import React from 'react';

import classes from './Toolbar.css';

export default function toolbar(props) {
    return (
        <div>
            <header className={classes.Toolbar}>
                <div>MENU</div>
                <div>LOGO</div>
                <nav>
                    ...
                </nav>
            </header>
        </div>
    )
}