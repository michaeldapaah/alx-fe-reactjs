import axios from "axios";

const API_URL = "https://api.github.com/search/users?q=";
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY; // \u2705 Keep this

const fetchUsers = async (username, location, minRepos) => {
  try {
    let query = username ? `${username} in:login` : "";

    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>${minRepos}`;

    const response = await axios.get(`${API_URL}${query}`, {
      headers: {
        Authorization: `token ${API_KEY}`, // \u2705 Add the API Key
      },
    });

    return response.data;
  } catch (error) {
    return null; // \u2705 Ensures a failed request returns null
  }
};

export default fetchUsers;
