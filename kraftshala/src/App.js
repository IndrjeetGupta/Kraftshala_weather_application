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
    <div className="App" style={{backgroundColor : toggle ? "white" : "blue" , height : '100vh'}}>
      <Home toggleFun={toggleFun} toggle={toggle}/>

    </div>
  );
}

export default App;

//https://api.openweathermap.org/data/2.5/weather?q=london&appid=58dd7367d80d378561ca0e8befa43a20
