import React from 'react';
import '../css/note.css';

class Note extends React.Component{
    constructor(){
        super();
        this.state = {
            editMode: false,
            body: ''
        }
    }

    editNote(){
        if(document.getElementsByClassName('newNote')[this.props.thisIndex].classList.contains('growNote')==false){
            document.getElementsByClassName('newNote')[this.props.thisIndex].classList.add('growNote')
            this.setState({
                editMode: true
            })
        }
        else if(this.state.saving == true){
            document.getElementsByClassName('newNote')[this.props.thisIndex].classList.remove('shrinkNote')
            document.getElementsByClassName('newNote')[this.props.thisIndex].classList.add('growNote')
            this.setState({
                editMode: true,
                saving: false
            })
        }
    }

    saveNote(){
        if(document.getElementsByClassName('newNote')[this.props.thisIndex].classList.contains('growNote')==true){
            document.getElementsByClassName('newNote')[this.props.thisIndex].classList.add('shrinkNote')
        }
        this.setState({
            body: this.refs.bodyContent.value,
            editMode: false,
            saving: true
        })
    }

    render(){
        let noteBody;
        if(this.state.editMode == true){
            noteBody = (
                <div>
                    <textarea className ='noteTextarea'ref='bodyContent' defaultValue={this.state.body}/>
                    <button onClick={this.saveNote.bind(this)}>Save</button>
                </div>)
        }
        else {
            noteBody = this.props.text
        }

        return (
            <div className='newNote' noteId={this.props.noteID} onClick={this.editNote.bind(this)}>{noteBody}</div>
        )
    }
}

export default Note;