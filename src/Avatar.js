import React from 'react'
import "./css/style.css"

export default function Avatar(props) {
    console.log(props);
    return (
        <div className="card">
            <img src={props.url} alt="pic" className={`${props.size} ${props.type}`} />
            <h3>{props.size}</h3>
            <h3>{props.type} </h3>
        </div>
    )
}
