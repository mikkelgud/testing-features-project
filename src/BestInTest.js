import React from 'react';
import "./BestInTest.css";


const test = (props) => {
    return (
    <div  className="Test">
    <h1 onClick={props.clicked}>This component is working! and btw this is a random number {Math.floor(Math.random()*100)} {props.testProps}</h1>
    <p>{props.children}</p>
    {/* <input type="text" onChange={props.changed}/> */}
    </div>
    )
};

export default test;

