// import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RegistrationForm from './components/RegistrationForm'
import FormikForm from './components/formikForm'
import './App.css'
// import { useQuery } from "@tanstack/react-query";
import PostsComponent from './components/react-query-demo';

function App() {
  const [count, setCount] = useState(0);
  const queryClient = new QueryClient();

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
      <FormikForm />
      <RegistrationForm />

    </>
  );
}

export default App;
