import React from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  return (
    <div>
      {/* Block for getting the user data */}
      <AddUser />
      {/* Block for outputting the user data and set users prop to empty array */}
      <UsersList users={[]} />
    </div>
  );
}

export default App;
