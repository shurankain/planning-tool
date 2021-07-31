import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {addNote, cancelModals} from "../../actions/noteActions";
import '../../App.css';

const AddNoteModal = ({addNoteTriggered, addNote, cancelModals}) => {
  const [noteText, setNoteText] = useState('')
  const [tasks, setTasks] = useState(['test1', 'test2'])

  const onSubmit = () => {
    addNote(noteText, tasks)
    // Clear fields
    setNoteText('')
  }

  const onCancel = () => {
    cancelModals()
    // Clear fields
    setNoteText('')
  }

  useEffect(() => {
  }, [addNoteTriggered])

  return (
    <div className={`modal ${addNoteTriggered ? '' : 'invisible'}`}>
      <div className='modalContent'>
        <div className='inputField'>
          <p className='modalHeaderText'>Note text:</p>
          <textarea
                 name='message'
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

AddNoteModal.propTypes = {
  addNoteTriggered: PropTypes.bool.isRequired,
  addNote: PropTypes.func.isRequired,
  cancelModals: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  addNoteTriggered: state.note.addNoteTriggered
})

export default connect(
  mapStateToProps,
  {addNote, cancelModals}
)
(AddNoteModal);