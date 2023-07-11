import { useState, useReducer } from 'react'


export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button> + </button>
      <span>{ count } </span>
      <button> - </button>
    </>
  );
}