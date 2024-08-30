import { useState } from 'react'
import HouseContext from './HouseContext'
import './App.css'
import Favourites from './components/Favourites/Favourites'
import { HouseProvider } from './HouseContext'
import Dashboard from './components/Dashboard/Dashboard'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
function App() {
  return (
    <>
      <HouseProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </BrowserRouter>
      </HouseProvider>
    </>
  )
}

export default App
