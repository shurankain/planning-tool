import React from 'react'
import "./styles/SideBar.css"

const SideBar = props => {
  return (
    <div className="sidebar">
      <button className="add" id="add">
        <i className="fas fa-plus"></i> Add note
      </button>
    </div>
  )
}

SideBar.propTypes = {}

export default SideBar