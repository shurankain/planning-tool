import {
  DELETE_NOTE, EDIT_NOTE_TEXT,
  GET_NOTES,
  NOTES_ERROR,
  SET_LOADING
} from "./types";

// Get notes form sever
export const getNotes = () => async (dispatch) => {
  try {
    setLoading()

    const res = await fetch('http://localhost:8080/notes/all', {method:'GET', headers: {'Authorization': 'Basic c2h1cmFua2FpbjoxMDAxU2h1cmFu'}})
    const data = await res.json()

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

// Edit Note Text
export const editNoteText = (noteId, text) => async (dispatch) => {
  try {
    const res = await fetch('http://localhost:8080/notes/' + noteId + '?noteText=' + text, {method:'PUT', headers: {'Authorization': 'Basic c2h1cmFua2FpbjoxMDAxU2h1cmFu'}})
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


// Delete note
// Get notes form sever
export const deleteNote = noteId => async (dispatch) => {
  try {
    await fetch('http://localhost:8080/notes/' + noteId, {method:'DELETE', headers: {'Authorization': 'Basic c2h1cmFua2FpbjoxMDAxU2h1cmFu'}})

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

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}