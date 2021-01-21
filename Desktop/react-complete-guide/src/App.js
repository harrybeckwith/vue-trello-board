import React from "react";
import "./App.css";
import Person from "./Person/Person";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends React.Component {
  state = {
    persons: [
      { id: 1, name: "harry", age: 30 },
      { id: 2, name: "garry", age: 32 },
      { id: 3, name: "larry", age: 38 },
    ],
    userName: "user one",
    show: false,
    msg: "",
  };

  updateUserName = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  nameChange = (event, id) => {
    // find index of person from state
    const personIndex = this.state.persons.findIndex((item) => item.id === id);
    // create one person from index found obj
    const person = {
      ...this.state.persons[personIndex],
    };

    // the name is updated with input value
    person.name = event.target.value;
    // copying all persons state
    const persons = [...this.state.persons];
    // updating the found index with new person
    persons[personIndex] = person;
    console.log(persons);
    // update state
    this.setState({ persons });
  };

  toggle = () => {
    const doesShow = this.state.show;
    this.setState({
      show: !doesShow,
    });
  };

  deletePerson = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);

    this.setState({
      persons,
    });
  };

  inputLength = (event) => {
    this.setState({
      msg: event.target.value,
    });
  };

  deleteChar = (charIndex) => {
    console.log(charIndex);

    const r = [...this.state.msg];
    // remove index
    r.splice(charIndex, 1);
    let msg = r.join("");

    this.setState({
      msg,
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      ":hover": {
        backgroundColor: "orange",
      },
    };

    let persons = null;

    if (this.state.show) {
      persons = (
        <div>
          {this.state.persons.map((person, i) => {
            return (
              <Person
                click={() => this.deletePerson(i)}
                name={person.name}
                age={person.age}
                key={person.id}
                change={(event) => this.nameChange(event, person.id)}
              />
            );
          })}
        </div>
      );
      style[":hover"] = {
        backgroundColor: "green",
        color: "white",
      };
    }
    let characters = null;
    if (this.state.msg) {
      characters = (
        <div>
          {this.state.msg.split("").map((char, i) => {
            return (
              <CharComponent
                char={char}
                key={i}
                click={() => this.deleteChar(i)}
              />
            );
          })}
        </div>
      );
    }

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red");
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
  
        <div className="App">
          <p className={classes.join(" ")}>working</p>
          <input
            type="text"
            onChange={(event) => this.inputLength(event)}
            value={this.state.msg}
          />
          {this.state.msg}
          {characters}

          <ValidationComponent msg={this.state.msg} />
          <UserOutput userName={this.state.userName} />
          <UserInput
            change={this.updateUserName}
            userName={this.state.userName}
          />
          <br></br>
          <button onClick={this.toggle} style={style}>
            toggle div
          </button>

          {persons}
        </div>

    );
  }
}

export default App;
