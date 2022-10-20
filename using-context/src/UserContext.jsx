import { useContext } from "react";
import { createContext, useState } from "react";

const UserContect = createContext();

export const useUser = () => useContext(UserContect);

const sampleUser = {
  profile: {
    name: "Root User",
    email: "root@gmail.com",
  },
  loggedIn: false,
};

function UserProvider({ children }) {
  const [user, setUser] = useState(sampleUser);

  const toggleLogin = () => {
    setUser({
      ...user,
      loggedIn: !user.loggedIn,
    });
  };

  const data = {
    user,
    loggedIn: user.loggedIn,
  };

  const methods = {
    toggleLogin,
  };

  return (
    <UserContect.Provider
      value={{
        ...data,
        ...methods,
      }}>
      {children}
    </UserContect.Provider>
  );
}

export default UserProvider;
