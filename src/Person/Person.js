import React from 'react';
import styled from 'styled-components';

// import Radium, {StyleRoot}  from 'radium';

const StyleDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    
    @media (min-width: 500px) {
        width: 400px;
    }
`;

const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '60%'
    //     }
    // }
    return (
        // <StyleRoot>
        <StyleDiv>
            {/* <div className="Person"> */}
            <p onClick={props.click}> I am {props.name} and I am {props.age} years old !!. My Lucky number is {Math.floor(Math.random() * 30 )} </p>
            <p>{props.children}</p>  {/* props.children will  display messages within Person tag */}
            <input type="text" onChange={props.changeHandler} value={props.name}></input>
            {/* </div> */}
        </StyleDiv>
        //</StyleRoot>
    )
}

// export default Radium(person);
export default person;