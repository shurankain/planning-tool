import {
  ADD_NOTE,
  CANCEL_MODALS,
  DELETE_NOTE,
  EDIT_NOTE_TEXT,
  GET_NOTES,
  NOTES_ERROR,
  SET_CURRENT_NOTE,
  SET_LOADING,
  TRIGGER_ADD_NOTE_MODAL,
  TRIGGER_EDIT_NOTE_MODAL,
  TRIGGER_TASK_VIEW_MODAL
} from "./types";

// Get notes form sever
export const getNotes = () => async (dispatch) => {
  try {
    setLoading()

    const res = await fetch('http://localhost:8080/notes/all', {
      method: 'GET',
      headers: {'Authorization': 'Basic c2h1cmFua2FpbjoxMDAxU2h1cmFu'}
    })
    const data = await res.json()

    console.log(data)
    dispatch({
      type: GET_NOTES,
      payload: data
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: NOTES_ERROR,
      payload: err
    })
  }
}

// Add Note
export const addNote = (text, tasks) => async (dispatch) => {
  try {
    setLoading()

    const requestObj = {
      'noteText': text,
      'tasks': tasks
    }

    const res = await fetch('http://localhost:8080/notes/add', {
      method: 'POST',
      headers: {'Authorization': 'Basic c2h1cmFua2FpbjoxMDAxU2h1cmFu', 'Content-Type': 'application/json'},
      body: JSON.stringify(requestObj)
    })
    const data = await res.json()

    dispatch({
      type: ADD_NOTE,
      payload: data
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: NOTES_ERROR,
      payload: err
    })
  }
}

// Edit Note Text
export const editNoteText = (noteId, text, tasks) => async (dispatch) => {
  try {
    setLoading()

    const requestObj = {
      'noteText': text,
      'tasks': tasks
    }

    const res = await fetch('http://localhost:8080/notes/' + noteId, {
      method: 'PUT',
      headers: {'Authorization': 'Basic c2h1cmFua2FpbjoxMDAxU2h1cmFu', 'Content-Type': 'application/json'},
      body: JSON.stringify(requestObj)
    })
    const data = await res.json()

    dispatch({
      type: EDIT_NOTE_TEXT,
      payload: data
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: NOTES_ERROR,
      payload: err
    })
  }
}

export const setCurrent = note => {
  return {
    type: SET_CURRENT_NOTE,
    payload: note
  }
}


// Delete note
// Get notes form sever
export const deleteNote = noteId => async (dispatch) => {
  try {
    setLoading()

    await fetch('http://localhost:8080/notes/' + noteId, {
      method: 'DELETE',
      headers: {'Authorization': 'Basic c2h1cmFua2FpbjoxMDAxU2h1cmFu'}
    })

    dispatch({
      type: DELETE_NOTE,
      payload: noteId
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: NOTES_ERROR,
      payload: err
    })
  }
}

// Cancel all modals
export const cancelModals = () => {
  return {
    type: CANCEL_MODALS
  }
}

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}

export const triggerAddNoteModal = () => {
  return {
    type: TRIGGER_ADD_NOTE_MODAL
  }
}

export const triggerEditNoteModal = () => {
  return {
    type: TRIGGER_EDIT_NOTE_MODAL
  }
}

export const triggerTaskViewModal = () => {
  return {
    type: TRIGGER_TASK_VIEW_MODAL
  }
}