import React, { useRef} from 'react'
import './index.css'

export default function PostForm({uploadPost, setShowModal}) {
  // let [title, setTitle] = useState('')
  let title = useRef();
  
//   let onChangeHandler = (e) => {
//     setTitle(e.target.value)
//   }

  let reset = () => {
    // setTitle('');
    if(title.current) {
      title.current.value = ''
    }
  }

  let addPost = (e) => {
    e.preventDefault()
    
    let post = {
      id: Math.floor(Math.random() * 10000),
      title: title.current ? title.current.value : ''
    }

    uploadPost(post);
    
    reset()

    setShowModal(false);
  }

  return (
    <div className="post-form-component">
        <h1>Post Form</h1>
        <p>Title</p>
        <form action="" onSubmit={addPost}>
            <input type="text" ref={title}/> {/* Two way data binding */}
            <button type='submit' className='btn'>Create</button>
        </form>
    </div>
  )
}
