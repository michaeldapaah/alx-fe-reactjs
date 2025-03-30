import { useState } from "react";
import fetchUserData from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
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
    <div className="p-4 bg-white shadow-md rounded-md">
      <form onSubmit={handleSearch} className="flex space-x-2">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded"
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Search
        </button>
      </form>

      {/* Show Loading Message */}
      {loading && <p className="text-blue-500 mt-2">Loading...</p>}

      {/* Show Error Message */}
      {error && <p className="text-red-500 mt-2">{error}</p>}

      {/* Display User Info */}
      {userData && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <img
            src={userData.avatar_url}
            alt="Avatar"
            className="w-16 h-16 rounded-full mb-2"
          />
          <p className="font-bold">{userData.login}</p>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
