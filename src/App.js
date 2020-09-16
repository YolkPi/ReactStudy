// useState: allow us use state in functional components
import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
    //destruct the useState
    const [ personState, setPeState] = useState({
        person: [
            {name: 'Max', age: 23, speed: 'I\'m fast'},
            {name: 'Vettel', age: 33, speed: 'I\'m fast'},
            {name: 'YouKonw', age: 23, speed: 'I am stupid, I am stupid'}
          ],
          otherState: 'hello'
    });

    //add a state
    const [ personState2, setPeState2] = useState({AAA: "???"});

    /**
     * One interesting and IMPORTANT thing: setState() will replace all states. Means that in this case, the origion "otherState" will disapper
     */
    const switchNameHandler = () => {
        console.log('clicked');
        setPeState({
          person: [
            {name: 'Ves', age: 23, speed: 'I\'m fast'},
            {name: 'Vettel', age: 33, speed: 'I\'m fast'},
            {name: 'YouKonw', age: 23, speed: 'I am stupid, I am stupid'},
            {name: 'Gasly', age: 23, speed: 'I win!'}
          ]
        });
      }

    return(
        <div className="App">

        <button onClick={this.cTestHandler}>TTT</button>


        <h1>Hi, how are you</h1>
        {/* do not use switchNameHandler() beacuse if you add parathesis, this function will be exeuted immediately when program start */}
        <button onClick={switchNameHandler}>Switch name</button>
        <Person name={personState.person[0].name} age={personState.person[0].age}
            //pass a function to Person element 
            click={switchNameHandler}
        >{personState.person[0].speed}</Person>
        <Person name={personState.person[1].name} age={personState.person[1].age}>{personState.person[1].speed}</Person>
        <Person name={personState.person[2].name} age={personState.person[2].age}>{personState.person[2].speed}</Person>
        {/* <Person name={this.state.person[2].name} age={this.state.person[2].age}>{this.state.person[3].speed}</Person> */}
      </div>
    );
}

export default app;