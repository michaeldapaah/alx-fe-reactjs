import { useState } from "react";
import fetchUserData from "../services/githubService";


function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    const data = await fetchUserData(username, location, minRepos);
    
    if (data && data.items.length > 0) {
      setUsers(data.items);
    } else {
      setError("Looks like we cant find the user");
    }

    setLoading(false);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg w-full max-w-md">
      <h2 className="text-xl font-bold mb-4 text-center">GitHub User Search</h2>
      <form onSubmit={handleSearch} className="space-y-3">
        {/* Username Input */}
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />

        {/* Location Input */}
        <input
          type="text"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />

        {/* Minimum Repositories Input */}
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Search
        </button>
      </form>

      {/* Show Loading Message */}
      {loading && <p className="text-blue-500 mt-2">Loading...</p>}

      {/* Show Error Message */}
      {error && <p className="text-red-500 mt-2">{error}</p>}

      {/* Display List of Users */}
      {users.length > 0 && (
        <div className="mt-4">
          {users.map((user) => (
            <div key={user.id} className="p-4 border rounded bg-gray-100 mb-2">
              <img
                src={user.avatar_url}
                alt="Avatar"
                className="w-16 h-16 rounded-full"
              />
              <p className="font-bold">{user.login}</p>
              <p>Location: {user.location || "Unknown"}</p>
              <p>Repos: {user.public_repos}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
