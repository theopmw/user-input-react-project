import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  // Starting state will be an empty string as will be manging one piece of state for each input
  // useState always returns an array with 2 elements
  // [enteredUsername, setEnteredUsername] is a JS syntax called array destructuring. This syntax pulls the elements out of the array returned by useState and stores them in separate contstants ('enteredUsername' & 'setEnteredUsername')
  // enteredUsername is the current state snapshot, every time the AddUser component re-renders (eg when the state is updated) enteredUsername will hold the latest state snapshot
  // setEnteredUsername holds a function we can call to change the enteredUsername state to trigger a re-render cycle
  // The exact same sequence is then repeated for the age input
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

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
    // Check if enteredUsername/enteredAge is empty (an empty string)
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      // Call setError and set it to an object
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)',
      });
      return;
    }
    // Check if enteredAge is smaller than one
    // force conversion of entered age (entered on the form as a string) to a number by adding the preceding '+'
    if (+enteredAge < 1) {
      // Call setError and set it to an object
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0)',
      });
      return;
    }
    // Call props.onAddUser and execute as a function as the value returned on the prop is a function (addUserHandler in App.js is a function)
    // Forwards 2 pieces of data (enteredUsername & enteredAge) to the App component on every click of the 'Add User' button
    props.onAddUser(enteredUsername, enteredAge);
    // Set state snapshots to empty strings
    setEnteredUsername('');
    setEnteredAge('');
  };

  // Function to set setError to a falsy value (eg null)
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
    </div>
  );
};

export default AddUser;
