import React, { Component } from "react";
import ReactDOM from "react-dom";
import './App.css';
import Note from './components/note';
import { BrowserRouter, Route } from "react-router-dom";
import cheese from './components/Weather-app/All-important'
import Navigation from './components/Weather-app/nav'

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
  
  render(){
    return (
      <div className="App">
        <div className="Books" onClick={this.addBook}>Books</div>
        <div className="Notes" onClick={this.addNote.bind(this)}>
        {
            this.state.notes.map(note =>{
              return <Note text={note.text}></Note>
            })
          }
        </div>
        <div className="Calendar" onClick={this.calendar}>Calendar</div>
        <BrowserRouter>
        <Navigation/>
        <Route path="/weather" component={cheese} exact  />
        </BrowserRouter>
      </div>
    );
}
}

export default App;
