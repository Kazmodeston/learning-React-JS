import React,{useState} from 'react';
import "./App.css"
function App(){

  // isRed is the actual variable name, while setRed is the function whenever we want to change the value of isRed
 const [isGreen, setGreen] = useState(false);
 const [count, setCount] = useState(0);

 const increment = () =>{
  setCount(count+1);
  setGreen(!isGreen)
 }

  return (
  <div className="app">
    <h2 className={isGreen ? 'green':'black'}>Change Color to Green</h2>
     <button className="buttonEvent" onClick={increment}>Increment</button>
     <h2>{count}</h2>
  </div>

  );
}

export default App;