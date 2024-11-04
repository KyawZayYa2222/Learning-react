import React from 'react'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'

export default function SingleBlog() {
    let params = useParams();
    let url = `http://localhost:3002/blogs/${params.id}`
    let {data: blog, loading, error} = useFetch(url)

    console.log(blog)

  return (
    <div>
        <h1>single blog</h1>
        {/* <h4>{blog.title}</h4>
        <p>{blog.content}</p> */}
    </div>
  )
}
