import './App.css';
import './Person/Person.css';
// import Radium, {StyleRoot} from 'radium'; // for styling
import React, {useState } from 'react';
import Person from './Person/Person';
import styled from 'styled-components';

// FUNCTION BASED COMPONENTS
const App = () => {
  // state arrayconstant will have 2 elements. 
  // first eleemt will always be the current state. 
  // 2nd element will be a function that allow us to update the state
  const [personState, setPersonState] = useState({
        persons: [
          {name: 'Paul', age: 20},
          {name: 'PJoe', age: 25},
          {name: 'Joe', age: 26},
        ],
        otherState: 'test',
        showOthers: false,
  });

  // a string testState
  const [testState, setTestState] = useState('Test State');

  console.log(personState, testState);

  //update person state and testState on button click
  const swtichNameHandler = (username) => { 
    console.log("button clicked");
    // this.state.persons[0].name = "PJOE George" ==> DONT Do this
    // setPersonState will replace personState array
    setPersonState({
      persons: [
        {name: username, age: 20},
        {name: 'PJoe', age: 25},
        {name: 'Joe', age: 27},
      ],
      otherState: personState.otherState,
      showOthers: true,
    })

    setTestState('Updated Test State');
  }

  const nameChangeHandler = (event, index) => {
    let personsList = [...personState.persons]
    const personToBeUpdated = {...personState.persons[index]}
    personToBeUpdated.name = event.target.value;
    personsList[index] = personToBeUpdated

    setPersonState({
      persons: personsList,
      otherState: 'test',
      showOthers: true,
    })
    // setPersonState({
    //   persons: [
    //     {name: event.target.value, age: 20},
    //     {name: 'PJoe', age: 25},
    //     {name: 'Joe', age: 27},
    //   ],
    //   otherState: 'test',
    //   showOthers: true,
    // })
  }

  // const buttonStyle = {
  //   backgroundColor: 'green',
  //   color: 'white',
  //   font: 'inherit',
  //   border: '1x solid blue',
  //   padding: '8px',
  //   cursor: 'pointer',
  //   ':hover':{
  //     backgroundColor: 'lightgreen',
  //     color: 'black'
  //   }
  // }

  const ButtonStyle = styled.button`
    background-color: ${props => props.alt ? 'green' : 'red'};
    color: white;
    font: inherit;
    border: 1x solid blue;
    padding: 8px;
    cursor: pointer;
    
    &:hover {
      backgroundColor: lightgreen;
      color: black;
    }
  `

  const PersonListToggleHandler = () => {
    // update show others status
    const currentShowPersonStatus = personState.showOthers;
    setPersonState({
      persons: [
        {name: 'Paul', age: 20},
        {name: 'PJoe', age: 25},
        {name: 'Joe', age: 26},
      ],
      otherState: 'test',
      showOthers: !currentShowPersonStatus
    });

    // swtichNameHandler("Sagar Alias Jacky")
  }

  const deletePersonHandler = (index) => {
    // copy persons list to personsList const by using splice
    const personsList = [...personState.persons]
    personsList.splice(index, 1);
    setPersonState({
      persons: personsList,
      otherState: 'test',
      showOthers: true,
    })
  }

  let personsList = null;
  if(personState.showOthers){
    personsList = (
      <div>
          {personState.persons.map((person, index) => {
            return <Person
                    key={index} // pass unique value (eg: pass unique ID)
                    click={() => deletePersonHandler(index)}
                    changeHandler={(event) => nameChangeHandler(event, index)}
                    name={person.name}
                    age={person.age}
            />
          })}
          {/* <Person
          name={personState.persons[0].name}
          age={personState.persons[0].age}
          click={swtichNameHandler.bind(this, "Paul Joe George")}
          changeHandler={nameChangeHandler}
          >I should also come to screen
          </Person>
          <Person
          name={personState.persons[1].name} 
          age={personState.persons[1].age}
          />
          <Person 
          name={personState.persons[2].name}
          age={personState.persons[2].age}
          /> */}
      </div>
    )
    ButtonStyle.backgroundColor='red';
    ButtonStyle[':hover'] = {
      backgroundColor: 'orange',
      color: 'white'
    }
  }

  // available css classes
  let cssClasses = [];
  if(personState.persons.length <= 2){
    cssClasses.push('red'); 
  }

  if(personState.persons.length <= 1){
    cssClasses.push('bold');
  }

  return (
    // <StyleRoot>
    <div className="App">
      <h1 className={cssClasses}>Hello I'm new to React !!</h1>
      <ButtonStyle alt={personState.showOthers} onClick={PersonListToggleHandler}>Toggle Person List</ButtonStyle>   {/* inefficient way*/}
      {/* <button style={buttonStyle} onClick={() => swtichNameHandler("Sagar Alias Jacky")}>Click Me</button>   inefficient way */}
      {/* Alternative way of doing  */}
      {/* <button onClick={swtichNameHandler.bind(this, "Sagar Alias Jacky")}>Test Button</button> */}
      {/* { personState.showOthers ?
        <div>
          <Person
          name={personState.persons[0].name}
          age={personState.persons[0].age}
          click={swtichNameHandler.bind(this, "Paul Joe George")}
          changeHandler={nameChangeHandler}
          >I should also come to screen
          </Person>
          <Person
          name={personState.persons[1].name} 
          age={personState.persons[1].age}
          />
          <Person 
          name={personState.persons[2].name}
          age={personState.persons[2].age}
          />
        </div> : null
      } */}
      {personsList}
    </div>
    /* </StyleRoot> */
  );
  //return React.createElement('div', {className: 'App'},  React.createElement('h1', {className: 'App'}, 'Iam new here!!')); 
}
// export default Radium(App);
export default App;

// CLASS BASED COMPONENTS
// class App extends Component {
//   state = {
//     persons: [
//       {name: 'Paul', age: 20},
//       {name: 'PJoe', age: 25},
//       {name: 'Joe', age: 26},
//     ],
//     otherState: 'test',
//   }

//   swtichNameHandler = () => {
//     console.log("button clicked");
//     // this.state.persons[0].name = "PJOE George" ==> DONT Do this
//     // setState input should be the new array
//     this.setState({
//       persons: [
//         {name: 'Paul Joe George', age: 20},
//         {name: 'PJoe', age: 25},
//         {name: 'Joe', age: 27},
//       ],
//     })
//   }
