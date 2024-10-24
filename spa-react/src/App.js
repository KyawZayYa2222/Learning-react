import React, { useState } from 'react'

export default function App() {
  let [posts, SetPosts] = useState([
    {id: 1, title: 'Apple'},
    {id: 2, title: 'Orange'},
    {id: 3, title: 'Mange'}
  ]);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {
          posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))
        }
      </ul>
    </div>
  )
}
