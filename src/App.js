import React, {useState} from 'react';
import SmartInput from './SmartInput';
import './App.css';
import Test from './BestInTest';


const App = props => {
  // class App extends Component {
   const [testState, setTestState]= useState({
         // state = 
      Test: [
        {testProps : "I am another state, more presiceley"}
      ] 
    });


const switchTestPropsHandler = (newTestProps) =>{
  if(newTestProps === "Mikkel"){
    console.log("cool guy just entered the application")
  }
  setTestState({
    Test: [{testProps : newTestProps}]
  })};
//   this.setState({
//     Test: [
//       {testProps : "new something"}
//     ]
//   })
// }

const userInputTestTextOnChangeHandler = (event) =>{
  setTestState({
     Test: [{testProps: event.target.value.toUpperCase()}]
    })
}
    
    // render(){

  return (
    <div className="App">
     <Test testProps="this is the test property of my application">I'm testing if the child will show up or not</Test>
      <Test 
      testProps={testState.Test[0].testProps}
      clicked={switchTestPropsHandler.bind(switchTestPropsHandler,"NEW TESTPROPS")}
      > please write here to change name: <SmartInput  changed={userInputTestTextOnChangeHandler}/></Test>
       
      <button onClick={switchTestPropsHandler.bind(switchTestPropsHandler,"Mikkel")}>click me to get new shit</button>
    </div>
  );
}
// }
export default App;
