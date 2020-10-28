
import React from 'react';
import Avatar from './Avatar';

function App() {
  const data = [
    // ROUNDED
    { size: "s", type: "rounded" },
    { size: "m", type: "rounded" },
    { size: "l", type: "rounded" },
    { size: "xl", type: "rounded" },

    // CIRCLE
    { size: "s", type: "circle" },
    { size: "m", type: "circle" },
    { size: "l", type: "circle" },
    { size: "xl", type: "circle" },

    // SQUARE
    { size: "s", type: "square" },
    { size: "m", type: "square" },
    { size: "l", type: "square" },
    { size: "xl", type: "square" }
  ]
  return (
    <div className="App">
      <h1>My React App</h1>
      <div style={{ "display": "flex", "flexWrap": "wrap" }} >
        {data.map(item => {
          return (
            <Avatar size={item.size} type={item.type} />
          )
        })}
      </div>
    </div>
  );
}


export default App;