import React from 'react'
import "./styles/SideBar.css"
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {triggerAddNote} from "../actions/noteActions";

const SideBar = ({triggerAddNote}) => {

  const onAddClick = () => {
    triggerAddNote()
  }

  return (
    <div className="sidebar">
      <button className="add" id="add" onClick={onAddClick}>
        <i className="fas fa-plus"></i> Add note
      </button>
    </div>
  )
}

SideBar.propTypes = {
  triggerAddNote: PropTypes.func.isRequired
}

export default connect(
  null,
  {triggerAddNote})
(SideBar)