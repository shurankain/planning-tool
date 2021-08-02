import {
  ADD_NOTE,
  CANCEL_MODALS,
  DELETE_NOTE,
  EDIT_NOTE_TEXT, EDIT_TASK,
  GET_NOTES,
  NOTES_ERROR,
  SET_CURRENT_NOTE,
  SET_LOADING, TASKS_ERROR,
  TRIGGER_ADD_NOTE_MODAL, TRIGGER_EDIT_NOTE_MODAL, TRIGGER_TASK_VIEW_MODAL
} from '../actions/types'

const initialState = {
  notes: null,
  current: null,
  addNoteTriggered: false,
  editNoteTriggered: false,
  tasksViewTriggered: false,
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
    case TRIGGER_EDIT_NOTE_MODAL: {
      return {
        ...state,
        editNoteTriggered: true
      }
    }
    case TRIGGER_TASK_VIEW_MODAL: {
      return {
        ...state,
        tasksViewTriggered: true
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
    case EDIT_TASK: {
      return {
        ...state,
        notes: state.notes.map(note => note.tasks.map(task => task.id === action.payload.id ? action.payload : task))
      }
    }
    case NOTES_ERROR: {
      console.log(action.payload)
      return {
        ...state,
        error: action.payload
      }
    }
    case TASKS_ERROR: {
      console.log(action.payload)
      return {
        ...state,
        error: action.payload
      }
    }
    case CANCEL_MODALS: {
      return {
        ...state,
        current: null,
        addNoteTriggered: false,
        editNoteTriggered: false,
        tasksViewTriggered: false
      }
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