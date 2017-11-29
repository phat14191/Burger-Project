import React from 'react';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

import classes from './Toolbar.css';

export default function toolbar(props) {
    return (
        <div>
            <header className={classes.Toolbar}>
                <DrawerToggle clicked={props.drawerToggleClicked}/>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav classesName={classes.DesktopOnly}>
                    <NavigationItems />
                </nav>
            </header>
        </div>
    )
}