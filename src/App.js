
import React from 'react';
import Avatar from './Avatar';


function App() {
  const data =[
    {size:"s",type:"sqaure"},
    {size:"s",type:"rounded"},
    {size:"s",type:"circle"},
    {size:"m",type:"sqaure"},
    {size:"m",type:"rounded"},
    {size:"m",type:"circle"},
    {size:"l",type:"sqaure"},
    {size:"l",type:"rounded"},
    {size:"l",type:"circle"},
    {size:"xl",type:"sqaure"},
    {size:"xl",type:"rounded"},
    {size:"xl",type:"circle"}
  ]
  return (
    <div className="App">
      <div style={{"display":"flex","flexWrap":"wrap"}}> 
      {data.map(item=>{
        return (
          <Avatar size={item.size} type={item.type}/>
        )
      })}


      </div>
    </div>
  );
}


export default App;