import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Post from './components/Post';
import Modal from './components/Modal';
import PostForm from './components/PostForm';

export default function App() {
  let [posts, setPosts] = useState([
    {id: 1, title: 'Apple'},
    {id: 2, title: 'Orange'},
    {id: 3, title: 'Mange'}
  ]);

  let [showModal, setShowModal] = useState(false);

  // let className = 'text-danger';

  let uploadPost = (post) => {
    setPosts(prevState => [...prevState, post])
  }

  return (
    <>
    <Navbar setShowModal={setShowModal}/>
    <Post posts={posts}></Post>
    {
      showModal && <Modal setShowModal={setShowModal} danger={false}>
        {/* <h1 className="title">Modal</h1>
        <hr />
        <p className={`text ${className}`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Deleniti vitae repudiandae quo sequi ea natus magnam? 
          Voluptatibus mollitia perspiciatis facilis enim corrupti, 
          sunt qui repellendus consequatur sit at delectus error.
        </p> */}
        <PostForm uploadPost={uploadPost} setShowModal={setShowModal}/>
      </Modal>
    }
    </>
  )
}
