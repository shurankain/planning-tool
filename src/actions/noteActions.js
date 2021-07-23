import {
  GET_NOTES,
  NOTES_ERROR,
  SET_LOADING
} from "./types";

// Get notes form sever
export const getNotes = () => async (dispatch) => {
  try {
    setLoading()

    console.log('was here')

    const res = await fetch('http://localhost:8080/notes/all', {method:'GET', headers: {'Authorization': 'Basic c2h1cmFua2FpbjoxMDAxU2h1cmFu'}})
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

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}