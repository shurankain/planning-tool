import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {deleteTask, editTask} from "../actions/taskActions";
import '../components/styles/Task.css'

const Task = ({task, current, editTask, deleteTask}) => {
  const [wasEdited, setWasEdited] = useState(false)
  const [taskText, setTaskText] = useState('')
  const [isCompleted, setIsCompleted] = useState(task.completionStatus)

  const clickSave = () => {
    editTask(task.id, taskText, task.creationDate, isCompleted)
    setWasEdited(false)
  }

  const onCheckboxClicked = () => {
    setIsCompleted(!isCompleted)
    setWasEdited(true)
  }

  const clickDelete = () => {
    deleteTask(task.id)
  }

  useEffect(() => {
    // eslint-disable-next-line
  }, [current])

  return (
    <div className='taskItem'>
      <textarea className='taskText'
                defaultValue={task.taskInfo}
                onChange={e => {
                  setTaskText(e.target.value)
                  setWasEdited(e.target.value !== task.taskInfo)
                }}/>
      <input className='completion-checkbox' type='checkbox' defaultValue={task.completionStatus}
             onClick={onCheckboxClicked}/>
      <button className="btn task-button btn-green" disabled={!wasEdited} onClick={clickSave}>
        <i className="far fa-save"></i>
      </button>
      <button className="btn task-button btn-red" onClick={clickDelete}>
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
  editTask: PropTypes.func.isRequired,
  current: PropTypes.object,
}

const mapStateToProps = state => ({
  current: state.note.current
})

export default connect(
  mapStateToProps,
  {editTask, deleteTask})
(Task)