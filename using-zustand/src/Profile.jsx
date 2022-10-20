import useUser from "./userStore";

export default function Profile({}) {
  const profile = useUser((state) => state.profile);
  return (
    <div>
      <div>{profile.name}</div>
      <div>{profile.email}</div>
    </div>
  );
}
