import React, { useState } from 'react'

export default function App() {
  let [count, setCount] = useState(0);

  let increaseCount = () => {
    // setCount(count+1); // should not do 
    // setCount(count+1);
    // setCount(count+1);
    
    setCount((prevCount) => prevCount+1);  // should do
    setCount((prevCount) => prevCount+1);
    setCount((prevCount) => prevCount+1);
  }

  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={increaseCount}>add</button>
    </div>
  )
}
