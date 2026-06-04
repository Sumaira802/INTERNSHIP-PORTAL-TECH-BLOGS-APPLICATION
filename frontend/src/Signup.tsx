import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css'; // New CSS file

function Signup() {
  const [data, setData] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/signup', data);
      alert("Signup Successful!");
      navigate('/login');
    } catch (err) {
      alert("Signup Failed! Check backend connection.");
    }
  };

  return (
    <div className="signup-wrapper">
      <form className="signup-card" onSubmit={handleSignup}>
        <h2>Create Account</h2>
        <p>Join us to start your journey</p>
        
        <input type="text" placeholder="First Name" onChange={(e) => setData({...data, firstName: e.target.value})} required />
        <input type="text" placeholder="Last Name" onChange={(e) => setData({...data, lastName: e.target.value})} required />
        <input type="email" placeholder="Email Address" onChange={(e) => setData({...data, email: e.target.value})} required />
        <input type="password" placeholder="Password" onChange={(e) => setData({...data, password: e.target.value})} required />
        
        <button type="submit" className="signup-btn">Sign Up</button>
        
        <div className="signup-footer">
          Already have an account? <Link to="/login">Login here</Link>
        </div>
      </form>
    </div>
  );
}
export default Signup;