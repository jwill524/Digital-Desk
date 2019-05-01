import React, { Component } from "react";
import ReactDOM from "react-dom";
import './App.css';

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
  addNote(){
    console.log("works")
  }
  constructor(){
    super();
    
  }
  
  render(){
    return (
      <div className="App">
        <div className="Books" onClick={this.addBook}>Books</div>
        <div className="Notes" onClick={this.addNote}>Notes</div>
      </div>
    );
}
}

export default App;
