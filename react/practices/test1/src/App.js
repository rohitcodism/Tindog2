import { useState, useReducer } from 'react';
import './App.css';

const Actions = {
  New_todo : "add_todo"
}

function reducer( state, action ){
  switch(action.type){
    case 'Actions.New_todo':
      // eslint-disable-next-line no-undef
      return[...todos, newTodo(action.payload.name)]
      break;

    default:
      console.log("its default")
  }
}

function newTodo(){
  // eslint-disable-next-line no-restricted-globals
  return { id: Date.now(), name: name, complete: false }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [ name, setName ] = useState('')

  function handleSubmit(e){
    dispatch({type: Actions.New_todo, payload: {name: name}})
    setName('')
  }

  console.log(todos);

  return (
    <div className="App w-full h-screen flex">
      <form action="" onSubmit={()=>handleSubmit()} className='justify-center align-middle border-solid border-black'>
        <input type="text" value={name} onChange={e=>setName(e.target.value)} className='border-solid border-black justify-center align-middle mt-48 ' />
      </form>
    </div>
  );
}

export default App;
