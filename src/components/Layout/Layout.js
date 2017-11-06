import React from 'react';
import Aux from '../../hoc/Aux.js'
import classes from './Layout.css'

function Layout(props) {
  return (
    <Aux>
      <div>Toolbar, Sidedrawe, Backdrop</div>
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  )
}

export default Layout;
