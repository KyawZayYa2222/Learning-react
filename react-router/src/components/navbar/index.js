import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
    <h1>Navbar</h1>
    <ul>
        <NavLink className={`li`} to={``}>Home</NavLink>
        <NavLink className={`li`} to={`blogs`}>Blogs</NavLink>
        {/* <li className='active'>Home</li> */}
        {/* <li>Post</li>
        <li>Modal</li> */}
    </ul>
    </div>
  )
}