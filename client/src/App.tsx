import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style/main.css'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Map from './components/Map';
import About from './components/About';
import Pricing from './components/Pricing';
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/map" element={<Map />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;