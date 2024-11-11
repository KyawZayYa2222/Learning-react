import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import { addDoc, updateDoc, collection } from 'firebase/firestore'
import { useParams, useNavigate } from'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'

export default function BookForm() {
    let [isEdit, setIsEdit] = useState(false);
    let [loading, setLoading] = useState(false)
    let [error, setError] = useState('')
    let [title, setTitle] = useState('')
    let [description, setDescription] = useState('')
    let [category, setCategory] = useState('')
    let [categories, setCategories] = useState([])

    let {id} = useParams();

    let navigate = useNavigate();
    
    useEffect(() => {
        if(id) {
            setIsEdit(true);
            console.log('edit form')
            let ref = doc(db, 'books', id)
            getDoc(ref)
            .then((doc) => {
                let book = {id: doc.id,...doc.data()}
                console.log(book)
                if(!doc.exists) {
                    setError('No data found')
                } else {
                    let book = {id: doc.id,...doc.data()}
                    setLoading(false)
                    console.log(book)
                    setTitle(book.title)
                    setDescription(book.description)
                    setCategories(book.categories)
                    setError('')
                }
            })
        } else {
            console.log('create form')
        }
    }, [])

    let addCategory = () => {
        if(categories.includes(category)) return;

        setCategories((prev) => [category, ...prev]);
        console.log(categories)
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        let postData = {
            title: title,
            description: description,
            categories: categories
        }
        console.log('submitting form')
        
        if(isEdit) {
            let ref = doc(db, 'books', id)
            updateDoc(ref, postData)
        } else {
            let ref = collection(db, 'books')
            addDoc(ref, postData)
        }
        
        navigate('/');
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
                        {isEdit ? 'Update' : 'Create'}
                    </button>
                </div>
            </form>
        </div>
    )
}