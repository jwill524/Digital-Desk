import React, { Component } from "react";
import ReactDOM from "react-dom";
import './App.css';
import Note from './components/note';
import { NavLink } from 'react-router-dom';


// import * as firebase from 'firebase'

// let config = {
//   apiKey: "AIzaSyB-naxDMgSOMVVBv7nwrMcE8UzIsbfHafI",
//   authDomain: "team3desk.firebaseapp.com",
//   databaseURL: "https://team3desk.firebaseio.com",
//   projectId: "team3desk",
//   storageBucket: "team3desk.appspot.com",
//   messagingSenderId: "244310026921"
// };

// firebase.initializeApp(config);

// const database = firebase.database();

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      notes: []
    }
  }

  addNote(){
    let newText = prompt('enter new note text')
    this.state.notes.push({
      text: newText
    });
    this.setState({
      notes: this.state.notes
    })
  }
  addBook(){
    console.log("books")
  }
  calendar(){
    console.log("calendar")
  }
  clock(){
    console.log("clock")
  }
  
  render(){
    return (
      <div className="Ham">
        <div className="Books" onClick={this.addBook}>Books</div>
        <div className="Notes" onClick={this.addNote.bind(this)}>
        {
            this.state.notes.map(note =>{
              return <Note text={note.text}></Note>
            })
          }
        </div><span className="addNoteButton" onClick={this.addNote.bind(this)}>add note</span>
        <div className="Clock" onClick={this.clock}>Clock</div>
        {/* I had to add a navlink so it would register on the main background */}
        <NavLink to="/calendar"><div className="Calendar"></div></NavLink>
        <NavLink to="/weather"><div className="thermometer"></div></NavLink>
      </div>
    );
}
}

export default App;
