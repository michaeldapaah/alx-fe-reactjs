import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};

function PostsComponent() {
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    cacheTime: 1000 * 60 * 5, // \u2705 Cache data for 5 minutes
    staleTime: 1000 * 60, // \u2705 Data is fresh for 1 minute before becoming stale
    refetchOnWindowFocus: false, // \u2705 Prevent automatic refetch when user switches tabs
    keepPreviousData: true, // \u2705 Show old data while fetching new data
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching posts</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Posts</button> {/* \u2705 Demonstrates refetch */}
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
