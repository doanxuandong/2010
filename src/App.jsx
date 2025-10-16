import { useState } from 'react'
import './App.css'
import Splash from './pages/Splash'
import Celebration from './pages/Celebration'

function App() {
  const [entered, setEntered] = useState(false)
  return entered ? <Celebration /> : <Splash onEnter={() => setEntered(true)} />
}

export default App
