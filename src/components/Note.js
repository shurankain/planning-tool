import React from 'react'
import './styles/Note.css'

const Note = ({note: {noteText, creationDate, tasks}}) => {

  const calcTasksCompletion = () => {
    return Math.floor(tasks.filter(task => task.completionStatus).length / tasks.length)
  }

  return (
    <div className='note'>
      <div className='task-text'>
        {noteText}
      </div>
      <div className='delete-note'>
        <button className='delete-button' onClick={}>X</button>
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

Note.propTypes = {}

export default Note