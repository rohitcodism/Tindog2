import React, { useState, useReducer } from 'react';

const Actions = {
  new_todo : 'add-todo'
}

function reducer ( state, action ){

}

const App = ()=> {
  const [todo, dispatch] = useReducer( reducer, [])
  const [name, setName] = useState(' ')

  function handleSubmit(e){
    dispatch({ type: Actions.new_todo } )
    setName('')
  }

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit()}
      >
      <input type="text" value={name} onChange={e => setName(e.target.value)}  />
      </form>
    </>
  );
};

export default App;