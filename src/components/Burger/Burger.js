import React from 'react';

import classes from './Burger.css';
import BurgerIncredient from './BurgerIngredient/BurgerIngredient';

function Buger(props) {
  return (
    <div className={classes.Burger}>
      <BurgerIncredient type='bread-top' />
      <BurgerIncredient type='cheese' />
      <BurgerIncredient type='meat' />
      <BurgerIncredient type='bread-bottom' />
    </div>
  );
};

export default Buger;
