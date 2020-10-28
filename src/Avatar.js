import React from "react";
import image from "./img/1.jpg";
import "./css/style.css";

export default function Avatar({size="s" , type="sqaure"} ) {

/* const {size="s" , type="sqaure"}= props */
  return (
    <div className="card">
      <div className="image">
        <img className={`${size} ${type}`} src={image} alt="image" />
      </div>
      <div className="content">
        <p className={`${size}`}>size {size}</p>
        <p className={`${size}`}>type : {type}</p>
      </div>
    </div>
  );
}
