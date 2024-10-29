import React, { useState } from 'react'
import './index.css'

export default function PostForm({uploadPost, setShowModal}) {
  let [title, setTitle] = useState('')
  
//   let onChangeHandler = (e) => {
//     setTitle(e.target.value)
//   }

  let reset = () => {
    setTitle('');
  }

  let addPost = (e) => {
    e.preventDefault()
    
    let post = {
      id: Math.floor(Math.random() * 10000),
      title: title
    }

    uploadPost(post);
    
    reset()

    setShowModal(false);
  }

  return (
    <div className="post-form-component">
        <h1>Post Form</h1>
        <p>{title}</p>
        <form action="" onSubmit={addPost}>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/> {/* Two way data binding */}
            <button type='submit' className='btn'>Create</button>
        </form>
    </div>
  )
}
