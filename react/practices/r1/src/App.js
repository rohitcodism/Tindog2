import './App.css';

const Person = (props) => {
  return (
    <>
      <h1>Name : {props.name}</h1>
      <h2>Age : {props.age}</h2>
      <h3> Profession : {props.profession}</h3>
    </>
  );
};

const App = ()=> {
  return (
    <div className="App">
      <Person name = {'Rohit'} age={'19'} profession = {'He is a coder.'} />
      <Person name = {'Payel'} age = {'24'} profession = {'She is a house-wife.'}/>
    </div>
  );
}

export default App;
