import React, { useState } from 'react'
import Navbar from './components/navbar';
import Post from './components/post';

export default function App() {
  let [posts, SetPosts] = useState([
    {id: 1, title: 'Apple'},
    {id: 2, title: 'Orange'},
    {id: 3, title: 'Mange'}
  ]);

  return (
    <>
    <Navbar/>
    <Post posts={posts}></Post>
    </>
  )
}
