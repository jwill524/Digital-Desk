import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase'

let config = {
  apiKey: "AIzaSyB-naxDMgSOMVVBv7nwrMcE8UzIsbfHafI",
  authDomain: "team3desk.firebaseapp.com",
  databaseURL: "https://team3desk.firebaseio.com",
  projectId: "team3desk",
  storageBucket: "team3desk.appspot.com",
  messagingSenderId: "244310026921"
};

firebase.initializeApp(config);

const database = firebase.database();

class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
}
}

export default App;
