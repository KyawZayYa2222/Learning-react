import { useEffect, useState } from "react"
import useFetch from "../hooks/useFetch"
import {Link} from "react-router-dom"

export default function Blogs() {
    let url = "http://localhost:3002/blogs"
    let {data: blogs, loading, error} = useFetch(url)

    return (
        <div className="blog-component">
            <h1>Blogs</h1>
            {error && <p className='text-danger'>{error}</p>}
            {
                !error && <div>
                    {loading && <p>Loading ..</p>}
                    {/* <button onClick={() => setUrl('http://localhost:3002/trips')}>All</button>
                    <button onClick={() => setUrl('http://localhost:3002/trips?location=Myanmar')}>Myanmar</button> */}
                    <ul>
                        {blogs && blogs.map((blog) => (
                            <li key={blog.id}>
                                <h4>{blog.title}</h4>
                                {/* <p>{blog.content}</p> */}
                                <Link to={`${blog.id}`}>read more</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    )
}