

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addproduct from './components/Addproduct'
import Navbar from './components/Navbar'
import Ca from './components/Ca'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    
      Welcome
      <Navbar/>
      <Routes>
      <Route path='/'element={<Addproduct/>}></Route>
      <Route path='/home' element={<Ca/>}></Route>
    
      </Routes>
    
    
       
      
    </>
  )
}

export default App

