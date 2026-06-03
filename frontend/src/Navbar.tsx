import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Internship.css';

function Navbar({ isAuthenticated, setIsAuthenticated }: any) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logout logic
    setIsAuthenticated(false);
    alert("You have been logged out successfully!"); // Logout ka message
    navigate('/login'); // Logout ke baad login page par bhej dein
  };

  return (
    <nav>
      <div className="navbar">
        <div className="navbar-logo">
          <video width="120" autoPlay loop muted playsInline>
            <source src="/Logo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/internship">Internships</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/techBlogs">Tech Blogs</Link>

        {/* Conditional Rendering: Agar login hai to Logout button, warna Signup/Login */}
        {isAuthenticated ? (
          <button onClick={handleLogout} style={{ backgroundColor: 'red', color: 'white', padding: '10px' }}>
            Logout
          </button>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}

        <Link to="/InternForm">
          <button style={{ backgroundColor: 'purple', color: 'black', width: '150px', height: '50px', padding: '10px' }}>
            Intern Registration
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;