import React from "react";
import image from "./img/1.jpg";
import "./css/style.css";

export default function Avatar({size,type} ) {

  return (
    <div className="card">
      <div className="image">
        <img className={`${size} ${type}`} src={image} alt="image" />
      </div>
      <div className="content">
        <p>size {size}</p>
        <p>type: {type}</p>
      </div>
    </div>
  );
}
