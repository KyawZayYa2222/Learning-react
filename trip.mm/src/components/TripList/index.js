import React, { useState } from 'react'
import useFetch from '../../hooks/useEffect'
import './index.css'

export default function TripList() {
  let [url, setUrl] = useState('http://localhost:3002/trips')

  let {data: trips, loading, error} = useFetch(url);

  return (
    <div className='trip-list-component'>
        <h1>Trip List</h1>
        {error && <p className='text-danger'>{error}</p>}
        {
            !error && <div>
                {loading && <p>Loading trips</p>}
                <button onClick={() => setUrl('http://localhost:3002/trips')}>All</button>
                <button onClick={() => setUrl('http://localhost:3002/trips?location=Myanmar')}>Myanmar</button>
                <ul>
                    {trips && trips.map((trip) => (
                        <li key={trip.id}>
                            Trip {trip.name} Price {trip.price} mmk
                        </li>
                    ))}
                </ul>
            </div>
        }
    </div>
  )
}
