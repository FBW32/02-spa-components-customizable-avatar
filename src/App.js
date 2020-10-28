
import React from 'react';
import Avatar from './Avatar';

function App() {
  const data =[
    {size:"s",type:"rounded"},
    {size:"s",type:"rounded"},
    {size:"l",type:"sqaure"},
    {size:"m",type:"cicle"},
    {size:"xl",type:"rounded"},
    {size:"s",type:"rounded"},
    {size:"s",type:"rounded"},
    {size:"l",type:"sqaure"},
    {size:"m",type:"cicle"},
    {size:"xl",type:"rounded"}
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







      {/* <Avatar size="s" type="circle"/>
      <Avatar size="l" type="rounded"/>
      <Avatar />
      <Avatar size="l" type="rounded"/>
      <Avatar />
      <Avatar size="l" type="rounded"/>
      <Avatar /> */}

      </div>
    </div>
  );
}


export default App;