import {DELETE_NOTE, ADD_NOTE, TRIGGER_ADD_NOTE_MODAL, EDIT_NOTE_TEXT, GET_NOTES, NOTES_ERROR, SET_CURRENT_NOTE, SET_LOADING} from '../actions/types'

const initialState = {
  notes: null,
  current: null,
  addNoteTriggered: false,
  loading: false,
  error: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload,
        loading: false
      }
    case ADD_NOTE: {
      return {
        ...state,
        notes: [...state.notes, action.payload],
        loading: false,
        addNoteTriggered: false
      }
    }
    case TRIGGER_ADD_NOTE_MODAL: {
      return {
        ...state,
        addNoteTriggered: true
      }
    }
    case EDIT_NOTE_TEXT : {
      return {
        ...state,
        notes: state.notes.map(note => note.id === action.payload.id ? action.payload : note),
        current: null,
        loading: false
      }
    }
    case SET_CURRENT_NOTE: {
      return {
        ...state,
        current: action.payload
      }
    }
    case DELETE_NOTE: {
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload),
        loading: false
      }
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