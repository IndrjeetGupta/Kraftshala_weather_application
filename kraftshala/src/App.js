import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import { useState } from 'react';

function App() {
  const [toggle , setToggle] = useState(false)

  const toggleFun = () =>{
    setToggle(!toggle)
  }

  return (
    <div className="App" style={{backgroundColor : toggle ? "white" : "blue" , height : '200vh'}}>
      <Home toggleFun={toggleFun} toggle={toggle}/>

    </div>
  );
}

export default App;


