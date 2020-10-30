import './App.css';
import React, {useState } from 'react';
import Person from './Person/Person';

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
  });

  // a string testState
  const [testState, setTestState] = useState('Test State');

  console.log(personState, testState);

  //update person state and testState on button click
  const swtichNameHandler = () => { 
    console.log("button clicked");
    // this.state.persons[0].name = "PJOE George" ==> DONT Do this
    // setPersonState will replace personState array
    setPersonState({
      persons: [
        {name: 'Paul Joe George', age: 20},
        {name: 'PJoe', age: 25},
        {name: 'Joe', age: 27},
      ],
      otherState: personState.otherState
    })

    setTestState('Updated Test State');
  }

  return (
    <div className="App">
      <h1>Hello I'm new to React !!</h1>
      <button onClick={swtichNameHandler}>Test Button</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}>I should also come to screen</Person>
      <Person name={personState.persons[1].name} age={personState.persons[1].age}/>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
    </div>
  );
  // return React.createElement('div', {className: 'App'},  React.createElement('h1', {className: 'App'}, 'Iam new here!!'));
  
}

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
