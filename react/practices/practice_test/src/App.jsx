import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button> - </button>
      <span className='mx-auto text-4xl'>0</span>
      <button> + </button>
    </>
  )
}

export default App
