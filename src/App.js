import React, {useState} from 'react';
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


const switchTestPropsHandler = () =>{
  setTestState({
    Test: [{testProps : "I'm the newest beast"}]
  })};
//   this.setState({
//     Test: [
//       {testProps : "new shit"}
//     ]
//   })
// }
    
    // render(){
  return (
    <div className="App">
    <button onClick={switchTestPropsHandler}>click me to get new shit</button>
   <Test testProps="this is the test property of my application"/>
   <Test testProps={testState.Test[0].testProps}>I'm testing if the child will show up or not</Test>
    </div>
  );
}
// }
export default App;
