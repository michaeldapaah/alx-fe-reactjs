import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";

// \u2705 Create a QueryClient instance
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  // \u2705 Wrap the App component with QueryClientProvider
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
