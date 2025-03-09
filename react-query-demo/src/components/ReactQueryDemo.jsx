import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};

const ReactQueryDemo = () => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 5000, // Caches data for 5 seconds
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Data</button>
      <ul>
        {data.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReactQueryDemo;
