import React,{useState}from 'react'
import './Style.css'

function App() {
  const [inputlist,setinputlist]=useState("");
  const [item,setitem]=useState([]);

  function itemevt (event)
  {
     setinputlist(event.target.value)
  }

  const listof=()=>{
    setitem((olditem)=> {
      return [...olditem,inputlist];

    })
  };
  return (
    <>
      <div className="main_div">
        <div className="cantener-div">
          <br/>
          <h1 className="todo">Todo list</h1>
          <br/>
          <input type="text" placeholder="ADD TO ITEM" className="input" onChange={itemevt}></input>
          <button onClick={listof} >ADD-ON</button>

        <ol>
        
          {item.map((itemvalu)=>{
               return<li>{itemvalu}</li>
          }) }
        </ol>
        </div>
      </div>
    </>
  )
}

export default App

