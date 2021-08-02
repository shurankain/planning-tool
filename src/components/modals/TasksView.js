import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {cancelModals} from "../../actions/noteActions";
import {addTaskToNote, editTask} from "../../actions/taskActions";
import Task from "../Task";

const TasksView = ({current, tasksViewTriggered, editTask, cancelModals, addTaskToNote}) => {
  const [tasks, setTasks] = useState([])

  const onAddTask = () => {
    addTaskToNote(current.id, '', false)
  }

  const onCancel = () => {
    cancelModals()
  }

  useEffect(() => {
    if (current) {
      setTasks(current.tasks)
    }
  }, [current, tasksViewTriggered])

  return (
    <div className={`modal ${tasksViewTriggered ? '' : 'invisible'}`}>
      <div className='taskModalContent'>
        <div className="tasks-grid">
          {tasks.length === 0 ? (<p className='center'>No tasks to show</p>) : (
            tasks.map(task => <Task task={task} key={task.id}/>)
          )}
        </div>
      </div>

      <div className='modalFooter'>
        <a href='#!' onClick={onCancel} className='btn btn-red'>
          Close
        </a>
      </div>
      <div className='modalFooter'>
        <a href='#!' onClick={onAddTask} className='btn btn-red'>
          Add Task
        </a>
      </div>
    </div>
  );
};

TasksView.propTypes = {
  current: PropTypes.object,
  tasksViewTriggered: PropTypes.bool.isRequired,
  editTask: PropTypes.func.isRequired,
  cancelModals: PropTypes.func.isRequired,
  addTaskToNote: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  current: state.note.current,
  tasksViewTriggered: state.note.tasksViewTriggered
})

export default connect(
  mapStateToProps,
  {editTask, cancelModals, addTaskToNote}
)
(TasksView);