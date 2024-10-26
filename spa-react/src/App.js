import React, { useState } from 'react'

export default function App() {
  let [posts, SetPosts] = useState([
    {id: 1, title: 'Apple'},
    {id: 2, title: 'Orange'},
    {id: 3, title: 'Mange'}
  ]);

  // delete 
  let deletePost = (id) => {
    SetPosts((prevPost => posts.filter((post) => post.id !== id)));
  }

  // && and gate concept base 
  // true && true = true 
  // true && false = false 
  // true && console.log('hello world') = 'hello world' 

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {
          !!posts.length && posts.map((post) => (
            <li key={post.id}>
              {post.title}
            <button onClick={() => deletePost(post.id)}>Delete</button>
            </li>
          ))
        }

        {!posts.length && <p>No post available.</p> }
      </ul>
    </div>
  )
}
