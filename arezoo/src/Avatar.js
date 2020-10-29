import React from "react";
import pic from "./img/1.jpg";
import "./css/style.css";

export default function Avatar({ size = "m", type = "sqaure" }) {
  return (
    <div className="card">
      <div className="image">
        <img className={`${size} ${type}`} src={pic} alt="pic" />
      </div>
      <div className="content">
        <p>
          size is: <p className="p-inline"> {size}</p>
          <p>with </p>
        </p>
        <p>
          type is: <p className="p-inline">{type}</p>
        </p>
      </div>
    </div>
  );
}
