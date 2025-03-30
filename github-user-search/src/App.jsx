import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import fetchUserData from "./services/githubService";

function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    setError("");
    const data = await fetchUserData(username);
    if (data) {
      setUserData(data);
    } else {
      setError("User not found or API error");
      setUserData(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {userData && <UserCard user={userData} />}
    </div>
  );
}

export default App;
