import { useParams } from 'react-router-dom'
import bookImg from '../assets/RS0022-1.jpg'
// import useFetch from '../hooks/useFetch';
import { doc, getDoc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import { useState, useEffect } from'react'

export default function Content() {
  let params = useParams();
//   let {data: book, loading, error} = useFetch(`http://localhost:3001/books?id=${params.id}`)
  let [book, setBook] = useState(null)
  let [loading, setLoading] = useState(false)
  let [error, setError] = useState('')

  useEffect(() => {
    let ref = doc(db, 'books', params.id)
    onSnapshot(ref, (doc) => {
        let book = {id: doc.id,...doc.data()}
        console.log(book)
        if(!doc.exists) {
            setError('No data found')
        } else {
            let book = {id: doc.id,...doc.data()}
            setLoading(false)
            setBook(book)
            setError('')
        }
    })
  }, [params.id])

  return (
    <>
    {
        !!book && (
            <div key={book.id} className="grid grid-cols-2 border border-gray-400">
                <div className="">
                    <img src={bookImg} className='w-100' alt="" />
                </div>
                <div className='p-4'>
                    <h1 className='text-3xl'>{book.title}</h1>
                    <hr className='border-gray-400 my-2'/>
                    <p className='text-xl text-gray-700 text-justify'>{book.description}</p>
                    <div className='mt-4'>
                    {
                        !!book.categories && book.categories.map((c) => (
                            <span className='p-2 bg-blue-600 text-gray-50 rounded-xl me-2' key={c}>{c}</span>
                        ))
                    }
                    </div>
                </div>
            </div>
        )
    }
    </>
  )
}
