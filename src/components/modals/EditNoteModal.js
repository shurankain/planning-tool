import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {editNoteText} from "../../actions/noteActions";
import '../styles/EditNoteModal.css'
import '../../App.css';

const EditNoteModal = ({current, editNoteText}) => {
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

  return (
    <div className={`editNoteModal ${current ? '' : 'invisible'}`}>
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

EditNoteModal.propTypes = {
  current: PropTypes.object,
  editNoteText: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  current: state.note.current
})

export default connect(
  mapStateToProps,
  {editNoteText}
)
(EditNoteModal);