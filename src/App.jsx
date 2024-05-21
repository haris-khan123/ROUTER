import { useState } from 'react'
import './App.css'
import Profile from './Profile'
import Profiles from './Profiles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Profile/>
      <Profiles/>
    </>
  )
}

export default App
