
import './App.css';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';
import React, {useState, useEffect } from 'react';


function App() {
  const [products ,setProducts]=useState([])

useEffect(()=>{
    fetch("fakeDb.json")
    .then(res=>res.json())
    .then(data=>setProducts(data))
},[])


  return (
    <div >
      <Header ></Header>
      <Shop products={products}></Shop>
    </div>
  );
}

export default App;
