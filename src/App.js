
import React from 'react';
import Avatar from './Avatar';

function App() {

  const data =[
    {size:"S with 30x30",type:"square"},
    {size:"S with 30x30",type:"rounded"},
    {size:"S with 30x30",type:"circle"},
    {size:"M with 60x60",type:"square"},
    {size:"M with 60x60",type:"rounded"},
    {size:"M with 60x60",type:"circle"},
    {size:"L with 120x120",type:"square"},
    {size:"L with 120x120",type:"rounded"},
    {size:"L with 120x120",type:"circle"},
    {size:"XL with 200x200",type:"square"},
    {size:"XL with 200x200",type:"rounded"},
    {size:"XL with 200x200",type:"circle"}
  ]

  return (
    <div className="App">

      <h1>My React App</h1>

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