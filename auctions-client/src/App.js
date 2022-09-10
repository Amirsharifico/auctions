import './App.css';
import axios from 'axios';
import {useEffect} from 'react';

function App() {

useEffect(()=>{
  axios.get("http://localhost:3002/auctions").then((response)=>{
    console.log(response);
  })
}, [])


  return  <div className="App"></div>
   
     
    
  
}

export default App;
