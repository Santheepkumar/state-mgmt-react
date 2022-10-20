import { useSelector } from "react-redux";

export default function Profile() {
  const profile = useSelector((state) => state.user.profile);
  return (
    <div>
      <div>{profile.name}</div>
      <div>{profile.email}</div>
    </div>
  );
}
