import './App.css';
let name = "Rohit"
function App() {
  return (
    <>
      <nav className='flex-col text-red-500'>
        <li>Home</li>
        <li>About</li>
        <li className='fl'>Contact</li>
        </nav>
        <h1>Hello It's {name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, modi deserunt iste odit nostrum nulla explicabo minus suscipit eveniet corporis error impedit voluptate quas expedita, quod sit molestias! Aliquam, sequi perspiciatis vel ducimus, delectus atque repellendus tenetur earum corporis nemo molestias corrupti non! Consectetur delectus distinctio ex earum pariatur, minus ducimus reprehenderit sequi quia animi at. Sed aut iste pariatur.</p>
        <input type="password" />
    </>
  );
}

export default App;
