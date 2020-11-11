import React from 'react';

const person = (props) => {
return (
        <div className="Person">
        <p onClick={props.click}> I am {props.name} and I am {props.age} years old !!. My Lucky number is {Math.floor(Math.random() * 30 )} </p>
        <p>{props.children}</p>  {/* props.children will  display messages within Person tag */}
        <input type="text" onChange={props.changeHandler} value={props.name}></input>
        </div>
    )
}

export default person;