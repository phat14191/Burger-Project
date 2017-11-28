import React from 'react';

import Aux from '../../hoc/Aux.js'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';


function Layout(props) {
  return (
    <Aux>
      <Toolbar />
      <div>Toolbar, Sidedrawe, Backdrop</div>
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  )
}

export default Layout;
