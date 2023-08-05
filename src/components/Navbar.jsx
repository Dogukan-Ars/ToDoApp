import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className='navbar-title'>ToDo 
        <div className='navbar-links'>
            <h4><Link to="/">Home</Link></h4>
            <h4><Link to="/about">About</Link></h4>
        </div>
    </div>
  )
}

export default Navbar