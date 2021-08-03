import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {cancelModals, editNoteText} from "../../actions/noteActions";
import '../../App.css';

const EditNoteModal = ({current, editNoteTriggered, editNoteText, cancelModals}) => {
  const [noteText, setNoteText] = useState('')
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    if (current) {
      setNoteText(current.noteText)
      setTasks(current.tasks)
    }
  }, [current])

  const onSubmit = () => {
    editNoteText(current.id, noteText, tasks)
    // Clear fields
    setNoteText('')
  }

  const onCancel = () => {
    cancelModals()
    // Clear fields
    setNoteText('')
  }

  return (
    <div className={`modal ${editNoteTriggered ? '' : 'invisible'}`}>
      <div className='modalContent'>
        <div className='inputField'>
          <p className='modalHeaderText'>Edit note text:</p>
          <textarea
            value={noteText}
            className='modalTextInput'
            onChange={e => setNoteText(e.target.value)}/>
        </div>
      </div>

      <div className='modalFooter'>
        <a href='#!' onClick={onCancel} className='btn btn-red'>
          Cancel
        </a>
        <a href='#!' onClick={onSubmit} className='btn btn-green'>
          Save
        </a>
      </div>
    </div>
  );
};

EditNoteModal.propTypes = {
  current: PropTypes.object,
  editNoteTriggered: PropTypes.bool.isRequired,
  editNoteText: PropTypes.func.isRequired,
  cancelModals: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  current: state.note.current,
  editNoteTriggered: state.note.editNoteTriggered
})

export default connect(
  mapStateToProps,
  {editNoteText, cancelModals}
)
(EditNoteModal);