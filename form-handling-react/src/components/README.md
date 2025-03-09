## **React Query Project**  

**Project Overview**  
This project demonstrates how to use **React Query** for efficient data fetching, caching, and state management in a React application. The app fetches posts from an API and allows users to refetch data on demand.

---

**Project Structure**  
```
form-handling-react/
src/
components/
 ReactQueryDemo.jsx  # React Query data fetching component
 formikForm.jsx      # Formik form example
 App.jsx                 # Main app component
 main.jsx                # Entry point with QueryClientProvider
 README.md                   # Documentation
 package.json                 # Dependencies
 vite.config.js               # Vite configuration
```

---

**Getting Started**  

 **1. Install Dependencies**  
Run the following command to install required packages:  
```sh
npm install
```
**2. Install React Query**  
Ensure **React Query** is installed:  
```sh
npm install @tanstack/react-query
```

**3. Run the Development Server**  
Start the app with:  
```sh
npm run dev
```
Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

**React Query Setup**  

 **1. Configure React Query in `main.jsx`**  
Ensure `QueryClientProvider` is set up in `main.jsx`:  
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
```

**2. Create a Data Fetching Component (`ReactQueryDemo.jsx`)**  
This component fetches posts using **React Query** and allows manual refetching.  
```jsx
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
```

**3. Use the Component in `App.jsx`**  
```jsx
import ReactQueryDemo from "./components/ReactQueryDemo";

function App() {
  return (
    <div>
      <h1>React Query Demo</h1>
      <ReactQueryDemo />
    </div>
  );
}

export default App;
```

---

**React Query Features Demonstrated**  
\u2705 **Data Fetching** \u2013 Retrieves data from an API.  
\u2705 **Caching** \u2013 Stores fetched data for **5 seconds** before refetching.  
\u2705 **Refetching** \u2013 Users can click a button to manually refresh data.  

---

**Troubleshooting**  

**React Query Import Error**  
> `"Failed to resolve import "react-query""`  
\u2705 **Solution:** Ensure `@tanstack/react-query` is installed using:  
```sh
npm install @tanstack/react-query
```

**Vite Import Issue with JSX**  
> `"Failed to parse source for import analysis"`  
\u2705 **Solution:** Ensure your components use the `.jsx` extension, not `.js`.

**Vite Hot Reload Not Working**  
> `"HMR Overlay Shows Error"`  
\u2705 **Solution:** Restart Vite server:  
```sh
npm run dev
```

---

**License**  
This project is open-source under the **MIT License**.  
