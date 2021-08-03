import React, {useEffect} from 'react'
import './styles/Note.css'
import {deleteNote, setCurrent, triggerEditNoteModal, triggerTaskViewModal} from "../actions/noteActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const Note = ({note, current, deleteNote, setCurrent, triggerEditNoteModal, triggerTaskViewModal}) => {

  const {id, noteText, creationDate, tasks} = note

  const calcTasksCompletion = () => {
    return Math.floor(note.tasks.filter(task => task.completionStatus).length * 100 / note.tasks.length)
  }

  const onNoteClick = () => {
    setCurrent(note)
    triggerEditNoteModal()
  }

  const onTaskClick = () => {
    setCurrent(note)
    triggerTaskViewModal()
  }

  const onDelete = () => {
    deleteNote(id)
  }

  useEffect(() => {
    // needed to update task completeness status
  }, [current])

  return (
    <div className='note'>
      <textarea readOnly className='noteTextArea' value={noteText} onClick={onNoteClick}/>

      <div className='delete-note'>
        <button className='delete-button' onClick={onDelete}>X</button>
      </div>
      <div className='note-footer'>
        <div className='note-name'>
          <p>{`${creationDate[2]}-${creationDate[1]}-${creationDate[0]} ${creationDate[3]}:${creationDate[4]}`}</p>
        </div>

        <div className='info-box' onClick={onTaskClick}>
          {(tasks !== null && tasks.length > 0) ? (<p>{calcTasksCompletion()}%</p>) : (<p>n/a</p>)}
        </div>
      </div>
    </div>
  )
}

Note.propTypes = {
  deleteNote: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
  current: PropTypes.object,
  triggerEditNoteModal: PropTypes.func.isRequired,
  triggerTaskViewModal: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  current: state.note.current
})

export default connect(
  mapStateToProps,
  {deleteNote, setCurrent, triggerEditNoteModal, triggerTaskViewModal})
(Note)