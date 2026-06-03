import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
  const [data, setData] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const navigate = useNavigate(); // Redirect ke liye

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Backend ko data bhej rahe hain
      await axios.post('http://localhost:5000/api/signup', data);
      alert("Signup Successful!");
      navigate('/login'); // Yahan se seedha Login page open hoga
    } catch (err) {
      alert("Signup Failed! Backend.");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="First Name" onChange={(e) => setData({...data, firstName: e.target.value})} required />
        <input type="text" placeholder="Last Name" onChange={(e) => setData({...data, lastName: e.target.value})} required />
        <input type="email" placeholder="Email" onChange={(e) => setData({...data, email: e.target.value})} required />
        <input type="password" placeholder="Password" onChange={(e) => setData({...data, password: e.target.value})} required />
        <button type="submit">Sign Up</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
}
export default Signup;