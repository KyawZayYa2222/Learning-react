import React from 'react'
import './index.css'
import ReactDom from 'react-dom'

export default function Modal({children, setShowModal}) {
  return (
    ReactDom.createPortal(
      <div className='modal-con'>
          <div className="modal">
              {children}
              <button onClick={() => setShowModal(false)}>Close</button>
          </div>
      </div>
    , document.getElementById('modal'))
  )
}
