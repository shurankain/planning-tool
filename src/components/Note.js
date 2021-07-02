import React from 'react'
import './styles/Note.css'

const Note = props => {
  return (
    <div className='note'>
      <div className='task-text'>
        - Task text
        - Task text
        - Task text
      </div>
      <div className='note-footer'>
        <div className='noteName'>
          Some note name
        </div>
        <div className='info-box'>
          76%
        </div>
      </div>

    </div>
  )
}

Note.propTypes = {}

export default Note