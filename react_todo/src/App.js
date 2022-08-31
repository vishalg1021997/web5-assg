import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Left } from './component/left';
import { Right } from './component/right';

function App() {

  const [age, getage] = React.useState(25)

  const increase = () => {
    getage(age + 1)
  }

  const decrease = () => {
    getage(age - 1)
  }

  return (
    <div className="App" style={{ display: "flex" }}>
      <Left incage = {increase} decage = {decrease} age={age}/>
      <Right />
    </div>
  );
}

export default App;
