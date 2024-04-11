import React,{useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './main.css'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Map from './components/Map';
import About from './components/About';
import Pricing from './components/Pricing';
import Offers from './components/Offers';
import PersonalTrainer from './components/PersonalTrainer';
import Login from './components/login/Login';
import Register from './components/register/Register'
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
          <Route path="/offers" element={<Offers />} />
          <Route path="/personal-trainer" element={<PersonalTrainer/>}/>
          <Route path='/login' element={<Login error=''/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App;