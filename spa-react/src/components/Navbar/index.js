import React from 'react'
import './index.css'

export default function Navbar({setShowModal}) {
  return (
    <div className='navbar'>
    <h1>Navbar</h1>
    <ul>
        <li>Home</li>
        <li>Post</li>
        <li onClick={() => setShowModal(true)}>Modal</li>
    </ul>
    </div>
  )
}
