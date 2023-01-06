import React, { useState, Fragment } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  // Function to append new user to previous users list
  const addUserHandler = (uName, uAge) => {
    // call setUsersList and update the state by taking the old list and appending a new element to it
    setUsersList((prevUsersList) => {
      // Return a new array that pulls all users from the prevUsersList using the spread operator and adds them to the new array and adds a new element at the end of the array using a JS object which has a name field that stores uName as the value, an age field that stores uAge as the value and an id field that generates a unique id for each user created
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    // Depending on your build setup the Fragment element can be replaced by '<React.Fragment></React.Fragment>' (if fragment is not imported when React is imported) or '<></>'. Since Fragment has been imported the '<Fragment></Fragment>' element has been used in this instance.
    <Fragment>
      {/* Block for getting the user data */}
      {/* addUserHandler is passed to the onAddUser prop on the AddUser component*/}
      <AddUser onAddUser={addUserHandler} />
      {/* Forward usersList to the UsersList component */}
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
