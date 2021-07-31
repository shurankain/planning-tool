import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import "./styles/NotesGrid.css"
import Note from './Note'
import PropTypes from 'prop-types'
import {getNotes} from "../actions/noteActions";
import Spinner from "./layout/Spinner";

const NotesGrid = ({notesList, getNotes}) => {

  const {notes, loading} = notesList

  useEffect(() => {
    getNotes()
    // eslint-disable-next-line
  }, [notesList])

  if (loading || notes === null) {
    return <Spinner/>
  }

  return (
    <div className="notes-grid">
      {!loading && notes.length === 0 ? (<p className='center'>No notes to show</p>) : (
        notes.map(note => <Note note={note} key={note.id}/>)
      )}
    </div>
  )
}

NotesGrid.propTypes = {
  notes: PropTypes.object.isRequired,
  getNotes: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  notesList: state.note
})

export default connect(
  mapStateToProps,
  {getNotes})
(NotesGrid)