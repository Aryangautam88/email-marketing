import React from 'react'
import './App.css'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'

function App() {


  return (
    <>
       <div className="left-glow"></div>
      <div className="right-glow"></div>

      <Navbar />
      <Home />
    </>
  )
}

export default App
