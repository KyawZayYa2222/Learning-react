import React, { useEffect, useState } from 'react'

export default function TripList() {
  let [trips, setTrips] = useState([])
  let [url, setUrl] = useState('http://localhost:3002/trips')

  useEffect(()=>{
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
        setTrips(data)
        console.log(trips)
    })
  },[url])

  return (
    <div>
        <h1>Trip List</h1>
        <button onClick={() => setUrl('http://localhost:3002/trips')}>All</button>
        <button onClick={() => setUrl('http://localhost:3002/trips?location=Myanmar')}>Myanmar</button>
        <ul>
            {!!trips.length && trips.map((trip) => (
                <li key={trip.id}>
                    Trip {trip.name} Price {trip.price} mmk
                </li>
            ))}
        </ul>
    </div>
  )
}
