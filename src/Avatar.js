import React from "react";
import image from "./img/1.jpg";
import "./css/style.css";

export default function Avatar(props) {
  console.log(props)
  return (
    // className(s) from .css
    // image className from ./img/1.jpg

    <div className="card" >

      <div className="content">
        <img className={` ${props.size} ${props.type}`} src={image} alt="piccies"></img>

      </div>

      <div className="content">
        <div >size: {props.size} </div>
      </div>

      <div className="content">
        <div >type: {props.type} </div>
      </div>
    </div>
  )
}
