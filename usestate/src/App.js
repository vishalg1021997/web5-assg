import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Increment } from './Components/increment';

function App() {
  const [count,changeCount] = React.useState(0)

  const decrease = () =>{
    changeCount(count -1 )
  }

  const double = () =>{
    changeCount(count * 2 )
  }

  const increment = () =>{
    changeCount(count + 1)
  }
  return (
    <div className="App">
      {count % 2 === 0 ? <h1 style={{color:"red"}}>Count {count}</h1>:<h1 style={{color:"green"}}>Count {count}</h1>}
      
      <Increment value = {increment}/>

      <button onClick={decrease}>Decrement</button>
      <button onClick={double}>Double</button>
    </div>
  );
}

export default App;
