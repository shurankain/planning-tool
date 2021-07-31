import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {addNote} from "../../actions/noteActions";
import '../../App.css';

const AddNoteModal = ({addNoteTriggered, addNote}) => {
  const [noteText, setNoteText] = useState('')
  const [tasks, setTasks] = useState(['test1', 'test2'])

  const onSubmit = () => {
    addNote(noteText, tasks)
    // Clear fields
    setNoteText('')
  }

  useEffect(() => {
  }, [addNoteTriggered])

  return (
    <div className={`modal ${addNoteTriggered ? '' : 'invisible'}`}>
      <div className='modalContent'>
        <div className='inputField'>
          <input type='text'
                 name='message'
                 value={noteText}
                 onChange={e => setNoteText(e.target.value)}/>
        </div>
      </div>

      <div className='modalFooter'>
        <a href='#!' onClick={onSubmit} className='btn'>
          Save
        </a>
      </div>
    </div>
  );
};

AddNoteModal.propTypes = {
  addNoteTriggered: PropTypes.bool.isRequired,
  addNote: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  addNoteTriggered: state.note.addNoteTriggered
})

export default connect(
  mapStateToProps,
  {addNote}
)
(AddNoteModal);