import React, { useState } from "react";
import AddUser from "./Users/AddUser";
import UserList from "./Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </>
  );
}

export default App;
