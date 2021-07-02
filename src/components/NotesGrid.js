import React from 'react'
import "./styles/NotesGrid.css"
import Note from './Note'
import PropTypes from 'prop-types'

const NotesGrid = props => {
  return (
    <div className="notes-grid">
      <Note/>
      <Note/>
      <Note/>
      <Note/>
      <Note/>
      <Note/>
      <Note/>
      <Note/>
      <Note/>
      <Note/>
      <Note/>
      <Note/>
    </div>
  )
}

NotesGrid.propTypes = {

}

export default NotesGrid