import { useState } from "react";
import Dashboard from "./Dashboard";
import Profile from "./Profile";

const sampleUser = {
  profile: {
    name: "Root User",
    email: "root@gmail.com",
  },
  loggedIn: false,
};

function App() {
  const [user, setUser] = useState(sampleUser);

  const toggleLogin = () => {
    setUser({
      ...user,
      loggedIn: !user.loggedIn,
    });
  };

  return (
    <>
      <Profile profile={user.profile} />
      <Dashboard loggedIn={user.loggedIn} toggleLogin={toggleLogin} />
    </>
  );
}

export default App;
