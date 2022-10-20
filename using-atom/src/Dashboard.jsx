import { useAtom } from "jotai";
import { userAtom } from "./userAtom";

export default function Dashboard() {
  const [{ loggedIn }, setUser] = useAtom(userAtom);
  
  const toggleLogin = () => {
    setUser((state) => ({
      ...state,
      loggedIn: !state.loggedIn,
    }));
  };
  return (
    <>
      <div>{loggedIn ? "User Logged In" : "User Logged Off"}</div>
      <button onClick={toggleLogin}>{loggedIn ? "Logout" : "Login"}</button>
    </>
  );
}
