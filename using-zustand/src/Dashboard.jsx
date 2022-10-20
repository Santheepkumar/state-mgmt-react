import useUser from "./userStore";

export default function Dashboard() {
  const toggleLogin = useUser((state) => state.toggleLogin);
  const loggedIn = useUser((state) => state.loggedIn);
  return (
    <>
      <div>{loggedIn ? "User Logged In" : "User Logged Off"}</div>
      <button onClick={toggleLogin}>{loggedIn ? "Logout" : "Login"}</button>
    </>
  );
}
