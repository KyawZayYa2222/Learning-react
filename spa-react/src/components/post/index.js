import React from 'react'
import './index.css'

export default function Post({posts}) {
  return (
    <div className='post-con'>
        {
            !!posts.length && posts.map(post => (
                <div className='post' key={post.id}>{post.title}</div>
            ))
        }
    </div>
  )
}
