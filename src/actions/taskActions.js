import {TASKS_ERROR, EDIT_TASK} from "./types";


export const editTask = (id, text, status) => async (dispatch) => {

  try {
    const requestObj = {
      'id': id,
      'taskInfo': text,
      'completionStatus': status
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
    dispatch ({
      type: TASKS_ERROR,
      payload: err
    })
  }

}