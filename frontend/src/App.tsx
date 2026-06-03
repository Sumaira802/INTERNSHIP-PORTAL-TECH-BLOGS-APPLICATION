import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import About from './About';
import Internship from './Internship';
import Careers from './careers';
import TechBlogs from './techBlogs';
import InternForm from './InternForm';
import TwodThreed from './2d3dArchitecture';
import AI from './ArtificialIntelligence';
import DM from './DigitalMarketing';
import GD from './GraphicDesigning';
import WD from './WebDevelopment';
import AD from './AppDev';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  

  return (
    <Router>
      <div className="App">
        {/* Navbar ko function ke bahar aur Router ke andar rakhein */}
        {isAuthenticated && (
          <Navbar 
            isAuthenticated={isAuthenticated} 
            setIsAuthenticated={setIsAuthenticated} 
          />
        )}

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

          {/* Protected Routes */}
          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
          <Route path="/about" element={isAuthenticated ? <About /> : <Navigate to="/login" />} />
          <Route path="/internship" element={isAuthenticated ? <Internship /> : <Navigate to="/login" />} />          
          <Route path="/careers" element={isAuthenticated ? <Careers /> : <Navigate to="/login" />} />
          <Route path="/techBlogs" element={isAuthenticated ? <TechBlogs /> : <Navigate to="/login" />} />
          <Route path="/InternForm" element={isAuthenticated ? <InternForm /> : <Navigate to="/login" />} />
          
          <Route path="/ArtificialIntelligence" element={isAuthenticated ? <AI /> : <Navigate to="/login" />} />
          <Route path="/architecture" element={isAuthenticated ? <TwodThreed /> : <Navigate to="/login" />} />
          <Route path="/digital-marketing" element={isAuthenticated ? <DM /> : <Navigate to="/login" />} />
          <Route path="/graphics-designing" element={isAuthenticated ? <GD /> : <Navigate to="/login" />} />
          <Route path="/web-development" element={isAuthenticated ? <WD /> : <Navigate to="/login" />} />
          <Route path="/app-development" element={isAuthenticated ? <AD /> : <Navigate to="/login" />} />
          
          <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;