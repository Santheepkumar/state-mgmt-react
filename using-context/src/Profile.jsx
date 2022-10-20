import { useUser } from "./UserContext";

export default function Profile() {
  const {
    user: { profile },
  } = useUser();
  return (
    <div>
      <div>{profile.name}</div>
      <div>{profile.email}</div>
    </div>
  );
}
