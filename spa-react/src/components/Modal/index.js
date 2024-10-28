import React from 'react'
import './index.css'
import ReactDom from 'react-dom'
import styles from './modal.module.css'

export default function Modal({children, setShowModal, danger}) {
  return (
    ReactDom.createPortal(
      <div className="modal-component">
        <div className='modal-con'>
            <div className="modal" style={{
                border: '4px solid',
                borderColor: danger ? 'red' : 'blue'
              }}>
                {children}
                <button onClick={() => setShowModal(false)} className={styles.btn}>Close</button>
            </div>
        </div>
      </div>
    , document.getElementById('modal'))
  )
}
