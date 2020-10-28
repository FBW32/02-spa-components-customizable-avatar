
import React from 'react';
import Avatar from './Avatar';
import myimage from "./img/1.jpg"



function App() {

  let data = [
    {size: "s", type:"square", url:"https://picsum.photos/400/400"},
    {size: "s", type:"rounded", url:"https://picsum.photos/400/400"},
    {size: "s", type:"circle", url:"https://picsum.photos/400/400"},
    {size: "m", type:"square", url:"https://picsum.photos/400/400"},
    {size: "m", type:"rounded", url:"https://picsum.photos/400/400"},
    {size: "m", type:"circle", url:"https://picsum.photos/400/400"},
    {size: "l", type:"square", url:"https://picsum.photos/400/400"},
    {size: "l", type:"rounded", url:"https://picsum.photos/400/400"},
    {size: "l", type:"circle", url:"https://picsum.photos/400/400"},
    {size: "xl", type:"square", url:"https://picsum.photos/400/400"},
    {size: "xl", type:"rounded", url:"https://picsum.photos/400/400"},
    {size: "xl", type:"circle", url:"https://picsum.photos/400/400"},
  ]
  
  return (
    <div className="App"  >
    

<div style={{display: "flex", flexWrap: "wrap"}}>
   {data.map((item)=> {
     return (
       <Avatar url={item.url} size={item.size} type={item.type} />
     )
   })}
</div>

    </div>
      )}
    
  


export default App;