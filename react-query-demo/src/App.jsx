import PostsComponent from "./components/PostsComponent";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

  const queryClient = new QueryClient();

  function App() {
    return (
      <div>
      <h1>React Query Demo</h1>
      {/* <ReactQueryDemo /> */}
      <QueryClientProvider client={queryClient}>
        <PostsComponent />
      </QueryClientProvider>
      </div>
    );
  }


export default App;
