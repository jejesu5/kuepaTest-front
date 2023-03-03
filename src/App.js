import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Register from './Pages/auth/Register'
import Login from './Pages/auth/Login'
import Home from './Pages/Home/Home'


function App () {
  return (
    <Routes>
       <Route path='/' element={<Login />} /> 
       <Route path='/home' element={<Home />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default App
