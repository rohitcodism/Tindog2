import { useState, useReducer } from 'react'
import './App.css'
import './index.css'

function reducer ( state, action ) {
  
}

function App() {
  const [state, dispatch ] = useReducer(reducer, {count: 0})
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
