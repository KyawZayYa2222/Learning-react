import { Link } from 'react-router-dom'
import bookImg from '../assets/RS0022-1.jpg'
// import useFetch from '../hooks/useFetch'
import { useContext, useEffect } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { collection, getDocs, orderBy, query, doc, deleteDoc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import { useState } from'react'

export default function Home() {
//   let {data: books, loading, error} = useFetch("http://localhost:3001/books")
let [error, setError] = useState('')
let [books, setBooks] = useState([])
let [loading, setLoading] = useState(false)

  let {theme} = useContext(ThemeContext)
  console.log(theme)

  useEffect(() => {
    setLoading(true)
    let ref = collection(db, 'books')
    let q = query(ref, orderBy('title'))
    onSnapshot(q, (docs) => {
        if(docs.empty) {
            setError('No data found')
        } else {
            let books = [];
            docs.forEach((doc) => {
                let book = {id: doc.id,...doc.data()}
                books.push(book)
            })
            setLoading(false)
            setBooks(books)
            setError('')
        }
    })
  }, [])

  let deleteBook = async (e, id) => {
    e.preventDefault()
    let ref = doc(db, 'books', id)
    await deleteDoc(ref)
    setBooks(books.filter((b) => b.id!== id))
  }
    

  return (
        <>
        {error && <p>{error.message}</p>}
        {loading && <p>Loading ...</p>}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-12">
            {
                !!books && books.map((b) => (
                    <Link key={b.id} to={`content/${b.id}`}>
                    <div className='border border-gray-300'>
                        <img src={bookImg} className='w-100' alt="" />
                        <div className="p-3">
                            <h4 className='text-2xl mb-2'>{b.title}</h4> 
                            {
                                !!b.categories && b.categories.map((c) => (
                                    <span className='p-2 bg-blue-600 text-gray-50 rounded-xl me-2' key={c}>{c}</span>
                                ))
                            }
                        </div>
                        <Link to={`/edit/${b.id}`}>
                        <button className='bg-blue-600 hover:bg-blue-500 border duration-200 border-blue-700 text-gray-100 p-1 rounded-md ms-2 mb-2'>Update</button>
                        </Link>
                        <button onClick={(e) => deleteBook(e, b.id)} 
                        className='bg-red-600 hover:bg-red-500 border duration-200 border-red-700 text-gray-100 p-1 rounded-md ms-2 mb-2'>Delete</button>
                    </div>
                    </Link>
                ))
            }
        </div>
        </>
  )
}
