import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import JournalNavbar from './components/Navbar';
import JournalFooter from './components/Footer';
import { Login, Contact, Journal, Socials } from './components/Pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const NavbarVisibility = () => {
    const isLoginPage = useLocation().pathname === '/';
    return !isLoginPage ? <JournalNavbar /> : null;
  };

  return (
    <Router>
      <NavbarVisibility />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/socials" element={<Socials />} />
      </Routes>
      <JournalFooter />
    </Router>
  );
}

export default App;
