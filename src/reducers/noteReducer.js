import {
  ADD_NOTE,
  GET_NOTE,
  GET_ALL_NOTES,
  DELETE_NOTE,
  NOTE_ERROR,
  SET_LOADING
} from '../actions/types'

const initialState = {
  notes: null,
  current: null,
  loading: false,
  error: null
}

export default (state = initialState, action) => {

}