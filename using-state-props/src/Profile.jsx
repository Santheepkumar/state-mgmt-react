export default function Profile({ profile }) {
  return (
    <div>
      <div>{profile.name}</div>
      <div>{profile.email}</div>
    </div>
  );
}
