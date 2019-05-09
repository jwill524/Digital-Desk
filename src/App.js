import React, { Component } from "react";
import "./App.css";
import Note from "./components/note";
import { BrowserRouter, NavLink, Switch, Route } from "react-router-dom";
import Clock from 'react-live-clock'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  addNote() {
    let newText = prompt("enter new note text");
    this.state.notes.push({
      text: newText
    });
    this.setState({
      notes: this.state.notes
    });
  }
  addBook() {
    console.log("books");
  }
  calendar() {
    console.log("calendar");
  }
  clock() {
    console.log("clock");
  }

  render() {
    return (
      <div className='Ham'>
        <div className='Notes' onClick={this.addNote.bind(this)}>
          {this.state.notes.map(note => {
            return <Note text={note.text} />;
          })}
        </div>
        <span className='addNoteButton' onClick={this.addNote.bind(this)}>
          add note
        </span>
       <NavLink to="/clock"> <div className='Clock'>
        </div></NavLink>
        {/* I had to add a navlink so it would register on the main background */}
        <NavLink to='/weather'>
          <div className='thermometer' />
        </NavLink>
        <NavLink to='/calendar'>
          <div className='Calendar'></div>
        </NavLink>
        <NavLink to='/rating'><div className='Firebase'>Rate Us</div></NavLink>
      </div>
    );
  }
}

export default App;
