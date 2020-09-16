import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // state: in component elemtns
  state = {
    person: [
      {name: 'Max', age: 23, speed: 'I\'m fast'},
      {name: 'Vettel', age: 33, speed: 'I\'m fast'},
      {name: 'YouKonw', age: 23, speed: 'I am stupid, I am stupid'}
    ],
    otherState: 'hello'
  }

  switchNameHandler = () => {
    console.log('clicked');
    this.setState({
      person: [
        {name: 'Ves', age: 23, speed: 'I\'m fast'},
        {name: 'Vettel', age: 33, speed: 'I\'m fast'},
        {name: 'YouKonw', age: 23, speed: 'I am stupid, I am stupid'},
        {name: 'Gasly', age: 23, speed: 'I win!'}
      ]
    });
  }

  switchNameHandlerWithParameter = (newName) => {
    console.log('clicked');
    this.setState({
      person: [
        {name: newName, age: 23, speed: 'I\'m fast'},
        {name: 'Vettel', age: 33, speed: 'I\'m fast'},
        {name: 'YouKonw', age: 23, speed: 'I am stupid, I am stupid'},
        {name: 'Gasly', age: 23, speed: 'I win!'}
      ]
    });
  }

  cTestHandler = () => {
    const Http = new XMLHttpRequest();
    const url='http://jsonplaceholder.typicode.com/posts';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
      console.log(Http.responseText)
    }
  }

  render() {
    return (
      <div className="App">

        <button onClick={this.cTestHandler}>TTT</button>


        <h1>Hi, how are you</h1>
        {/* do not use switchNameHandler() beacuse if you add parathesis, this function will be exeuted immediately when program start */}

        {/* bind() function pass parameter and properties */}
        {/* <button onClick={this.switchNameHandlerWithParameter.bind(this, "Norris")}>Switch name</button> */}

        {/* Another way(use a arrow function) besides of bind() */}
        <button onClick={
          () => {
            return this.switchNameHandlerWithParameter("Kimi");
          }
        }>Switch name</button>


        <Person name={this.state.person[0].name} age={this.state.person[0].age}
          click={this.switchNameHandlerWithParameter.bind(this, "Ricciardo")}
        >{this.state.person[0].speed}</Person>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}
          click={
            () => {
              return this.switchNameHandlerWithParameter("Norris");
            }
          }
        >{this.state.person[1].speed}</Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}>{this.state.person[2].speed}</Person>
        {/* <Person name={this.state.person[2].name} age={this.state.person[2].age}>{this.state.person[3].speed}</Person> */}
      </div>
    );
  }
}

export default App;
