import { useState } from 'react';
import './App.css';
// import OneImg from './assets/one.jpg';


function App() {
  let [name, setName] = useState("Kyaw Zay Ya"); // [getter, setterFun]

  let changeName = () => {
    setName("Mg Mg");
    console.log(name);
  }

  return (
    <div className="App">
      <h1>{name}</h1>
      {/* <img src={OneImg} alt="" /> */}

      <button onClick={changeName}>Change</button>
    </div>
  );
}

export default App;
