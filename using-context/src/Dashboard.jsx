import { useUser } from "./UserContext";

export default function Dashboard() {
  const { loggedIn, toggleLogin } = useUser();
  return (
    <>
      <div>{loggedIn ? "User Logged In" : "User Logged Off"}</div>
      <button onClick={toggleLogin}>{loggedIn ? "Logout" : "Login"}</button>
    </>
  );
}
