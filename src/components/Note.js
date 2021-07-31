import React from 'react'
import './styles/Note.css'
import {deleteNote, setCurrent} from "../actions/noteActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const Note = ({note, deleteNote, setCurrent}) => {

  const {id, noteText, creationDate, tasks} = note

  const calcTasksCompletion = () => {
    return Math.floor(note.tasks.filter(task => task.completionStatus).length * 100 / note.tasks.length)
  }

  const onNoteClick = () => {
    setCurrent(note)
  }

  const onDelete = () => {
    deleteNote(id)
  }

  return (
    <div className='note'>
      <div className='task-text' onClick={onNoteClick}>
        {noteText}
      </div>
      <div className='delete-note'>
        <button className='delete-button' onClick={onDelete}>X</button>
      </div>
      <div className='note-footer'>
        <div className='note-name'>
          <p>{creationDate}</p>
        </div>

        <div className='info-box'>
          {(tasks !== null) ? (<p>{calcTasksCompletion()}%</p>) : (<p>n/a</p>)}

        </div>
      </div>

    </div>
  )
}

Note.propTypes = {
  deleteNote: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  notes: state.note
})

export default connect(
  mapStateToProps,
  {deleteNote, setCurrent})
(Note)