import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {cancelModals} from "../../actions/noteActions";
import {addTaskToNote} from "../../actions/taskActions";
import Task from "../Task";

const TasksView = ({current, notes, tasksViewTriggered, cancelModals, addTaskToNote}) => {
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
  }, [current, notes])

  return (
    <div className={`tasks-modal ${tasksViewTriggered ? '' : 'invisible'}`}>
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
        <a href='#!' onClick={onAddTask} className='btn btn-green'>
          Add Task
        </a>
      </div>
    </div>
  );
};

TasksView.propTypes = {
  current: PropTypes.object,
  tasksViewTriggered: PropTypes.bool.isRequired,
  cancelModals: PropTypes.func.isRequired,
  addTaskToNote: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  current: state.note.current,
  tasksViewTriggered: state.note.tasksViewTriggered,
  notes: state.note.notes
})

export default connect(
  mapStateToProps,
  {cancelModals, addTaskToNote}
)
(TasksView);