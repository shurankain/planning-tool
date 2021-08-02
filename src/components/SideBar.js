import React from 'react'
import "./styles/SideBar.css"
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {triggerAddNoteModal} from "../actions/noteActions";

const SideBar = ({triggerAddNoteModal}) => {

  const onAddClick = () => {
    triggerAddNoteModal()
  }

  return (
    <div className="sidebar">
      <button className="btn btn-green" id="add" onClick={onAddClick}>
        <i className="fas fa-plus"></i> Add note
      </button>
    </div>
  )
}

SideBar.propTypes = {
  triggerAddNoteModal: PropTypes.func.isRequired
}

export default connect(
  null,
  {triggerAddNoteModal})
(SideBar)