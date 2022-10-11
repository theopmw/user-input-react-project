import React from 'react';

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
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
  );
};

export default AddUser;
