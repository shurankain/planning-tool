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
        <div className='note-name'>
          <p>Some note name</p>
        </div>
        <div className='info-box'>
          <p>76%</p>
        </div>
      </div>

    </div>
  )
}

Note.propTypes = {}

export default Note