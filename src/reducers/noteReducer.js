import {
  ADD_NOTE,
  GET_NOTE,
  GET_NOTES,
  DELETE_NOTE,
  NOTES_ERROR,
  SET_LOADING
} from '../actions/types'

const initialState = {
  notes: null,
  current: null,
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload,
        loading: false
      }
    case NOTES_ERROR:
      console.log(action.payload)
      return {
        ...state,
        error: action.payload
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}