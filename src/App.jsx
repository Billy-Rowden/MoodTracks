import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { } from './components/Pages'
import './App.css'

function App() {

  return (
    <Router>
      {/* navbar? or perhaps this is where the emotions are kept */}
      <Routes>
        {/* <Route Homepage where user prompts journal entry for that day? /> */}
        {/* <Route main page where the mood, playlist and journal entry is /> */}
        {/* <Route calendar for past journal entries? /> */}
        {/* <Route resources /> */}
        {/* <Route meet the developers? contact section? /> */}
      </Routes>
      {/* footer? */}
    </Router>
  )
}

export default App
