import React from 'react';

const style= {
    backgroundColor: 'black',
    width: '15rem',
    height: '1.3rem',
    margin: '19px 0 0 0',
    border: '1px solid blue',
    fontSize: '115%',
    color: 'white'
}

const smartInput =(props)=> {
   return <input type="text" onChange={props.changed} style={style}/>
}

export default smartInput;