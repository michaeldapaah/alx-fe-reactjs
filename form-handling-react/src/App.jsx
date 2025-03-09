import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RegistrationForm from './components/RegistrationForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RegistrationForm />
    </>
  )
}

export default App
