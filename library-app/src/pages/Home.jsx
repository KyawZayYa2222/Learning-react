import { Link } from 'react-router-dom'
import bookImg from '../assets/RS0022-1.jpg'
import useFetch from '../hooks/useFetch'
import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default function Home() {
  let {data: books, loading, error} = useFetch("http://localhost:3001/books")

  let {theme} = useContext(ThemeContext)
  console.log(theme)

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
                    </div>
                    </Link>
                ))
            }
        </div>
        </>
  )
}
