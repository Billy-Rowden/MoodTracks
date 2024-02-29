import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import JournalNavbar from './components/Navbar'
import JournalFooter from './components/Footer'
import { Login, Contact } from './components/Pages'
import './App.css'

function App() {

  return (
    <Router>
      <JournalNavbar />
      <Routes>
        <Route path='*' element={< Login />} />
        <Route path='/contact' element={< Contact />} />
      </Routes>
      <JournalFooter />
    </Router>
  )
}

export default App
