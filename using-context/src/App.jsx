import { useState } from "react";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import UserProvider from "./UserContext";

const sampleUser = {
  profile: {
    name: "Root User",
    email: "root@gmail.com",
  },
  loggedIn: false,
};

function App() {
  return (
    <UserProvider>
      <Profile />
      <Dashboard />
    </UserProvider>
  );
}

export default App;
