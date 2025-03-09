import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

const PostsComponent = () => {
  const { data: posts, error, isLoading, refetch } = useQuery('posts', fetchPosts);

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error fetching posts: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {posts.map(post => (
          <li key={post.id}><strong>{post.title}</strong>: {post.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
