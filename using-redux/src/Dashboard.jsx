import { useDispatch, useSelector } from "react-redux";
import { toggleLogin } from "./slices/userSlice";

export default function Dashboard() {
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const dispatch = useDispatch();
  return (
    <>
      <div>{loggedIn ? "User Logged In" : "User Logged Off"}</div>
      <button onClick={() => dispatch(toggleLogin())}>
        {loggedIn ? "Logout" : "Login"}
      </button>
    </>
  );
}
