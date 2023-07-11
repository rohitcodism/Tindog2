import { useState, useReducer } from 'react';
import './App.css';

const Actions = {
  New_todo : "add_todo"
}

function reducer( state, action ){

}

function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [ name, setName ] = useState('')

  function handleSubmit(e){
    
  }


  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit()} className='border-solid border-black flex-row'>
        <input type="text" value={name} onChange={e=>setName(e.target.value)} className='border-solid border-black justify-center align-middle mt-48' />
      </form>
    </div>
  );
}

export default App;
