import React from 'react';

const test = (props) => {
    return (
    <div>
    <h1>This component is working! and btw this is a random number {Math.floor(Math.random()*100)} {props.testProps}</h1>
    <p>{props.children}</p>
    </div>
    )
};

export default test;

