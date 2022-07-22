import React from 'react'
import  "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact"
import NotFound from "./NotFound";
import {BrowserRouter , Router, Routes ,NavLink,Route,Link} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav className='header'>
        <NavLink className="nav-link" to="/Home">Home</NavLink>
        <NavLink className="nav-link" to="/About">About</NavLink>
        <NavLink className="nav-link" to="/Contact">Contact</NavLink>
        
      </nav>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />

        
      </Routes>




    </BrowserRouter>
  )
}

export default App;