import { useContext } from "react"; // Import useContext
import UserContext from "./UserContext"; // Import UserContext

function UserProfile() {
  const userData = useContext(UserContext); // Use context to get user data

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
