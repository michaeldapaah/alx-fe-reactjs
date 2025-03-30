
import { useState } from "react";
import SearchBar from "./components/Search";
import UserCard from "./components/UserCard";
import fetchUserData from "./services/githubService";

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    setLoading(true);
    setError("");
    setUserData(null);

    const data = await fetchUserData(username);
    
    if (data) {
      setUserData(data);
    } else {
      setError("Looks like we can't find the user");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p className="text-blue-500 mt-2">Loading...</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {userData && <UserCard user={userData} />}
    </div>
  );
}

export default App;
