import React from 'react'
import './index.css';

export default function Modal({children, setShowModal}) {
  return (
    <div className='modal-con'>
        <div className="modal">
            {children}
            <button onClick={() => setShowModal(false)}>Close</button>
        </div>
    </div>
  )
}
