import { useParams } from "react-router-dom";

function UserProfile() {
  const { userId } = useParams();
  return <h2>Viewing Profile of User ID: {userId}</h2>;
}

export default UserProfile;
