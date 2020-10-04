import React,{useState} from 'react';
import "./App.css"
import TweetComponent from './TweetComponent'

function App(){

  const [users,setUsers] = useState([
    
    {name:"Damilare", message:"You influenced me on React", likes:3},
    {name:"Janet", message:"She is a good teacher", likes:5},
    {name:"Tijani", message:"He is smart and eager to learn", likes:7}

  ]);
  
  return (
  <div className="app">
{users.map(user=>(
  <TweetComponent name={user.name} message={user.message} likes={user.likes} />
))}
  </div>

  );
}

export default App;