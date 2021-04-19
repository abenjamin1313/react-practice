import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UserLists from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((preUsersList) => {
      return [...preUsersList, {name: uName, age: uAge, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserLists users={usersList} />
    </div>
  );
}

export default App;
