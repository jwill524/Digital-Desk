import React from 'react';
import '../css/note.css';

class Note extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className='newNote' >{this.props.text}</div>
        )
    }
}

export default Note;