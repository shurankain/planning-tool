import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {cancelModals, editNoteText} from "../../actions/noteActions";
import '../../App.css';

const EditNoteModal = ({current, editNoteText, cancelModals}) => {
  const [noteText, setNoteText] = useState('')

  useEffect(() => {
    if (current) {
      setNoteText(current.noteText)
    }
  }, [current])

  const onSubmit = () => {
    editNoteText(current.id, noteText)
    // Clear fields
    setNoteText('')
  }

  const onCancel = () => {
    cancelModals()
    // Clear fields
    setNoteText('')
  }

  return (
    <div className={`modal ${current ? '' : 'invisible'}`}>
      <div className='modalContent'>
        <div className='inputField'>
          <p className='modalHeaderText'>Note text to edit:</p>
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
  editNoteText: PropTypes.func.isRequired,
  cancelModals: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  current: state.note.current
})

export default connect(
  mapStateToProps,
  {editNoteText, cancelModals}
)
(EditNoteModal);