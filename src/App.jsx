import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Assignment1 from './components/parent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Assignment1 />
    </>
  )
}

export default App
