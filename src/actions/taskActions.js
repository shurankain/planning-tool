import {ADD_TASK_TO_NOTE, DELETE_TASK, EDIT_TASK, TASKS_ERROR} from "./types";
import {setLoading} from "./noteActions";


export const editTask = (id, text, creationDate, status) => async (dispatch) => {

  try {
    const requestObj = {
      'taskInfo': text,
      'completionStatus': status,
      'creationDate': creationDate
    }

    const res = await fetch('http://localhost:8080/tasks/' + id, {
      method: 'PUT',
      headers: {'Authorization': 'Basic c2h1cmFua2FpbjoxMDAxU2h1cmFu', 'Content-Type': 'application/json'},
      body: JSON.stringify(requestObj)
    })

    const data = await res.json()

    dispatch({
      type: EDIT_TASK,
      payload: data
    })

  } catch (err) {
    console.log(err)
    dispatch({
      type: TASKS_ERROR,
      payload: err
    })
  }
}

export const addTaskToNote = (noteId, text, status) => async (dispatch) => {

  try {
    const taskToAdd = {
      'taskInfo': text,
      'completionStatus': status
    }

    const res = await fetch('http://localhost:8080/notes/' + noteId + '/addTask', {
      method: 'PUT',
      headers: {'Authorization': 'Basic c2h1cmFua2FpbjoxMDAxU2h1cmFu', 'Content-Type': 'application/json'},
      body: JSON.stringify(taskToAdd)
    })

    const data = await res.json()

    dispatch({
      type: ADD_TASK_TO_NOTE,
      payload: data,
      noteId: noteId
    })

  } catch (err) {
    console.log(err)
    dispatch({
      type: TASKS_ERROR,
      payload: err
    })
  }
}

export const deleteTask = taskId => async (dispatch) => {
  try {
    setLoading()

    await fetch('http://localhost:8080/tasks/' + taskId, {
      method: 'DELETE',
      headers: {'Authorization': 'Basic c2h1cmFua2FpbjoxMDAxU2h1cmFu'}
    })

    dispatch({
      type: DELETE_TASK,
      payload: taskId
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: TASKS_ERROR,
      payload: err
    })
  }
}