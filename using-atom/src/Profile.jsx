import { useAtom } from "jotai";
import { userAtom } from "./userAtom";

export default function Profile() {
  const [{ profile, loggedIn }, setUser] = useAtom(userAtom);
  return (
    <div>
      <div>{loggedIn.toString()} from profile</div>
      <div>{profile.name}</div>
      <div>{profile.email}</div>
    </div>
  );
}
