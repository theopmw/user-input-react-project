import React from 'react';

import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        {/* Username label and input */}
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
        {/* Age label and input */}
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number"></input>
        {/* Submit button */}
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
