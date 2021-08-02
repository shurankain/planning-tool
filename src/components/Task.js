import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {editTask} from "../actions/taskActions";

const Task = ({task, editTask}) => {
  return (
    <div>
      <p>{task.taskInfo}</p>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
  editTask: PropTypes.func.isRequired
};

export default connect(
  null,
  {editTask})
(Task)