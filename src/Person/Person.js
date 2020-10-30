import React from 'react';

const person = (props) => {
return (
        <div>
        <p> I am {props.name} and I am {props.age} years old !!. My Lucky number is {Math.floor(Math.random() * 30 )} </p>
        <p>{props.children}</p>  {/* props.children will  display messages within Person tag */}
        </div>
    )
}

export default person;