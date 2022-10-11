import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {
  // props.childern will pull the content that is passed between the opening/closing tags of the Card component
  return (
    // Use template literal to merge external class 'className' with internally defined class 'card' so 'className' can be used on the <Card><Card/> component in the AddUser.js file
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
