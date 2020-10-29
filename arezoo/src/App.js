import React from "react";
import Avatar from "./Avatar";

function App() {
  const data = [
    { size: "s", type: "rounded" },
    { size: "s", type: "rounded" },
    { size: "s", type: "rounded" },
    { size: "s", type: "rounded" },
    { size: "m", type: "circle" },
    { size: "m", type: "cicle" },
    { size: "l", type: "sqaure" },
    { size: "l", type: "sqaure" },
    { size: "xl", type: "rounded" },
    { size: "xl", type: "rounded" },
  ];
  return (
    <div className="App">
      <h1>My React App</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((item) => {
          return <Avatar size={item.size} type={item.type} />;
        })}
      </div>
    </div>
  );
}

export default App;
