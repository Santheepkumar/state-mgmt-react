export default function Dashboard({ loggedIn, toggleLogin }) {
  return (
    <>
      <div>{loggedIn ? "User Logged In" : "User Logged Off"}</div>
      <button onClick={toggleLogin}>{loggedIn ? "Logout" : "Login"}</button>
    </>
  );
}
