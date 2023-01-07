import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  // useRef takes a default value you want to initialise it to and returns a value that allows you to work with that ref later (the element which it is connected to)
  // Ref values are output as an object which has a 'current' prop and the current prop holds the actual value the ref is connected with
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // Starting state will be an empty string as will be manging one piece of state for each input
  // useState always returns an array with 2 elements
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    // Check if enteredUsername/enteredAge is empty (an empty string)
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      // Call setError and set it to an object
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)',
      });
      return;
    }
    // Check if enteredAge is smaller than one
    // force conversion of entered age (entered on the form as a string) to a number by adding the preceding '+'
    if (+enteredUserAge < 1) {
      // Call setError and set it to an object
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0)',
      });
      return;
    }
    // Call props.onAddUser and execute as a function as the value returned on the prop is a function (addUserHandler in App.js is a function)
    // Forwards 2 pieces of data (enteredUsername & enteredAge) to the App component on every click of the 'Add User' button
    props.onAddUser(enteredName, enteredUserAge);
    // Logic to clear form after submission
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  // Function to set setError to a falsy value (eg null)
  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
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
            // Add ref prop to connect the ref to the HTML element (often used for inputs to fetch input data)
            ref={nameInputRef}
          ></input>
          {/* Age label and input */}
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // Add ref prop to connect the ref to the HTML element (often used for inputs to fetch input data)
            ref={ageInputRef}
          ></input>
          {/* Submit button */}
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
