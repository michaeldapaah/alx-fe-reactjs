function UserCard({ user }) {
    return (
      <div className="mt-4 p-4 border rounded bg-white">
        <img src={user.avatar_url} alt="Avatar" className="w-16 h-16 rounded-full mb-2" />
        <p className="font-bold">{user.name || user.login}</p>
        <p>Followers: {user.followers}</p>
        <p>Repositories: {user.public_repos}</p>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
          View Profile
        </a>
      </div>
    );
  }
  
  export default UserCard;
  