import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import UserProfile from './components/UserProfile'
import { useState } from 'react'
import ProfilePage from './components/ProfilePage'
import UserContext from './UserContext'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const userData = {name: "Jane Doe", email: "jane.doe@example.com"};

  return (
    <>
      <div>

        <WelcomeMessage />
        <Header />
        <MainContent />
        <UserContext.Provider value={userData}>
        
          <UserProfile />
          <ProfilePage />

        </UserContext.Provider>
        <Footer />
      </div>  
    </ >
  )
  
};

export default App;
