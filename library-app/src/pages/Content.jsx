import { useParams } from 'react-router-dom'
import bookImg from '../assets/RS0022-1.jpg'
import useFetch from '../hooks/useFetch';

export default function Content() {
  let params = useParams();
  let {data: book, loading, error} = useFetch(`http://localhost:3001/books?id=${params.id}`)

  return (
    <>
    {
        !!book && book.map((b) => (
            <div key={b} className="grid grid-cols-2 border border-gray-400">
                <div className="">
                    <img src={bookImg} className='w-100' alt="" />
                </div>
                <div className='p-4'>
                    <h1 className='text-3xl'>{b.title}</h1>
                    <hr className='border-gray-400 my-2'/>
                    <p className='text-xl text-gray-700 text-justify'>{b.content}</p>
                    <div className='mt-4'>
                    {
                        !!b.categories && b.categories.map((c) => (
                            <span className='p-2 bg-blue-600 text-gray-50 rounded-xl me-2' key={c}>{c}</span>
                        ))
                    }
                    </div>
                </div>
            </div>
        ))
    }
    </>
  )
}
