import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {editTask} from "../actions/taskActions";
import '../components/styles/Task.css'

const Task = ({task, tasksViewTriggered, editTask}) => {
  const [wasEdited, setWasEdited] = useState(false)
  const [taskText, setTaskText] = useState(task.taskInfo)

  const clickSave = () => {
    editTask(task.id, taskText, task.creationDate, task.completionStatus)
  }

  const clickDelete = () => {

  }

  useEffect(() => {
    setWasEdited(false)
    setTaskText(task.taskInfo)
    // eslint-disable-next-line
  }, [tasksViewTriggered])

  return (
    <div className='taskItem'>
      <textarea className='taskText'
                defaultValue={task.taskInfo}
                onChange={e => {
                  setTaskText(e.target.value);
                  setWasEdited(e.target.value !== task.taskInfo)
                }}/>
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
  tasksViewTriggered: PropTypes.bool.isRequired,
  editTask: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  tasksViewTriggered: state.note.tasksViewTriggered
})

export default connect(
  mapStateToProps,
  {editTask})
(Task)