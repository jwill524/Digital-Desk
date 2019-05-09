import firebase from 'firebase'
import React from 'react'
import {NavLink} from "react-router-dom";

let config = {
    apiKey: "AIzaSyB-naxDMgSOMVVBv7nwrMcE8UzIsbfHafI",
    authDomain: "team3desk.firebaseapp.com",
    databaseURL: "https://team3desk.firebaseio.com",
    projectId: "team3desk",
    storageBucket: "team3desk.appspot.com",
    messagingSenderId: "244310026921"
  };
  
  firebase.initializeApp(config);
  
  const fireBase = firebase.database();

class Base extends React.Component {
    constructor() {
        super();
        this.state = {
            rating: ""
        }
    }

    componentDidMount() {
        const ratingRef = fireBase.ref('rating/');

        ratingRef.on('value', snapshot => {
            this.setState({
                rating: snapshot.val()
            })
        })
    }

    writeData = e => {
        e.preventDefault();
        const ratingValue = e.target.elements.inputRating.value;
        fireBase.ref('rating/').push(ratingValue);
    }

    render() {
        return (
            <div className='base-home'>
            <NavLink to='/' style={{color:"black", fontSize:"20px"}} >Home</NavLink>
                <form onSubmit={this.writeData.bind(this)}>
                        <h1>Rate from 0-10</h1>
                    <input type="text" name="inputRating" placeholder="Ex. 5 stars" />
                    <button type="submit">submit</button>
                </form>

            </div>

        )
    }

}

export default Base;