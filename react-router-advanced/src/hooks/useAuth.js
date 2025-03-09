// src/hooks/useAuth.js
const useAuth = () => {
    // Simulate user authentication status
    const user = localStorage.getItem("user"); // Get user from localStorage
    return { isAuthenticated: !!user }; // Return authentication status
  };
  
  export default useAuth;
  