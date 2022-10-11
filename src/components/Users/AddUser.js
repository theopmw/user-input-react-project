import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  // Starting state will be an empty string as will be manging one piece of state for each input
  // useState always returns an array with 2 elements
  // [enteredUsername, setEnteredUsername] is a JS syntax called array destructuring. This syntax pulls the elements out of the array returned by useState and stores them in separate contstants ('enteredUsername' & 'setEnteredUsername')
  // enteredUsername is the current state snapshot, every time the AddUser component re-renders (eg when the state is updated) enteredUsername will hold the latest state snapshot
  // setEnteredUsername holds a function we can call to change the enteredUsername state to trigger a re-render cycle
  // The exact same sequence is then repeated for the age input
  const [enteredUsername, setEnteredUsername] = useState();
  const [enteredAge, setEnteredAge] = useState();

  // usernameChangeHandler function that is triggered on every keystroke of the username input
  const usernameChangeHandler = (event) => {
    // Call setEnteredUsername and set it to what the user has currently entered using the (event) object to access the target of the event (which is the input element) and the value property of the input to get the currently entered value
    setEnteredUsername(event.target.value);
  };

  // ageChangeHandler function that is triggered on every keystroke of the username input
  const ageChangeHandler = (event) => {
    // Call setEnteredAge and set it to what the user has currently entered using the (event) object to access the target of the event (which is the input element) and the value property of the input to get the currently entered value
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
    // Set state snapshots to empty strings
    setEnteredUsername('');
    setEnteredAge('');
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        {/* Username label and input */}
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          // Set enteredUsername to an empty string when the form is submitted (the addUserHandler function is complete)
          value={enteredUsername}
          // Bind usernameChangeHandler function to the username input using the onChange prop which ties this to the change event listener (event) in the usernameChangeHandler function. The usernameChangeHandler function will be triggered for every keystroke in the username input element
          onChange={usernameChangeHandler}
        ></input>
        {/* Age label and input */}
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          // Set enteredAge to an empty string when the form is submitted (the addUserHandler function is complete)
          value={enteredAge}
          // Bind ageChangeHandler function to the username input using the onChange prop which ties this to the change event listener (event) in the ageChangeHandler function. The ageChangeHandler function will be triggered for every keystroke in the age input element
          onChange={ageChangeHandler}
        ></input>
        {/* Submit button */}
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
