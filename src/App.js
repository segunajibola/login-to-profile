import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/log-in' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;