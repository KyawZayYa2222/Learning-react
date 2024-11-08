import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import useFetch from '../hooks/useFetch'

export default function BookCreate() {
    let [title, setTitle] = useState('')
    let [description, setDescription] = useState('')
    let [category, setCategory] = useState('')
    let [categories, setCategories] = useState([])

    let addCategory = () => {
        if(categories.includes(category)) return;

        setCategories((prev) => [category, ...prev]);
        console.log(categories)
    }

    let {setPostData} = useFetch("http://localhost:3001/books", "POST")

    let handleSubmit = (e) => {
        e.preventDefault()
        let postData = {
            id: Math.floor(Math.random() * 10000),
            title: title,
            content: description,
            categories: categories
        }

        setPostData(postData)
        console.log(postData)
    }

    return (
        <div className="max-w-xl mx-auto">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                {/* title  */}
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                    Title
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="title" type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title}/>
                </div>
                {/* description  */}
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Description
                </label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="description" type="text" placeholder="Description"
                onChange={(e) => setDescription(e.target.value)} value={description}></textarea> 
                </div>
                {/* category  */}
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                    Category
                </label>
                <div className="flex">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="category" type="text" placeholder="Category" onChange={(e) => setCategory(e.target.value)} value={category}/>
                    <button type="button" className='text-gray-50 bg-blue-500 hover:bg-blue-700 px-2 rounded-lg ms-1' onClick={addCategory}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
                <div>
                {
                    categories.map((c) => (
                        <div className='inline-block mt-3 p-2 bg-blue-600 text-gray-50 rounded-xl me-2' key={c}>{c}</div>
                    ))
                }
                </div>
                </div>

                <div className="flex items-center justify-end">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Create
                    </button>
                </div>
            </form>
        </div>
    )
}